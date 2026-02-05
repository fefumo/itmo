#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Визуализация распределения яркости на сфере (модель Блинн-Фонга)
при освещении точечными источниками с ламбертовской диаграммой излучения.

Координаты и размеры вводятся В МЕТРАХ.

Соглашения:
- Экран (плоскость изображения) — прямоугольник в плоскости z=0, центр в (0,0,0).
- Наблюдатель: (0,0,-zO), zO>0.
- Лучи: от наблюдателя через пиксели экрана в сторону +z.
- Сфера: центр C=(xC,yC,zC), радиус R.

Ламбертовский излучатель (ориентированный):
I = I0 * max(0, dot(Ldir, dir_light_to_point))
E = (I / r^2) * max(0, dot(n, l))

Блинн-Фонг:
total = ka + kd*E + ks*(I/r^2) * max(0, dot(n,h))^shininess * max(0, dot(n,l))

Нормировка:
0..255 по максимуму яркости кадра (линейно).
"""

from __future__ import annotations

import threading
from dataclasses import dataclass
from typing import List, Optional, Tuple

import numpy as np
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import tkinter.font as tkfont

from PIL import Image, ImageTk

EPS = 1e-12


@dataclass
class Light:
    enabled: bool
    x: float
    y: float
    z: float
    i0: float  # пользовательское I0 (в выбранных единицах)
    area: float  # площадь S (м^2) — используется для Вт/(ср·м²)
    dx: float
    dy: float
    dz: float


@dataclass
class Params:
    # Экран, м
    W_m: float
    H_m: float
    Wres: int
    Hres: int

    # Наблюдатель, м
    zO: float

    # Сфера, м
    xC: float
    yC: float
    zC: float
    R: float

    # Блинн-Фонг
    ka: float
    kd: float
    ks: float
    shininess: float

    # Единицы I0
    i0_units: str  # "Вт/ср" или "Вт/(ср·м²)"

    lights: List[Light]


def _normalize(v: np.ndarray) -> np.ndarray:
    """Нормировка по последней оси."""
    n = np.linalg.norm(v, axis=-1, keepdims=True)
    return v / np.maximum(n, EPS)


def render_image(p: Params) -> Tuple[np.ndarray, float]:
    """Возвращает (изображение uint8, max яркость до нормировки)."""
    Wres, Hres = int(p.Wres), int(p.Hres)
    if Wres <= 0 or Hres <= 0:
        raise ValueError("Разрешение должно быть положительным.")

    # Центры пикселей на экране (z=0), м
    x = (np.arange(Wres) + 0.5 - Wres / 2.0) * (p.W_m / Wres)
    y = (Hres / 2.0 - (np.arange(Hres) + 0.5)) * (p.H_m / Hres)
    xx, yy = np.meshgrid(x, y)

    O = np.array([0.0, 0.0, -float(p.zO)], dtype=np.float64)
    Pscreen = np.stack([xx, yy, np.zeros_like(xx)], axis=-1)
    D = _normalize(Pscreen - O)

    C = np.array([p.xC, p.yC, p.zC], dtype=np.float64)
    OC = O - C

    # t^2 + 2*(D·OC)*t + (OC·OC - R^2)=0
    b = 2.0 * (D[..., 0] * OC[0] + D[..., 1] * OC[1] + D[..., 2] * OC[2])
    c = (OC[0] ** 2 + OC[1] ** 2 + OC[2] ** 2) - (p.R**2)
    disc = b * b - 4.0 * c

    hit = disc >= 0.0
    t = np.full((Hres, Wres), np.nan, dtype=np.float64)

    sqrt_disc = np.zeros_like(disc)
    sqrt_disc[hit] = np.sqrt(disc[hit])

    t0 = (-b - sqrt_disc) / 2.0
    t1 = (-b + sqrt_disc) / 2.0
    t_candidate = np.where(t0 > EPS, t0, np.where(t1 > EPS, t1, np.nan))
    t[hit] = t_candidate[hit]
    hit = np.isfinite(t)

    if not np.any(hit):
        return np.zeros((Hres, Wres), dtype=np.uint8), 0.0

    P = O + D * t[..., None]
    N = _normalize(P - C)
    V = _normalize(O - P)

    brightness = np.zeros((Hres, Wres), dtype=np.float64)

    mask = hit
    Pm = P[mask]
    Nm = N[mask]
    Vm = V[mask]

    total = np.full((Pm.shape[0],), float(p.ka), dtype=np.float64)

    for L in p.lights:
        if not L.enabled:
            continue

        Lpos = np.array([L.x, L.y, L.z], dtype=np.float64)
        Ldir = np.array([L.dx, L.dy, L.dz], dtype=np.float64)

        # Если направление не задано — направляем на центр сферы
        if np.linalg.norm(Ldir) < 1e-9:
            Ldir = C - Lpos
        Ldir = Ldir / max(np.linalg.norm(Ldir), EPS)

        Lvec = Lpos[None, :] - Pm
        r2 = np.sum(Lvec * Lvec, axis=-1)
        l = Lvec / np.maximum(np.sqrt(r2)[:, None], EPS)

        dir_light_to_point = -l
        cos_theta = np.maximum(0.0, np.sum(dir_light_to_point * Ldir[None, :], axis=-1))

        # I0: Вт/ср или Вт/(ср·м²)
        if p.i0_units == "Вт/(ср·м²)":
            I = float(L.i0) * float(L.area) * cos_theta
        else:
            I = float(L.i0) * cos_theta

        atten = I / np.maximum(r2, EPS)

        ndotl = np.maximum(0.0, np.sum(Nm * l, axis=-1))
        diffuse = float(p.kd) * atten * ndotl

        H = _normalize(l + Vm)
        ndoth = np.maximum(0.0, np.sum(Nm * H, axis=-1))
        specular = float(p.ks) * atten * (ndoth ** float(p.shininess)) * ndotl

        total += diffuse + specular

    brightness_masked = np.zeros_like(brightness)
    brightness_masked[mask] = total
    brightness = brightness_masked

    max_val = float(np.max(brightness))
    if max_val <= 0.0:
        return np.zeros((Hres, Wres), dtype=np.uint8), 0.0

    img = np.clip(brightness / max_val * 255.0, 0.0, 255.0).astype(np.uint8)
    return img, max_val


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Яркость на сфере (Блинн-Фонг) — ламбертовские точечные источники")

        # 1) Окно больше по умолчанию (и под изображение больше места)
        self.geometry("1600x950")
        self.minsize(1200, 800)

        self.style = ttk.Style(self)

        # --- Масштаб интерфейса (HiDPI) ---
        self._base_scaling = self._estimate_tk_scaling()
        self.ui_scale_var = tk.StringVar(value="Авто")
        self._apply_ui_scaling("Авто")

        self._imgtk: Optional[ImageTk.PhotoImage] = None
        self._last_pil: Optional[Image.Image] = None
        self._preview_after_id: Optional[str] = None

        self._build_ui()

    def _estimate_tk_scaling(self) -> float:
        """Оценка DPI через Tk."""
        try:
            dpi = float(self.winfo_fpixels("1i"))
            return max(0.8, min(4.0, dpi / 72.0))
        except Exception:
            return 1.0

    def _apply_ui_scaling(self, mode: str):
        """
        2) Реальное масштабирование: меняем и tk scaling, и размер именованных шрифтов.
        На Linux/Wayland авто-DPI часто неверный — поэтому ручные 150/200% обязаны работать.
        """
        if mode == "Авто":
            mult = 1.0
        else:
            try:
                mult = float(mode.strip().replace("%", "")) / 100.0
            except Exception:
                mult = 1.0

        # Масштаб геометрии Tk (пикселей на пункт)
        scale = self._base_scaling * mult
        self.tk.call("tk", "scaling", scale)

        # Принудительно увеличиваем шрифты (это ключевое для ttk на HiDPI)
        self._set_named_fonts(mult)

        # Обновляем стиль ttk, чтобы он точно подхватил новый шрифт
        try:
            self.style.configure(".", font=tkfont.nametofont("TkDefaultFont"))
        except Exception:
            pass

        # После изменения масштаба лучше обновить и превью (если уже есть)
        self.after_idle(self._update_preview)

    def _set_named_fonts(self, mult: float):
        """Устанавливает размеры системных именованных шрифтов."""
        # Базовые размеры (в пунктах) — можно подправить, если хочется
        base = {
            "TkDefaultFont": 11,
            "TkTextFont": 11,
            "TkMenuFont": 11,
            "TkHeadingFont": 11,
            "TkCaptionFont": 11,
            "TkSmallCaptionFont": 10,
            "TkIconFont": 11,
            "TkFixedFont": 11,
        }
        for name, size in base.items():
            try:
                f = tkfont.nametofont(name)
                f.configure(size=max(8, int(round(size * mult))))
            except Exception:
                continue

    def _build_ui(self):
        self.columnconfigure(0, weight=0)
        self.columnconfigure(1, weight=1)
        self.rowconfigure(0, weight=1)

        left = ttk.Frame(self, padding=10)
        left.grid(row=0, column=0, sticky="nsw")
        right = ttk.Frame(self, padding=10)
        right.grid(row=0, column=1, sticky="nsew")

        right.columnconfigure(0, weight=1)
        right.rowconfigure(1, weight=1)

        # Панель масштаба
        topbar = ttk.Frame(right)
        topbar.grid(row=0, column=0, sticky="ew", pady=(0, 8))
        topbar.columnconfigure(3, weight=1)

        ttk.Label(topbar, text="Масштаб интерфейса:").grid(row=0, column=0, sticky="w")
        scale_cb = ttk.Combobox(
            topbar,
            textvariable=self.ui_scale_var,
            values=["Авто", "100%", "125%", "150%", "175%", "200%"],
            width=10,
            state="readonly",
        )
        scale_cb.grid(row=0, column=1, sticky="w", padx=(8, 0))

        ttk.Label(topbar, text="(Если на 2K мелко — выберите 150%/200%)").grid(
            row=0, column=2, sticky="w", padx=(12, 0)
        )

        def on_scale_change(_evt=None):
            self._apply_ui_scaling(self.ui_scale_var.get())

        scale_cb.bind("<<ComboboxSelected>>", on_scale_change)

        # Рамка под изображение (делает область визуально “больше” и аккуратнее)
        img_box = ttk.LabelFrame(right, text="Изображение", padding=8)
        img_box.grid(row=1, column=0, sticky="nsew")
        img_box.columnconfigure(0, weight=1)
        img_box.rowconfigure(0, weight=1)

        self.img_label = ttk.Label(
            img_box,
            text="Нажмите «Рассчитать», чтобы увидеть изображение",
            anchor="center",
        )
        self.img_label.grid(row=0, column=0, sticky="nsew")

        # Динамическое изменение превью при ресайзе области изображения
        self.img_label.bind("<Configure>", lambda _e: self._schedule_preview_update())

        # --- Левая панель ---
        self.vars = {}

        def add_field(parent, row, label, default, width=22):
            ttk.Label(parent, text=label).grid(row=row, column=0, sticky="w", pady=2)
            v = tk.StringVar(value=str(default))
            ttk.Entry(parent, textvariable=v, width=width).grid(
                row=row, column=1, sticky="w", pady=2
            )
            self.vars[label] = v
            return v

        scene = ttk.LabelFrame(left, text="Параметры сцены (в метрах)", padding=10)
        scene.grid(row=0, column=0, sticky="nw")

        r = 0
        add_field(scene, r, "Ширина экрана W (м)", 1.2)
        r += 1
        add_field(scene, r, "Высота экрана H (м)", 1.2)
        r += 1
        add_field(scene, r, "Разрешение по ширине Wres (px)", 600)
        r += 1
        add_field(scene, r, "Разрешение по высоте Hres (px)", 600)
        r += 1

        self.auto_square = tk.BooleanVar(value=True)
        ttk.Checkbutton(
            scene,
            text="Автоматически обеспечить квадратные пиксели",
            variable=self.auto_square,
        ).grid(row=r, column=0, columnspan=2, sticky="w", pady=(2, 8))
        r += 1

        add_field(scene, r, "Наблюдатель zO (м)", 2.0)
        r += 1

        ttk.Separator(scene).grid(row=r, column=0, columnspan=2, sticky="ew", pady=8)
        r += 1

        add_field(scene, r, "Центр сферы xC (м)", 0.0)
        r += 1
        add_field(scene, r, "Центр сферы yC (м)", 0.0)
        r += 1
        add_field(scene, r, "Центр сферы zC (м)", 3.5)
        r += 1
        add_field(scene, r, "Радиус сферы R (м)", 0.8)
        r += 1

        ttk.Separator(scene).grid(row=r, column=0, columnspan=2, sticky="ew", pady=8)
        r += 1

        add_field(scene, r, "ka (окружающий)", 0.02)
        r += 1
        add_field(scene, r, "kd (диффузный)", 0.75)
        r += 1
        add_field(scene, r, "ks (зеркальный)", 1.35)
        r += 1
        add_field(scene, r, "shininess (блеск)", 28)
        r += 1

        lights_frame = ttk.LabelFrame(
            left, text="Источники света (Ламбертовская диаграмма)", padding=10
        )
        lights_frame.grid(row=1, column=0, sticky="nw", pady=(10, 0))

        units_bar = ttk.Frame(lights_frame)
        units_bar.grid(row=0, column=0, columnspan=20, sticky="ew", pady=(0, 6))
        ttk.Label(units_bar, text="Единицы I0:").grid(row=0, column=0, sticky="w")

        self.i0_units_var = tk.StringVar(value="Вт/ср")
        units_cb = ttk.Combobox(
            units_bar,
            textvariable=self.i0_units_var,
            values=["Вт/ср", "Вт/(ср·м²)"],
            width=12,
            state="readonly",
        )
        units_cb.grid(row=0, column=1, sticky="w", padx=(8, 0))
        ttk.Label(units_bar, text="(Если Вт/(ср·м²), то I = I0·S)").grid(
            row=0, column=2, sticky="w", padx=(10, 0)
        )

        self.light_vars = []
        headers = ["Вкл", "x (м)", "y (м)", "z (м)", "I0", "S (м²)", "dx", "dy", "dz"]
        for j, h in enumerate(headers):
            ttk.Label(lights_frame, text=h).grid(
                row=1, column=j, padx=2, pady=2, sticky="w"
            )

        default_lights = [
            (True, -0.65, 0.55, 1.30, 2600, 0.02, 0, 0, 0),
            (True, 0.90, -0.20, 2.20, 1200, 0.02, 0, 0, 0),
            (False, 0.00, 1.20, 2.80, 800, 0.02, 0, 0, 0),
        ]
        for i in range(3):
            on = tk.BooleanVar(value=default_lights[i][0])
            ttk.Checkbutton(lights_frame, variable=on).grid(
                row=i + 2, column=0, padx=2, pady=2
            )
            row_vars = [on]
            for j, val in enumerate(default_lights[i][1:], start=1):
                v = tk.StringVar(value=str(val))
                ttk.Entry(lights_frame, textvariable=v, width=9).grid(
                    row=i + 2, column=j, padx=2, pady=2
                )
                row_vars.append(v)
            self.light_vars.append(row_vars)

        btns = ttk.Frame(left)
        btns.grid(row=2, column=0, sticky="nw", pady=12)

        self.render_btn = ttk.Button(btns, text="Рассчитать", command=self.on_render)
        self.render_btn.grid(row=0, column=0, padx=4)

        self.save_btn = ttk.Button(
            btns, text="Сохранить PNG…", command=self.on_save, state="disabled"
        )
        self.save_btn.grid(row=0, column=1, padx=4)

        self.info_lbl = ttk.Label(left, text="", wraplength=440, justify="left")
        self.info_lbl.grid(row=3, column=0, sticky="nw")

    def _parse_float(self, key: str) -> float:
        return float(self.vars[key].get().strip().replace(",", "."))

    def _parse_int(self, key: str) -> int:
        return int(float(self.vars[key].get().strip().replace(",", ".")))

    def _gather_params(self) -> Params:
        W_m = self._parse_float("Ширина экрана W (м)")
        H_m = self._parse_float("Высота экрана H (м)")
        Wres = self._parse_int("Разрешение по ширине Wres (px)")
        Hres = self._parse_int("Разрешение по высоте Hres (px)")

        if self.auto_square.get():
            if W_m <= 0 or H_m <= 0 or Wres <= 0:
                raise ValueError("Размеры экрана и Wres должны быть > 0.")
            Hres = max(1, int(round(H_m * Wres / W_m)))
            self.vars["Разрешение по высоте Hres (px)"].set(str(Hres))

        zO = self._parse_float("Наблюдатель zO (м)")
        if zO <= 0:
            raise ValueError("zO должен быть > 0.")

        xC = self._parse_float("Центр сферы xC (м)")
        yC = self._parse_float("Центр сферы yC (м)")
        zC = self._parse_float("Центр сферы zC (м)")
        R = self._parse_float("Радиус сферы R (м)")
        if R <= 0:
            raise ValueError("Радиус сферы R должен быть > 0.")

        ka = self._parse_float("ka (окружающий)")
        kd = self._parse_float("kd (диффузный)")
        ks = self._parse_float("ks (зеркальный)")
        shininess = self._parse_float("shininess (блеск)")
        if shininess <= 0:
            raise ValueError("shininess должен быть > 0.")

        i0_units = self.i0_units_var.get().strip()
        if i0_units not in ("Вт/ср", "Вт/(ср·м²)"):
            i0_units = "Вт/ср"

        lights: List[Light] = []
        for row in self.light_vars:
            enabled = bool(row[0].get())
            x = float(row[1].get().replace(",", "."))
            y = float(row[2].get().replace(",", "."))
            z = float(row[3].get().replace(",", "."))
            i0 = float(row[4].get().replace(",", "."))
            area = float(row[5].get().replace(",", "."))
            dx = float(row[6].get().replace(",", "."))
            dy = float(row[7].get().replace(",", "."))
            dz = float(row[8].get().replace(",", "."))

            if area <= 0:
                area = 1e-6

            lights.append(Light(enabled, x, y, z, i0, area, dx, dy, dz))

        return Params(
            W_m=W_m,
            H_m=H_m,
            Wres=Wres,
            Hres=Hres,
            zO=zO,
            xC=xC,
            yC=yC,
            zC=zC,
            R=R,
            ka=ka,
            kd=kd,
            ks=ks,
            shininess=shininess,
            i0_units=i0_units,
            lights=lights,
        )

    def on_render(self):
        try:
            p = self._gather_params()
        except Exception as e:
            messagebox.showerror("Некорректные параметры", str(e))
            return

        self.render_btn.config(state="disabled")
        self.save_btn.config(state="disabled")
        self.info_lbl.config(text="Расчёт…")

        def worker():
            try:
                img_u8, max_val = render_image(p)
                pil = Image.fromarray(img_u8, mode="L")

                def done():
                    self._last_pil = pil
                    self._update_preview()
                    self.save_btn.config(state="normal")
                    self.info_lbl.config(
                        text=(
                            f"Готово.\n"
                            f"Максимальная яркость до нормировки: {max_val:.6g} (условн.).\n"
                            f"Нормировка: 0..255 по максимуму.\n"
                            f"Итоговое изображение: {p.Wres}×{p.Hres} px.\n"
                            f"Единицы I0: {p.i0_units}."
                        )
                    )
                    self.render_btn.config(state="normal")

                self.after(0, done)
            except Exception as e:

                def fail():
                    messagebox.showerror("Ошибка расчёта", str(e))
                    self.info_lbl.config(text="")
                    self.render_btn.config(state="normal")

                self.after(0, fail)

        threading.Thread(target=worker, daemon=True).start()

    def _schedule_preview_update(self):
        """Чтобы не перерисовывать превью слишком часто при ресайзе."""
        if self._preview_after_id is not None:
            try:
                self.after_cancel(self._preview_after_id)
            except Exception:
                pass
        self._preview_after_id = self.after(60, self._update_preview)

    def _update_preview(self):
        """Рисует превью под текущий размер области изображения."""
        self._preview_after_id = None
        if self._last_pil is None:
            return

        w = max(1, self.img_label.winfo_width() - 10)
        h = max(1, self.img_label.winfo_height() - 10)

        disp = self._last_pil.resize(
            self._fit_size(self._last_pil.size, (w, h)), resample=Image.NEAREST
        )
        self._imgtk = ImageTk.PhotoImage(disp)
        self.img_label.configure(image=self._imgtk, text="")

    def _fit_size(self, size: Tuple[int, int], box: Tuple[int, int]) -> Tuple[int, int]:
        w, h = size
        bw, bh = box
        if w <= 0 or h <= 0:
            return (1, 1)
        scale = min(bw / w, bh / h, 1.0)
        return (max(1, int(round(w * scale))), max(1, int(round(h * scale))))

    def on_save(self):
        if self._last_pil is None:
            return
        path = filedialog.asksaveasfilename(
            defaultextension=".png",
            filetypes=[("PNG изображение", "*.png"), ("Все файлы", "*.*")],
        )
        if not path:
            return
        try:
            self._last_pil.save(path, format="PNG")
            messagebox.showinfo("Сохранено", f"Файл сохранён:\n{path}")
        except Exception as e:
            messagebox.showerror("Ошибка сохранения", str(e))


if __name__ == "__main__":
    App().mainloop()
