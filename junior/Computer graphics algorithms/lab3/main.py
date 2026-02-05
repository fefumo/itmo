#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ЛР_3. Освещённость от точечного источника (Lambertian).
Слева — центрируемое изображение (Canvas), показывается ТОЛЬКО освещённость внутри круга анализа.
Видимый размер управляется Hres/Wres (без апскейла >1:1).
Справа — два сечения по ВСЕЙ области: E(x, y=yc) и E(x=xc, y).
Сохранение: PNG (маскированное изображение) и summary.txt.
"""

from __future__ import annotations
import traceback
from dataclasses import dataclass
from pathlib import Path
from datetime import datetime
from typing import Tuple

import numpy as np

# GUI
import tkinter as tk
from tkinter import ttk, messagebox, filedialog

# Изображения
from PIL import Image, ImageTk

# Графики (встраиваем в Tk)
import matplotlib

matplotlib.use("TkAgg")
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg


@dataclass
class Params:
    H_mm: float = 1000.0
    W_mm: float = 1000.0
    Hres: int = 400
    Wres: int = 400
    xL_mm: float = 200.0
    yL_mm: float = -150.0
    zL_mm: float = 600.0
    I0: float = 250.0
    xc_mm: float = 0.0
    yc_mm: float = 0.0
    Rc_mm: float = 300.0


def validate_params(p: Params) -> None:
    assert 100 <= p.H_mm <= 10000, "H must be in [100, 10000] mm"
    assert 100 <= p.W_mm <= 10000, "W must be in [100, 10000] mm"
    assert 200 <= p.Hres <= 800, "Hres must be in [200, 800] px"
    assert 200 <= p.Wres <= 800, "Wres must be in [200, 800] px"
    # квадратные пиксели
    assert abs((p.W_mm / p.H_mm) - (p.Wres / p.Hres)) < 1e-9, (
        "Квадратные пиксели: W/H должно равняться Wres/Hres"
    )
    assert -10000 <= p.xL_mm <= 10000, "xL must be in [-10000, 10000] mm"
    assert -10000 <= p.yL_mm <= 10000, "yL must be in [-10000, 10000] mm"
    assert 100 <= p.zL_mm <= 10000, "zL must be in [100, 10000] mm"
    assert 0.01 <= p.I0 <= 10000, "I0 must be in [0.01, 10000] W/sr"
    halfW, halfH = p.W_mm / 2, p.H_mm / 2
    assert p.Rc_mm >= 0, "Rc must be non-negative"
    assert (abs(p.xc_mm) + p.Rc_mm) <= halfW + 1e-9 and (abs(p.yc_mm) + p.Rc_mm) <= halfH + 1e-9, (
        "Круг анализа должен целиком помещаться в прямоугольник"
    )


def compute_grid(H_mm: float, W_mm: float, Hres: int, Wres: int) -> Tuple[np.ndarray, np.ndarray]:
    xs = np.linspace(-W_mm / 2, W_mm / 2, Wres)
    ys = np.linspace(-H_mm / 2, H_mm / 2, Hres)
    X_mm, Y_mm = np.meshgrid(xs, ys)
    return X_mm, Y_mm


def illuminance_lambertian(
    X_mm: np.ndarray, Y_mm: np.ndarray, xL_mm: float, yL_mm: float, zL_mm: float, I0: float
) -> np.ndarray:
    # метры
    X = X_mm / 1000.0
    Y = Y_mm / 1000.0
    xL = xL_mm / 1000.0
    yL = yL_mm / 1000.0
    zL = zL_mm / 1000.0
    r2 = (X - xL) ** 2 + (Y - yL) ** 2 + zL**2
    return I0 * (zL**2) / (r2**2)  # Вт/м²


def circle_mask(X_mm: np.ndarray, Y_mm: np.ndarray, xc_mm: float, yc_mm: float, Rc_mm: float) -> np.ndarray:
    return ((X_mm - xc_mm) ** 2 + (Y_mm - yc_mm) ** 2) <= Rc_mm**2


def normalize_uint8(E: np.ndarray, mask: np.ndarray | None = None) -> Tuple[np.ndarray, float]:
    """Нормировка 0..255. Если mask задан, берём максимум ТОЛЬКО по маске; вне маски — 0."""
    if mask is not None and np.any(mask):
        Emax = float(np.max(E[mask]))
        if Emax <= 0:
            En = np.zeros_like(E, dtype=np.uint8)
        else:
            En = (E / Emax) * 255.0
            En[~mask] = 0.0
            En = En.clip(0, 255).astype(np.uint8)
        return En, Emax
    else:
        Emax = float(E.max())
        if Emax <= 0:
            return np.zeros_like(E, dtype=np.uint8), Emax
        En = (E / Emax) * 255.0
        return En.clip(0, 255).astype(np.uint8), Emax


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("ЛР_3 — Освещённость от точечного источника (Lambertian)")
        self.geometry("1280x760")

        self.params = Params()
        self.X_mm: np.ndarray | None = None
        self.Y_mm: np.ndarray | None = None
        self.E: np.ndarray | None = None
        self.Enorm_masked: np.ndarray | None = None
        self.Emax: float | None = None
        self.stats: dict = {}
        self.point_values: dict = {}

        # Canvas image state
        self._img_pil_base: Image.Image | None = None
        self._img_tk: ImageTk.PhotoImage | None = None
        self._img_canvas_item: int | None = None
        self._circle_item: int | None = None
        self._canvas_info = {"cw": 0, "ch": 0, "nw": 0, "nh": 0, "x0": 0, "y0": 0}

        self._build_ui()
        self.on_calculate()  # стартовый расчёт

    # ---------- UI ----------

    def _build_ui(self):
        root = ttk.Frame(self)
        root.pack(fill="both", expand=True, padx=8, pady=8)

        # Левый столбец — ввод параметров и кнопки
        left = ttk.Frame(root)
        left.pack(side="left", fill="y")

        box_area = ttk.LabelFrame(left, text="Область изображения (мм / пикс.)")
        box_area.pack(fill="x", padx=4, pady=4)
        self.var_H = self._add_labeled_entry(box_area, "H (100..10000) мм:", str(self.params.H_mm))
        self.var_W = self._add_labeled_entry(box_area, "W (100..10000) мм:", str(self.params.W_mm))
        self.var_Hres = self._add_labeled_entry(box_area, "Hres (200..800) px:", str(self.params.Hres))
        self.var_Wres = self._add_labeled_entry(box_area, "Wres (200..800) px:", str(self.params.Wres))

        box_light = ttk.LabelFrame(left, text="Источник света (мм, Вт/ср)")
        box_light.pack(fill="x", padx=4, pady=4)
        self.var_xL = self._add_labeled_entry(box_light, "xL (±10000) мм:", str(self.params.xL_mm))
        self.var_yL = self._add_labeled_entry(box_light, "yL (±10000) мм:", str(self.params.yL_mm))
        self.var_zL = self._add_labeled_entry(box_light, "zL (100..10000) мм:", str(self.params.zL_mm))
        self.var_I0 = self._add_labeled_entry(box_light, "I0 (0.01..10000) Вт/ср:", str(self.params.I0))

        box_circle = ttk.LabelFrame(left, text="Круг анализа на плоскости (мм)")
        box_circle.pack(fill="x", padx=4, pady=4)
        self.var_xc = self._add_labeled_entry(box_circle, "x_c (мм):", str(self.params.xc_mm))
        self.var_yc = self._add_labeled_entry(box_circle, "y_c (мм):", str(self.params.yc_mm))
        self.var_Rc = self._add_labeled_entry(box_circle, "R_c (мм):", str(self.params.Rc_mm))

        btns = ttk.Frame(left)
        btns.pack(fill="x", padx=4, pady=6)
        ttk.Button(btns, text="Рассчитать / Обновить", command=self.on_calculate).pack(fill="x", pady=2)
        ttk.Button(btns, text="Сохранить изображение (PNG)", command=self.on_save_image).pack(
            fill="x", pady=2
        )
        ttk.Button(btns, text="Сохранить данные (summary.txt)", command=self.on_save_data).pack(
            fill="x", pady=2
        )

        tip = ttk.Label(left, text="Треб.: W/H = Wres/Hres (квадратные пиксели)", foreground="#555")
        tip.pack(fill="x", padx=4, pady=4)

        # Правая часть — изображение и график рядом
        right = ttk.Frame(root)
        right.pack(side="right", fill="both", expand=True)

        visual_row = ttk.Frame(right)
        visual_row.pack(fill="both", expand=True, padx=6, pady=6)

        # Левая половина — изображение (Canvas, центрирование и масштаб)
        img_frame = ttk.LabelFrame(visual_row, text="Нормированное изображение (0..255) — внутри круга")
        img_frame.pack(side="left", fill="both", expand=True, padx=(0, 6))
        self.img_canvas = tk.Canvas(img_frame, highlightthickness=0, bg="white")
        self.img_canvas.pack(fill="both", expand=True)
        self.img_canvas.bind("<Configure>", lambda e: self._redraw_canvas_image())

        # Правая половина — динамический график (две кривые)
        plot_frame = ttk.LabelFrame(visual_row, text="Сечения по всей области: E(x, y=yc) и E(x=xc, y)")
        plot_frame.pack(side="left", fill="both", expand=True)

        self.section_fig = Figure(figsize=(5, 4), dpi=100)
        self.section_ax = self.section_fig.add_subplot(111)
        self.section_ax.grid(True, alpha=0.3)
        self.section_ax.set_xlabel("координата, мм")
        self.section_ax.set_ylabel("E, Вт/м²")
        self.section_canvas = FigureCanvasTkAgg(self.section_fig, master=plot_frame)
        self.section_canvas.draw()
        self.section_canvas.get_tk_widget().pack(fill="both", expand=True)

        val_frame = ttk.LabelFrame(right, text="Контрольные точки и статистика (Вт/м²)")
        val_frame.pack(fill="x", padx=6, pady=(0, 6))
        self.text_values = tk.Text(val_frame, height=8, wrap="word")
        self.text_values.pack(fill="both", expand=True)
        self.text_values.configure(state="disabled")

    def _add_labeled_entry(self, parent, label, init):
        f = ttk.Frame(parent)
        f.pack(fill="x", padx=4, pady=2)
        ttk.Label(f, text=label, width=24, anchor="w").pack(side="left")
        var = tk.StringVar(value=init)
        ttk.Entry(f, textvariable=var, width=16).pack(side="left")
        return var

    # ---------- Действия ----------

    def _read_params_from_ui(self) -> Params:
        p = Params(
            H_mm=float(self.var_H.get()),
            W_mm=float(self.var_W.get()),
            Hres=int(self.var_Hres.get()),
            Wres=int(self.var_Wres.get()),
            xL_mm=float(self.var_xL.get()),
            yL_mm=float(self.var_yL.get()),
            zL_mm=float(self.var_zL.get()),
            I0=float(self.var_I0.get()),
            xc_mm=float(self.var_xc.get()),
            yc_mm=float(self.var_yc.get()),
            Rc_mm=float(self.var_Rc.get()),
        )
        validate_params(p)
        return p

    def on_calculate(self):
        try:
            self.params = self._read_params_from_ui()
        except Exception as e:
            messagebox.showerror("Ошибка параметров", str(e))
            return

        try:
            # сетка и поле
            self.X_mm, self.Y_mm = compute_grid(
                self.params.H_mm, self.params.W_mm, self.params.Hres, self.params.Wres
            )
            self.E = illuminance_lambertian(
                self.X_mm, self.Y_mm, self.params.xL_mm, self.params.yL_mm, self.params.zL_mm, self.params.I0
            )

            # маска круга и нормировка по максимуму ВНУТРИ круга; вне круга — 0
            mask = circle_mask(self.X_mm, self.Y_mm, self.params.xc_mm, self.params.yc_mm, self.params.Rc_mm)
            if not np.any(mask):
                messagebox.showwarning(
                    "Пустой круг", "Круг анализа не захватил ни одного пикселя при текущем разрешении."
                )
            self.Enorm_masked, self.Emax = normalize_uint8(self.E, mask=mask)

            # PIL для Canvas (нативный размер — Wres x Hres)
            self._img_pil_base = Image.fromarray(self.Enorm_masked, mode="L")

            # статистика в круге
            E_in = self.E[mask] if np.any(mask) else np.array([0.0])
            self.stats = {
                "min": float(np.min(E_in)),
                "max": float(np.max(E_in)),
                "mean": float(np.mean(E_in)),
            }

            # 5 контрольных точек
            pts = {
                "center_circle": (self.params.xc_mm, self.params.yc_mm),
                "right_intersection": (self.params.xc_mm + self.params.Rc_mm, self.params.yc_mm),
                "left_intersection": (self.params.xc_mm - self.params.Rc_mm, self.params.yc_mm),
                "top_intersection": (self.params.xc_mm, self.params.yc_mm + self.params.Rc_mm),
                "bottom_intersection": (self.params.xc_mm, self.params.yc_mm - self.params.Rc_mm),
            }
            self.point_values = {
                k: float(
                    illuminance_lambertian(
                        np.array([[x]]),
                        np.array([[y]]),
                        self.params.xL_mm,
                        self.params.yL_mm,
                        self.params.zL_mm,
                        self.params.I0,
                    )[0, 0]
                )
                for k, (x, y) in pts.items()
            }

            # UI обновления
            self._redraw_canvas_image()  # картинка + контур
            self._update_section_plot()  # два сечения по всей области
            self._render_values()
            # принудительно перерисуем контур, если менялся только y_c
            self._draw_analysis_circle()
        except Exception as e:
            messagebox.showerror("Ошибка расчёта", f"{e}\n\n{traceback.format_exc()}")

    # ---------- Рендер ----------

    def _redraw_canvas_image(self):
        """Рисует self._img_pil_base: уменьшаем, если не помещается; 1:1 если меньше Canvas. Центрируем и рисуем контур."""
        if self._img_pil_base is None:
            return
        # обновим геометрию Canvas
        self.img_canvas.update_idletasks()
        cw = max(self.img_canvas.winfo_width(), 1)
        ch = max(self.img_canvas.winfo_height(), 1)

        iw, ih = self._img_pil_base.size
        scale = min(1.0, cw / iw, ch / ih)  # без апскейла >1:1
        nw = max(int(round(iw * scale)), 1)
        nh = max(int(round(ih * scale)), 1)

        img_resized = (
            self._img_pil_base if scale == 1.0 else self._img_pil_base.resize((nw, nh), Image.NEAREST)
        )
        self._img_tk = ImageTk.PhotoImage(img_resized)

        # центрируем
        self.img_canvas.delete("all")
        cx, cy = cw // 2, ch // 2
        self._img_canvas_item = self.img_canvas.create_image(cx, cy, image=self._img_tk, anchor="center")

        # геометрия изображения в канвасе
        self._canvas_info.update(
            {"cw": cw, "ch": ch, "nw": nw, "nh": nh, "x0": cx - nw // 2, "y0": cy - nh // 2}
        )

        # перерисуем контур
        self._draw_analysis_circle()

    def _mm_to_canvas(self, x_mm: float, y_mm: float) -> Tuple[float, float]:
        """(мм) -> координаты Canvas (px), с учётом текущего ресайза и центрирования."""
        if self._img_pil_base is None:
            return 0.0, 0.0
        ci = self._canvas_info
        iw, ih = self._img_pil_base.size
        if ci["nw"] == 0 or ci["nh"] == 0:
            return 0.0, 0.0

        # координаты пикселя в исходном изображении
        x_img = (x_mm + self.params.W_mm / 2.0) / self.params.W_mm * iw
        y_img = (self.params.H_mm / 2.0 - y_mm) / self.params.H_mm * ih  # инверсия Y

        # масштаб и смещение в Canvas
        sx = ci["nw"] / iw
        sy = ci["nh"] / ih
        x_can = ci["x0"] + x_img * sx
        y_can = ci["y0"] + y_img * sy
        return x_can, y_can

    def _draw_analysis_circle(self):
        """Контур круга анализа на Canvas (пересчитывается каждый раз)."""
        if self._img_pil_base is None:
            return

        # центр окружности
        cx, cy = self._mm_to_canvas(self.params.xc_mm, self.params.yc_mm)

        # масштаб радиусов по X/Y
        iw, ih = self._img_pil_base.size
        ci = self._canvas_info
        if ci["nw"] == 0 or ci["nh"] == 0:
            return
        sx = ci["nw"] / iw
        sy = ci["nh"] / ih

        rcx_img = (self.params.Rc_mm / self.params.W_mm) * iw
        rcy_img = (self.params.Rc_mm / self.params.H_mm) * ih
        rcx = rcx_img * sx
        rcy = rcy_img * sy

        coords = (cx - rcx, cy - rcy, cx + rcx, cy + rcy)
        if self._circle_item is not None:
            try:
                self.img_canvas.coords(self._circle_item, *coords)
                return
            except tk.TclError:
                self._circle_item = None

        self._circle_item = self.img_canvas.create_oval(*coords, outline="#0077FF", width=2)

    def _update_section_plot(self):
        """Две кривые: E(x, y=yc) и E(x=xc, y).
        Значения ВНЕ круга анализа принудительно равны нулю."""
        if self.E is None:
            return

        # --- Сечение по X при y = yc ---
        y_index = int(np.argmin(np.abs(self.Y_mm[:, 0] - self.params.yc_mm)))
        x_vals_mm = self.X_mm[y_index, :]
        E_x = self.E[y_index, :].copy()

        # обнуляем вне круга: |x - xc| <= Rc при y = yc
        mask_x = np.abs(x_vals_mm - self.params.xc_mm) <= self.params.Rc_mm
        E_x[~mask_x] = 0.0

        # --- Сечение по Y при x = xc ---
        x_index = int(np.argmin(np.abs(self.X_mm[0, :] - self.params.xc_mm)))
        y_vals_mm = self.Y_mm[:, x_index]
        E_y = self.E[:, x_index].copy()

        # обнуляем вне круга: |y - yc| <= Rc при x = xc
        mask_y = np.abs(y_vals_mm - self.params.yc_mm) <= self.params.Rc_mm
        E_y[~mask_y] = 0.0

        # --- Рисуем ---
        self.section_ax.clear()
        self.section_ax.grid(True, alpha=0.3)
        self.section_ax.set_xlabel("координата, мм")
        self.section_ax.set_ylabel("E, Вт/м²")
        self.section_ax.set_title("Сечения: E(x, y=yc) и E(x=xc, y) (вне круга = 0)")

        # Важно: обе кривые на одном графике. Подписываем явно.
        self.section_ax.plot(x_vals_mm, E_x, label="E(x, y=yc)")
        self.section_ax.plot(y_vals_mm, E_y, label="E(x=xc, y)")

        self.section_ax.legend(loc="best")
        self.section_canvas.draw_idle()

    def _render_values(self):
        if not self.stats:
            return
        lines = ["Пять точек (Вт/м²):"]
        for k in [
            "center_circle",
            "right_intersection",
            "left_intersection",
            "top_intersection",
            "bottom_intersection",
        ]:
            lines.append(f"  {k}: {self.point_values.get(k, float('nan')):.6f}")
        lines += [
            "",
            "Статистика в круге (Вт/м²):",
            f"  min = {self.stats['min']:.6f}",
            f"  max = {self.stats['max']:.6f}",
            f"  mean = {self.stats['mean']:.6f}",
            "",
            f"Emax для нормировки (только в круге): {self.Emax:.6f} Вт/м²",
        ]
        self.text_values.configure(state="normal")
        self.text_values.delete("1.0", "end")
        self.text_values.insert("1.0", "\n".join(lines))
        self.text_values.configure(state="disabled")

    # ---------- Сохранения ----------

    def on_save_image(self):
        if self.Enorm_masked is None:
            messagebox.showwarning("Нет данных", "Сначала выполните расчёт.")
            return
        fp = filedialog.asksaveasfilename(
            defaultextension=".png",
            filetypes=[("PNG image", "*.png")],
            title="Сохранить нормированное изображение (только внутри круга)",
        )
        if not fp:
            return
        try:
            Image.fromarray(self.Enorm_masked, mode="L").save(fp)
            messagebox.showinfo("Готово", f"Изображение сохранено:\n{fp}")
        except Exception as e:
            messagebox.showerror("Ошибка сохранения", str(e))

    def on_save_data(self):
        if self.E is None:
            messagebox.showwarning("Нет данных", "Сначала выполните расчёт.")
            return

        dirp = filedialog.askdirectory(title="Выберите папку (будет создан только summary.txt)")
        if not dirp:
            return
        out_dir = Path(dirp)
        try:
            with (out_dir / "summary.txt").open("w", encoding="utf-8") as f:
                f.write("Illuminance computation summary (image masked to circle)\n")
                f.write(f"Datetime: {datetime.now().isoformat()}\n\n")
                p = self.params
                f.write(f"Params: H={p.H_mm} mm, W={p.W_mm} mm, Hres={p.Hres}, Wres={p.Wres}\n")
                f.write(f"Light source: (xL, yL, zL)=({p.xL_mm}, {p.yL_mm}, {p.zL_mm}) mm, I0={p.I0} W/sr\n")
                f.write(f"Circle: center=({p.xc_mm}, {p.yc_mm}) mm, R={p.Rc_mm} mm\n\n")
                f.write("Stats within circle (W/m^2):\n")
                f.write(
                    f"  min={self.stats['min']:.6e}\n"
                    f"  max={self.stats['max']:.6e}\n"
                    f"  mean={self.stats['mean']:.6e}\n\n"
                )
                f.write("Five points (W/m^2):\n")
                for k in [
                    "center_circle",
                    "right_intersection",
                    "left_intersection",
                    "top_intersection",
                    "bottom_intersection",
                ]:
                    f.write(f"  {k}: {self.point_values[k]:.6e}\n")
                f.write("\nEmax used for normalization (inside circle): {:.6e} W/m^2\n".format(self.Emax))
            messagebox.showinfo("Готово", f"summary.txt сохранён в:\n{out_dir}")
        except Exception as e:
            messagebox.showerror("Ошибка сохранения", f"{e}\n\n{traceback.format_exc()}")


if __name__ == "__main__":
    App().mainloop()
