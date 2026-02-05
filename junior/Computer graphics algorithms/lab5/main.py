#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

"""
ЛР-5. Визуализация распределения яркости на сферах с учетом тени и цвета.

Требования ТЗ (важное):
- Размеры экрана W,H: 100..10000 мм => 0.1..10 м
- Разрешение Wres,Hres: 200..800 px, пиксели должны быть квадратными
- Координаты источников и центров сфер:
  X,Y: ±10000 мм => ±10 м, Z: 100..10000 мм => 0.1..10 м
- Цвета источников и сфер: 0..1
- Наблюдатель (камера): (0,0,zO) [мм] => в приложении (м)
- Сила излучения I0: 0.01..10000 Вт/ср
- Параметры Блинн-Фонга выбрать так, чтобы были видны тень и полутень
- Нормировка изображения 0..255 по максимуму яркости

ДОП (по твоим требованиям):
- Все параметры задаются в метрах
- GUI и комментарии на русском
- HiDPI: адекватный масштаб (tk scaling + шрифты)
- Возможность выбрать яркость в Вт/ср и Вт/(ср·м²)

Проекции:
- В приложении есть выбор проекции: Спереди(XY), Сверху(XZ), Сбоку(YZ).
  Для рендера яркости реализовано поворотом СЦЕНЫ вокруг пивота (центр между сферами),
  камера остается (0,0,zO) и экран остается z=0.
  Это исключает ситуацию "всё улетело и чёрный экран".
- Для отчёта также есть кнопка сохранения 3 проекций СЦЕНЫ как отдельных схем:
  (сферы как окружности, источники как точки, направление Tx как стрелка).

"""

import math
import threading
import queue
from dataclasses import dataclass
from typing import Callable, Optional, Tuple, List, Dict

import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import tkinter.font as tkfont

import numpy as np

# Pillow (необязательно, но удобно для PNG и ресайза)
try:
    from PIL import Image as PILImage
    from PIL import ImageTk as PILImageTk

    PIL_AVAILABLE = True
except Exception:
    PILImage = None  # type: ignore[assignment]
    PILImageTk = None  # type: ignore[assignment]
    PIL_AVAILABLE = False


def _get_pil_bilinear():
    """Совместимость с Pillow 9/10+: константа ресэмплинга."""
    if not PIL_AVAILABLE or PILImage is None:
        return None
    if hasattr(PILImage, "Resampling"):
        return PILImage.Resampling.BILINEAR  # type: ignore[attr-defined]
    if hasattr(PILImage, "BILINEAR"):
        return PILImage.BILINEAR  # type: ignore[attr-defined]
    return None


# ----------------------------- Модели данных -----------------------------


@dataclass
class Sphere:
    cx: float
    cy: float
    cz: float
    r: float
    color: Tuple[float, float, float]  # 0..1
    kd: float
    ks: float
    shininess: float
    ka: float


@dataclass
class Light:
    x: float
    y: float
    z: float
    color: Tuple[float, float, float]  # 0..1
    i0: float
    unit: str  # "Вт/ср" или "Вт/(ср·м²)"
    area: float
    tx: float
    ty: float
    tz: float
    radius: float  # радиус диска (полутень)
    samples: int  # число семплов диска


# ----------------------------- Утилиты/математика -----------------------------


def _normalize(
    vx: float, vy: float, vz: float, eps: float = 1e-12
) -> Tuple[float, float, float]:
    n = math.sqrt(vx * vx + vy * vy + vz * vz)
    if n < eps:
        return 0.0, 0.0, 0.0
    return vx / n, vy / n, vz / n


def _safe_unit_i0(light: Light) -> float:
    """
    Приводим яркость к условной "силе излучения" в Вт/ср.
    Если пользователь выбрал Вт/(ср·м²), умножаем на площадь (м²).
    """
    i0 = max(0.0, float(light.i0))
    if light.unit == "Вт/(ср·м²)":
        return i0 * max(0.0, float(light.area))
    return i0


def _disk_samples(
    radius: float, n: int, seed: int = 12345
) -> List[Tuple[float, float]]:
    """Случайные семплы равномерно по диску (для полутени)."""
    if n <= 1 or radius <= 0.0:
        return [(0.0, 0.0)]
    rng = np.random.default_rng(seed)
    u = rng.random(n)
    v = rng.random(n)
    rr = radius * np.sqrt(u)
    phi = 2.0 * math.pi * v
    dx = rr * np.cos(phi)
    dy = rr * np.sin(phi)
    return list(zip(dx.tolist(), dy.tolist()))


def _build_screen_rays(Wm: float, Hm: float, Wres: int, Hres: int, cam_z: float):
    """
    Экран: прямоугольник в плоскости z=0, центр в (0,0,0).
    Камера: (0,0,cam_z). Лучи: из камеры через пиксели экрана.
    """
    xs = (np.arange(Wres, dtype=np.float64) + 0.5) / Wres * Wm - (Wm / 2.0)
    ys = (Hm / 2.0) - (np.arange(Hres, dtype=np.float64) + 0.5) / Hres * Hm
    X, Y = np.meshgrid(xs, ys)

    P0 = np.stack([X, Y, np.zeros_like(X)], axis=-1)

    O = np.array([0.0, 0.0, cam_z], dtype=np.float64)
    D = P0 - O
    norm = np.linalg.norm(D, axis=-1, keepdims=True)
    norm = np.maximum(norm, 1e-12)
    D = D / norm
    return O, P0, D


def _ray_sphere_intersect(
    O: np.ndarray, D: np.ndarray, C: np.ndarray, r: float
) -> np.ndarray:
    """Пересечение лучей со сферой: возвращает t (inf если нет попадания)."""
    oc = O - C
    b = 2.0 * (D[..., 0] * oc[0] + D[..., 1] * oc[1] + D[..., 2] * oc[2])
    c = (oc[0] * oc[0] + oc[1] * oc[1] + oc[2] * oc[2]) - r * r
    disc = b * b - 4.0 * c

    t = np.full(D.shape[:2], np.inf, dtype=np.float64)
    mask = disc >= 0.0
    if np.any(mask):
        sqrt_disc = np.sqrt(np.maximum(disc, 0.0))
        t0 = (-b - sqrt_disc) / 2.0
        t1 = (-b + sqrt_disc) / 2.0
        t_hit = np.where((t0 > 1e-6), t0, np.where((t1 > 1e-6), t1, np.inf))
        t = np.where(mask, t_hit, np.inf)
    return t


def _shadow_mask(
    P: np.ndarray,
    N: np.ndarray,
    light_pos: np.ndarray,
    sphere_block_C: np.ndarray,
    sphere_block_r: float,
    eps: float = 1e-4,
) -> np.ndarray:
    """
    Проверка тени: если отрезок от P к свету пересекает блокирующую сферу.
    P: (K,3), N: (K,3)
    """
    P0 = P + N * eps

    L = light_pos[None, :] - P0
    dist = np.linalg.norm(L, axis=1)
    dist = np.maximum(dist, 1e-12)
    D = L / dist[:, None]

    oc = P0 - sphere_block_C[None, :]

    b = np.sum(oc * D, axis=1)
    c = np.sum(oc * oc, axis=1) - sphere_block_r * sphere_block_r
    disc = b * b - c

    hit = disc >= 0.0
    if not np.any(hit):
        return np.zeros(P.shape[0], dtype=bool)

    sqrt_disc = np.sqrt(np.maximum(disc, 0.0))
    t0 = -b - sqrt_disc
    t1 = -b + sqrt_disc
    t = np.where(t0 > eps, t0, np.where(t1 > eps, t1, np.inf))

    shadow = hit & (t < (dist - eps))
    return shadow


# ----------------------------- Рендер яркости -----------------------------


def render_scene(
    Wm: float,
    Hm: float,
    Wres: int,
    Hres: int,
    cam_z: float,
    spheres: List[Sphere],
    lights: List[Light],
    progress_cb: Optional[Callable[[float], None]] = None,
    cancel_event: Optional[threading.Event] = None,
) -> Optional[np.ndarray]:
    """Рендер итоговой яркости (RGB) по модели Блинн-Фонга + тень/полутень."""
    O, _, D = _build_screen_rays(Wm, Hm, Wres, Hres, cam_z)

    C1 = np.array([spheres[0].cx, spheres[0].cy, spheres[0].cz], dtype=np.float64)
    C2 = np.array([spheres[1].cx, spheres[1].cy, spheres[1].cz], dtype=np.float64)

    t1 = _ray_sphere_intersect(O, D, C1, spheres[0].r)
    t2 = _ray_sphere_intersect(O, D, C2, spheres[1].r)

    hit1 = t1 < t2
    hit2 = t2 < t1
    tmin = np.minimum(t1, t2)
    hit_any = np.isfinite(tmin)

    # Пиксели без попадания не должны порождать inf/NaN
    t_use = np.where(hit_any, tmin, 0.0)
    P = (O[None, None, :] + D * t_use[..., None]).astype(np.float64)

    # Нормали
    N = np.zeros_like(P)
    if np.any(hit1):
        N1 = (P - C1[None, None, :]) / max(spheres[0].r, 1e-12)
        N = np.where(hit1[..., None], N1, N)
    if np.any(hit2):
        N2 = (P - C2[None, None, :]) / max(spheres[1].r, 1e-12)
        N = np.where(hit2[..., None], N2, N)

    # Вектор на камеру
    V = O[None, None, :] - P
    Vn = V / np.maximum(np.linalg.norm(V, axis=-1, keepdims=True), 1e-12)

    img = np.zeros((Hres, Wres, 3), dtype=np.float64)

    # Ambient
    if np.any(hit1):
        s = spheres[0]
        img += hit1[..., None] * (
            s.ka * np.array(s.color, dtype=np.float64)[None, None, :]
        )
    if np.any(hit2):
        s = spheres[1]
        img += hit2[..., None] * (
            s.ka * np.array(s.color, dtype=np.float64)[None, None, :]
        )

    total_steps = sum(max(1, int(Lg.samples)) if Lg.radius > 0 else 1 for Lg in lights)
    total_steps = max(1, total_steps)
    done_steps = 0

    for li, Lg in enumerate(lights):
        if cancel_event is not None and cancel_event.is_set():
            return None

        base_i0 = _safe_unit_i0(Lg)
        smp = _disk_samples(Lg.radius, max(1, int(Lg.samples)), seed=1000 + li)

        # Ось источника (направление ламбертовской диаграммы)
        ax, ay, az = _normalize(Lg.tx - Lg.x, Lg.ty - Lg.y, Lg.tz - Lg.z)
        A = np.array([ax, ay, az], dtype=np.float64)

        # Базис диска вокруг оси A
        tmp = np.array([0.0, 0.0, 1.0], dtype=np.float64)
        if abs(A[2]) > 0.9:
            tmp = np.array([0.0, 1.0, 0.0], dtype=np.float64)
        U = np.cross(A, tmp)
        U /= max(np.linalg.norm(U), 1e-12)
        Vb = np.cross(A, U)
        Vb /= max(np.linalg.norm(Vb), 1e-12)

        acc = np.zeros_like(img)
        Lrgb = np.array(Lg.color, dtype=np.float64)[None, None, :]

        for dx, dy in smp:
            if cancel_event is not None and cancel_event.is_set():
                return None

            Lpos = np.array([Lg.x, Lg.y, Lg.z], dtype=np.float64) + U * dx + Vb * dy

            # Вектор на свет
            Lvec = Lpos[None, None, :] - P
            dist = np.linalg.norm(Lvec, axis=-1, keepdims=True)
            dist_safe = np.maximum(dist, 1e-12)
            Ln = Lvec / dist_safe

            cos_inc = np.maximum(0.0, np.sum(N * Ln, axis=-1, keepdims=True))

            # Ламбертовская диаграмма источника: cos(theta)
            dir_from_light = P - Lpos[None, None, :]
            dir_from_light /= np.maximum(
                np.linalg.norm(dir_from_light, axis=-1, keepdims=True), 1e-12
            )
            cos_theta = np.maximum(
                0.0, np.sum(dir_from_light * A[None, None, :], axis=-1, keepdims=True)
            )

            I = base_i0 * cos_theta
            atten = I / (dist_safe * dist_safe)
            E = atten * cos_inc

            contrib = np.zeros_like(img)

            # Сфера 1 (блокирует сфера 2)
            if np.any(hit1):
                s = spheres[0]
                mask = hit1 & (cos_inc[..., 0] > 0.0)
                if np.any(mask):
                    Pk = P[mask]
                    Nk = N[mask]
                    shadow = _shadow_mask(Pk, Nk, Lpos, C2, spheres[1].r)

                    kd = s.kd
                    albedo = np.array(s.color, dtype=np.float64)
                    Ek = E[mask][:, 0]
                    diff = kd * Ek[:, None] * (albedo[None, :] * Lrgb[0, 0, :][None, :])
                    diff[shadow] = 0.0

                    ks = s.ks
                    shin = max(1.0, float(s.shininess))
                    Vk = Vn[mask]
                    Lnk = Ln[mask]
                    Hk = Vk + Lnk
                    Hk /= np.maximum(np.linalg.norm(Hk, axis=1, keepdims=True), 1e-12)
                    spec_ang = np.maximum(0.0, np.sum(Nk * Hk, axis=1))
                    attk = atten[mask][:, 0]
                    spec = ks * (spec_ang**shin) * attk
                    spec = spec[:, None] * (Lrgb[0, 0, :][None, :])
                    spec[shadow] = 0.0

                    contrib[mask] += diff + spec

            # Сфера 2 (блокирует сфера 1)
            if np.any(hit2):
                s = spheres[1]
                mask = hit2 & (cos_inc[..., 0] > 0.0)
                if np.any(mask):
                    Pk = P[mask]
                    Nk = N[mask]
                    shadow = _shadow_mask(Pk, Nk, Lpos, C1, spheres[0].r)

                    kd = s.kd
                    albedo = np.array(s.color, dtype=np.float64)
                    Ek = E[mask][:, 0]
                    diff = kd * Ek[:, None] * (albedo[None, :] * Lrgb[0, 0, :][None, :])
                    diff[shadow] = 0.0

                    ks = s.ks
                    shin = max(1.0, float(s.shininess))
                    Vk = Vn[mask]
                    Lnk = Ln[mask]
                    Hk = Vk + Lnk
                    Hk /= np.maximum(np.linalg.norm(Hk, axis=1, keepdims=True), 1e-12)
                    spec_ang = np.maximum(0.0, np.sum(Nk * Hk, axis=1))
                    attk = atten[mask][:, 0]
                    spec = ks * (spec_ang**shin) * attk
                    spec = spec[:, None] * (Lrgb[0, 0, :][None, :])
                    spec[shadow] = 0.0

                    contrib[mask] += diff + spec

            acc += contrib

            done_steps += 1
            if progress_cb is not None:
                progress_cb(done_steps / total_steps)

        acc /= max(1, len(smp))
        img += acc

    maxv = float(np.max(img)) if np.isfinite(np.max(img)) else 0.0
    if maxv <= 1e-12:
        return np.zeros((Hres, Wres, 3), dtype=np.uint8)

    # Нормировка 0..255 по максимуму яркости
    img_norm = np.clip(img / maxv, 0.0, 1.0)
    out = (img_norm * 255.0 + 0.5).astype(np.uint8)
    out[~hit_any] = 0
    return out


# ----------------------------- Проекции -----------------------------

PROJ_TOP = "Сверху (XY)"
PROJ_FRONT = "Спереди (XZ)"
PROJ_SIDE = "Сбоку (YZ)"


def _rotate_rel_by_projection(
    dx: float, dy: float, dz: float, proj: str
) -> Tuple[float, float, float]:
    """
    Мы НЕ меняем камеру и экран (камера всегда смотрит вдоль +Z на плоскость z=0),
    поэтому для разных проекций поворачиваем сцену так, чтобы нужная плоскость
    стала экранной (x',y').

    Сверху (XY):  (x',y',z') = ( x,  y,  z )  -> экран: X,Y
    Спереди (XZ): (x',y',z') = ( x,  z, -y )  -> экран: X,Z (глубина Y)
    Сбоку (YZ):   (x',y',z') = ( y,  z,  x )  -> экран: Y,Z (глубина X)
    """
    if proj == PROJ_TOP:
        return dx, dy, dz

    if proj == PROJ_FRONT:
        return dx, dz, -dy

    if proj == PROJ_SIDE:
        return dy, dz, dx

    return dx, dy, dz


def apply_projection(
    spheres: List[Sphere], lights: List[Light], proj: str
) -> Tuple[List[Sphere], List[Light]]:
    """
    Поворот сцены вокруг пивота (средняя точка центров сфер), чтобы сцена
    не "улетала" из кадра при смене проекции.
    """
    px = (spheres[0].cx + spheres[1].cx) * 0.5
    py = (spheres[0].cy + spheres[1].cy) * 0.5
    pz = (spheres[0].cz + spheres[1].cz) * 0.5

    def rot_point(x: float, y: float, z: float) -> Tuple[float, float, float]:
        dx, dy, dz = x - px, y - py, z - pz
        rx, ry, rz = _rotate_rel_by_projection(dx, dy, dz, proj)
        return px + rx, py + ry, pz + rz

    new_spheres: List[Sphere] = []
    for s in spheres:
        x, y, z = rot_point(s.cx, s.cy, s.cz)
        new_spheres.append(Sphere(x, y, z, s.r, s.color, s.kd, s.ks, s.shininess, s.ka))

    new_lights: List[Light] = []
    for L in lights:
        lx, ly, lz = rot_point(L.x, L.y, L.z)
        tx, ty, tz = rot_point(
            L.tx, L.ty, L.tz
        )  # важно: поворачиваем и точку направления
        new_lights.append(
            Light(
                lx,
                ly,
                lz,
                L.color,
                L.i0,
                L.unit,
                L.area,
                tx,
                ty,
                tz,
                L.radius,
                L.samples,
            )
        )

    return new_spheres, new_lights


# ----------------------------- Рисование схемы сцены (для 3 ортогональных проекций) -----------------------------


def _clip_int(v: int, lo: int, hi: int) -> int:
    return lo if v < lo else hi if v > hi else v


def _draw_line(
    img: np.ndarray, x0: int, y0: int, x1: int, y1: int, color: Tuple[int, int, int]
):
    """Простой Брезенхэм."""
    h, w, _ = img.shape
    x0 = _clip_int(x0, 0, w - 1)
    x1 = _clip_int(x1, 0, w - 1)
    y0 = _clip_int(y0, 0, h - 1)
    y1 = _clip_int(y1, 0, h - 1)

    dx = abs(x1 - x0)
    dy = -abs(y1 - y0)
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx + dy

    x, y = x0, y0
    while True:
        img[y, x, :] = color
        if x == x1 and y == y1:
            break
        e2 = 2 * err
        if e2 >= dy:
            err += dy
            x += sx
        if e2 <= dx:
            err += dx
            y += sy


def _draw_circle_outline(
    img: np.ndarray, cx: int, cy: int, r: int, color: Tuple[int, int, int]
):
    """Контур окружности (midpoint circle)."""
    h, w, _ = img.shape
    if r <= 0:
        return
    x = r
    y = 0
    err = 0

    while x >= y:
        pts = [
            (cx + x, cy + y),
            (cx + y, cy + x),
            (cx - y, cy + x),
            (cx - x, cy + y),
            (cx - x, cy - y),
            (cx - y, cy - x),
            (cx + y, cy - x),
            (cx + x, cy - y),
        ]
        for px, py in pts:
            if 0 <= px < w and 0 <= py < h:
                img[py, px, :] = color
        y += 1
        if err <= 0:
            err += 2 * y + 1
        if err > 0:
            x -= 1
            err -= 2 * x + 1


def _scene_projection_image(
    spheres: List[Sphere], lights: List[Light], proj: str, size: int = 800
) -> np.ndarray:
    """
    Возвращает изображение-схему сцены для ортогональной проекции:
      - XY: x горизонталь, y вертикаль
      - XZ: x горизонталь, z вертикаль
      - YZ: y горизонталь, z вертикаль
    """
    img = np.full((size, size, 3), 255, dtype=np.uint8)
    margin = 40

    # Выбираем оси проекции
    if proj == PROJ_FRONT:  # XY
        ax0, ax1 = "x", "y"

        def to2(p):
            return (p[0], p[1])
    elif proj == PROJ_TOP:  # XZ
        ax0, ax1 = "x", "z"

        def to2(p):
            return (p[0], p[2])
    else:  # YZ
        ax0, ax1 = "y", "z"

        def to2(p):
            return (p[1], p[2])

    # Собираем границы по объектам (с учетом радиусов сфер)
    xs: List[float] = []
    ys: List[float] = []

    for s in spheres:
        u, v = to2((s.cx, s.cy, s.cz))
        xs.extend([u - s.r, u + s.r])
        ys.extend([v - s.r, v + s.r])

    for L in lights:
        u, v = to2((L.x, L.y, L.z))
        xs.append(u)
        ys.append(v)
        u2, v2 = to2((L.tx, L.ty, L.tz))
        xs.append(u2)
        ys.append(v2)

    if not xs:
        return img

    xmin, xmax = min(xs), max(xs)
    ymin, ymax = min(ys), max(ys)

    # Добавим небольшой "воздух"
    pad = 0.1 * max((xmax - xmin), (ymax - ymin), 1e-6)
    xmin -= pad
    xmax += pad
    ymin -= pad
    ymax += pad

    def world_to_pix(u: float, v: float) -> Tuple[int, int]:
        # u -> x пикселя, v -> y пикселя (инвертируем Y вверх)
        if abs(xmax - xmin) < 1e-12:
            sx = 1.0
        else:
            sx = (size - 2 * margin) / (xmax - xmin)
        if abs(ymax - ymin) < 1e-12:
            sy = 1.0
        else:
            sy = (size - 2 * margin) / (ymax - ymin)
        s = min(sx, sy)
        px = int(round(margin + (u - xmin) * s))
        py = int(round(size - margin - (v - ymin) * s))
        return px, py

    # Рисуем оси (тонко)
    axis_color = (200, 200, 200)
    # ось u
    x0, y0 = world_to_pix(xmin, 0.0)
    x1, y1 = world_to_pix(xmax, 0.0)
    _draw_line(img, x0, y0, x1, y1, axis_color)
    # ось v
    x0, y0 = world_to_pix(0.0, ymin)
    x1, y1 = world_to_pix(0.0, ymax)
    _draw_line(img, x0, y0, x1, y1, axis_color)

    # Рисуем сферы окружностями
    for s in spheres:
        u, v = to2((s.cx, s.cy, s.cz))
        cx, cy = world_to_pix(u, v)
        # радиус в пикселях
        u_r, _ = to2((s.cx + s.r, s.cy, s.cz))
        x_r, _ = world_to_pix(u_r, v)
        rpx = abs(x_r - cx)
        col = (
            int(_clip_int(int(s.color[0] * 255), 0, 255)),
            int(_clip_int(int(s.color[1] * 255), 0, 255)),
            int(_clip_int(int(s.color[2] * 255), 0, 255)),
        )
        _draw_circle_outline(img, cx, cy, max(1, rpx), col)

    # Рисуем источники и стрелки направления
    for L in lights:
        u, v = to2((L.x, L.y, L.z))
        x, y = world_to_pix(u, v)
        col = (
            int(_clip_int(int(L.color[0] * 255), 0, 255)),
            int(_clip_int(int(L.color[1] * 255), 0, 255)),
            int(_clip_int(int(L.color[2] * 255), 0, 255)),
        )

        # крестик источника
        for dx in range(-4, 5):
            xx = _clip_int(x + dx, 0, size - 1)
            yy = _clip_int(y, 0, size - 1)
            img[yy, xx, :] = col
        for dy in range(-4, 5):
            xx = _clip_int(x, 0, size - 1)
            yy = _clip_int(y + dy, 0, size - 1)
            img[yy, xx, :] = col

        u2, v2 = to2((L.tx, L.ty, L.tz))
        x2, y2 = world_to_pix(u2, v2)
        _draw_line(img, x, y, x2, y2, col)

        # маленький наконечник стрелки
        vx = x2 - x
        vy = y2 - y
        n = math.hypot(vx, vy)
        if n > 1e-6:
            vx /= n
            vy /= n
            # два "усика"
            left = (-vy, vx)
            right = (vy, -vx)
            hx1 = int(round(x2 - 12 * vx + 6 * left[0]))
            hy1 = int(round(y2 - 12 * vy + 6 * left[1]))
            hx2 = int(round(x2 - 12 * vx + 6 * right[0]))
            hy2 = int(round(y2 - 12 * vy + 6 * right[1]))
            _draw_line(img, x2, y2, hx1, hy1, col)
            _draw_line(img, x2, y2, hx2, hy2, col)

    # Подпись проекции (если PIL есть — добавим текст, иначе без текста)
    if PIL_AVAILABLE and PILImage is not None:
        try:
            im = PILImage.fromarray(img, mode="RGB")
            # Без шрифтов — просто пиксельная подпись не делаем.
            img = np.array(im, dtype=np.uint8)
        except Exception:
            pass

    return img


# ----------------------------- GUI -----------------------------


class App(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("ЛР-5: Сферы, тени и Блинн-Фонг (Tkinter)")
        self.minsize(1250, 780)
        self.geometry("1350x820")

        self._q: "queue.Queue[tuple[str, object]]" = queue.Queue()
        self._render_thread: Optional[threading.Thread] = None
        self._cancel = threading.Event()

        self._img_np: Optional[np.ndarray] = None
        self._img_tk: Optional[tk.PhotoImage] = None
        self._img_pil = None

        self._base_font_sizes: Dict[str, int] = {}
        self._fonts_initialized = False

        self._build_style()
        self._build_vars()
        self._build_ui()
        self._apply_ui_scale(auto=True)

        # Стартовый рендер
        self.after(150, self.start_render)

    # ---------- Валидация требований ТЗ ----------

    def _require_range(self, name: str, v: float, lo: float, hi: float) -> float:
        if not (lo <= v <= hi):
            raise ValueError(f"{name}: {v} вне диапазона [{lo}; {hi}]")
        return v

    def _require_int_range(self, name: str, v: int, lo: int, hi: int) -> int:
        if not (lo <= v <= hi):
            raise ValueError(f"{name}: {v} вне диапазона [{lo}; {hi}]")
        return v

    def _require_01(self, name: str, v: float) -> float:
        return self._require_range(name, v, 0.0, 1.0)

    def _require_nonzero_dir(self, name: str, dx: float, dy: float, dz: float):
        n = math.sqrt(dx * dx + dy * dy + dz * dz)
        if n < 1e-9:
            raise ValueError(
                f"{name}: направление нулевое (Tx,Ty,Tz совпадает с позицией источника)"
            )

    def _auto_square_pixels(
        self, Wm: float, Hm: float, Wres: int, Hres: int
    ) -> Tuple[int, int]:
        """
        Обеспечиваем квадратные пиксели: W/H ≈ Wres/Hres.
        По ТЗ это обязательно.
        Если включен автоподгон — подгоняем Hres (или Wres) и обновляем поля.
        """
        ratio_geom = Wm / Hm
        ratio_res = Wres / Hres
        # 2% допуск — чисто чтобы не ругаться из-за округлений
        if abs(ratio_geom - ratio_res) / max(ratio_res, 1e-12) <= 0.02:
            return Wres, Hres

        if not self.auto_square.get():
            raise ValueError(
                "Квадратные пиксели: нужно W/H ≈ Wres/Hres (включи автоподгон или исправь значения)"
            )

        # Подгоняем Hres под Wres и геометрию
        new_h = int(round(Wres * Hm / Wm))
        # Если вышли из диапазона, пробуем подогнать Wres
        if new_h < 200 or new_h > 800:
            new_w = int(round(Hres * Wm / Hm))
            if 200 <= new_w <= 800:
                Wres = new_w
                self.wres.set(Wres)
                return Wres, Hres
            raise ValueError(
                "Не могу обеспечить квадратные пиксели в диапазоне 200..800 px. Измени W/H или разрешение."
            )

        Hres = new_h
        self.hres.set(Hres)
        return Wres, Hres

    def _check_sphere_in_view(self, Wm: float, Hm: float, cam_z: float, s: Sphere):
        """
        Грубая проверка: центр сферы проектируется на экран и проекционный радиус помещается.
        Это помогает соблюсти требование "сферы целиком помещаются в область видимости".
        """
        if abs(s.cz - cam_z) < 1e-9:
            raise ValueError("Камера и сфера на одной Z — невозможно.")
        t = (0.0 - cam_z) / (s.cz - cam_z)
        sx = s.cx * t
        sy = s.cy * t
        rproj = abs(s.r * t)

        if abs(sx) + rproj > (Wm / 2.0) or abs(sy) + rproj > (Hm / 2.0):
            raise ValueError(
                "Сфера не помещается в область видимости (проверь W/H, zO, и положение сферы)."
            )

    # ---------- UI ----------

    def _build_style(self):
        self.style = ttk.Style(self)
        try:
            self.style.theme_use("clam")
        except Exception:
            pass

    def _build_vars(self):
        self.ui_scale_mode = tk.StringVar(value="Авто")
        self.ui_scale_value = tk.DoubleVar(value=1.25)

        self.projection = tk.StringVar(value=PROJ_TOP)

        # ТЗ: W,H 0.1..10 м ; Wres,Hres 200..800
        self.screen_w = tk.DoubleVar(value=2.0)
        self.screen_h = tk.DoubleVar(value=2.0)
        self.wres = tk.IntVar(value=600)
        self.hres = tk.IntVar(value=600)
        self.auto_square = tk.BooleanVar(value=True)

        # Камера: (0,0,zO). Для адекватного обзора держим zO < 0
        self.cam_z = tk.DoubleVar(value=-3.0)

        self.preview_scale = tk.DoubleVar(value=1.0)

        # Сфера 1 (дефолты подобраны так, чтобы была тень/полутень)
        self.s1_cx = tk.DoubleVar(value=-0.10)
        self.s1_cy = tk.DoubleVar(value=-0.10)
        self.s1_cz = tk.DoubleVar(value=6.0)
        self.s1_r = tk.DoubleVar(value=1.10)
        self.s1_rcol = tk.DoubleVar(value=0.20)
        self.s1_gcol = tk.DoubleVar(value=0.85)
        self.s1_bcol = tk.DoubleVar(value=0.25)
        self.s1_kd = tk.DoubleVar(value=0.80)
        self.s1_ks = tk.DoubleVar(value=0.70)
        self.s1_sh = tk.DoubleVar(value=120.0)
        self.s1_ka = tk.DoubleVar(value=0.04)

        # Сфера 2 (чуть ближе к камере и смещена — чтобы тень была заметна)
        self.s2_cx = tk.DoubleVar(value=0.35)
        self.s2_cy = tk.DoubleVar(value=0.25)
        self.s2_cz = tk.DoubleVar(value=4.7)
        self.s2_r = tk.DoubleVar(value=0.60)
        self.s2_rcol = tk.DoubleVar(value=0.95)
        self.s2_gcol = tk.DoubleVar(value=0.75)
        self.s2_bcol = tk.DoubleVar(value=0.10)
        self.s2_kd = tk.DoubleVar(value=0.75)
        self.s2_ks = tk.DoubleVar(value=0.85)
        self.s2_sh = tk.DoubleVar(value=160.0)
        self.s2_ka = tk.DoubleVar(value=0.03)

        # Свет 1: мягкий (полутень)
        self.l1_x = tk.DoubleVar(value=-2.6)
        self.l1_y = tk.DoubleVar(value=2.2)
        self.l1_z = tk.DoubleVar(value=1.6)
        self.l1_r = tk.DoubleVar(value=1.0)
        self.l1_g = tk.DoubleVar(value=0.95)
        self.l1_b = tk.DoubleVar(value=0.90)
        self.l1_i0 = tk.DoubleVar(value=1200.0)
        self.l1_unit = tk.StringVar(value="Вт/ср")
        self.l1_area = tk.DoubleVar(value=1.0)
        self.l1_tx = tk.DoubleVar(value=0.0)
        self.l1_ty = tk.DoubleVar(value=0.0)
        self.l1_tz = tk.DoubleVar(value=5.5)
        self.l1_radius = tk.DoubleVar(value=0.18)
        self.l1_samples = tk.IntVar(value=12)

        # Свет 2: контровой/цветной
        self.l2_x = tk.DoubleVar(value=2.8)
        self.l2_y = tk.DoubleVar(value=-1.8)
        self.l2_z = tk.DoubleVar(value=2.2)
        self.l2_r = tk.DoubleVar(value=0.55)
        self.l2_g = tk.DoubleVar(value=0.65)
        self.l2_b = tk.DoubleVar(value=1.0)
        self.l2_i0 = tk.DoubleVar(value=600.0)
        self.l2_unit = tk.StringVar(value="Вт/ср")
        self.l2_area = tk.DoubleVar(value=1.0)
        self.l2_tx = tk.DoubleVar(value=0.0)
        self.l2_ty = tk.DoubleVar(value=0.0)
        self.l2_tz = tk.DoubleVar(value=5.2)
        self.l2_radius = tk.DoubleVar(value=0.10)
        self.l2_samples = tk.IntVar(value=8)

    def _build_ui(self):
        self.columnconfigure(0, weight=0)
        self.columnconfigure(1, weight=1)
        self.rowconfigure(0, weight=1)

        left = ttk.Frame(self, padding=10)
        left.grid(row=0, column=0, sticky="nsw")

        right = ttk.Frame(self, padding=10)
        right.grid(row=0, column=1, sticky="nsew")
        right.rowconfigure(0, weight=1)
        right.columnconfigure(0, weight=1)

        nb = ttk.Notebook(left)
        nb.grid(row=0, column=0, sticky="nsw")

        tab_scene = ttk.Frame(nb, padding=10)
        tab_light = ttk.Frame(nb, padding=10)
        tab_ui = ttk.Frame(nb, padding=10)
        nb.add(tab_scene, text="Сцена")
        nb.add(tab_light, text="Свет")
        nb.add(tab_ui, text="Интерфейс")

        self._ui_scene(tab_scene)
        self._ui_lights(tab_light)
        self._ui_ui(tab_ui)

        btns = ttk.Frame(left, padding=(0, 10, 0, 0))
        btns.grid(row=1, column=0, sticky="ew")
        btns.columnconfigure(0, weight=1)
        btns.columnconfigure(1, weight=1)
        btns.columnconfigure(2, weight=1)

        self.btn_render = ttk.Button(
            btns, text="Пересчитать / Рендер", command=self.on_render_button
        )
        self.btn_render.grid(row=0, column=0, sticky="ew", padx=(0, 6))

        self.btn_save = ttk.Button(
            btns, text="Сохранить изображение…", command=self.save_image
        )
        self.btn_save.grid(row=0, column=1, sticky="ew", padx=(6, 6))

        self.btn_save_proj = ttk.Button(
            btns,
            text="Сохранить 3 проекции сцены…",
            command=self.save_scene_projections,
        )
        self.btn_save_proj.grid(row=0, column=2, sticky="ew", padx=(6, 0))

        self.pb = ttk.Progressbar(
            left, orient="horizontal", mode="determinate", length=320
        )
        self.pb.grid(row=2, column=0, sticky="ew", pady=(10, 0))
        self.lbl_status = ttk.Label(left, text="Готово.")
        self.lbl_status.grid(row=3, column=0, sticky="w", pady=(6, 0))

        # Предпросмотр
        preview_frame = ttk.LabelFrame(
            right, text="Предпросмотр (яркость на сферах)", padding=10
        )
        preview_frame.grid(row=0, column=0, sticky="nsew")
        preview_frame.rowconfigure(0, weight=1)
        preview_frame.columnconfigure(0, weight=1)

        self.preview_label = ttk.Label(preview_frame, anchor="center")
        self.preview_label.grid(row=0, column=0, sticky="nsew")

        bottom = ttk.Frame(preview_frame)
        bottom.grid(row=1, column=0, sticky="ew", pady=(10, 0))
        bottom.columnconfigure(1, weight=1)

        ttk.Label(bottom, text="Масштаб предпросмотра:").grid(
            row=0, column=0, sticky="w"
        )
        ttk.Scale(
            bottom,
            from_=0.25,
            to=3.0,
            variable=self.preview_scale,
            command=lambda _=None: self._update_preview(),
        ).grid(row=0, column=1, sticky="ew", padx=8)
        ttk.Button(
            bottom, text="Открыть в отдельном окне", command=self.open_big_view
        ).grid(row=0, column=2, sticky="e")

    def _ui_scene(self, parent):
        # Проекция
        lf_proj = ttk.LabelFrame(parent, text="Проекция (вид)", padding=10)
        lf_proj.grid(row=0, column=0, sticky="ew")
        lf_proj.columnconfigure(1, weight=1)

        ttk.Label(lf_proj, text="Выбор проекции:").grid(row=0, column=0, sticky="w")
        cmb = ttk.Combobox(
            lf_proj,
            textvariable=self.projection,
            values=[PROJ_FRONT, PROJ_TOP, PROJ_SIDE],
            state="readonly",
            width=18,
        )
        cmb.grid(row=0, column=1, sticky="ew")
        # При смене проекции сразу пересчитываем
        cmb.bind("<<ComboboxSelected>>", lambda _e: self.start_render())

        ttk.Label(lf_proj, text="Спереди(XY), Сверху(XZ), Сбоку(YZ)").grid(
            row=1, column=0, columnspan=2, sticky="w", pady=(6, 0)
        )

        # Экран
        lf_screen = ttk.LabelFrame(parent, text="Экран (плоскость z=0)", padding=10)
        lf_screen.grid(row=1, column=0, sticky="ew", pady=(10, 0))
        lf_screen.columnconfigure(1, weight=1)

        self._row_entry(lf_screen, 0, "Ширина W (м) [0.1..10]:", self.screen_w)
        self._row_entry(lf_screen, 1, "Высота H (м) [0.1..10]:", self.screen_h)
        self._row_entry(lf_screen, 2, "Wres (px) [200..800]:", self.wres, kind="int")
        self._row_entry(lf_screen, 3, "Hres (px) [200..800]:", self.hres, kind="int")

        ttk.Checkbutton(
            lf_screen,
            text="Автоподгон под квадратные пиксели (обязательно по ТЗ)",
            variable=self.auto_square,
            command=self._on_auto_square_changed,
        ).grid(row=4, column=0, columnspan=2, sticky="w", pady=(6, 0))

        # Камера
        lf_cam = ttk.LabelFrame(parent, text="Наблюдатель (камера)", padding=10)
        lf_cam.grid(row=2, column=0, sticky="ew", pady=(10, 0))
        lf_cam.columnconfigure(1, weight=1)
        ttk.Label(lf_cam, text="Камера: (0,0,zO), обычно zO < 0 (м).").grid(
            row=0, column=0, columnspan=2, sticky="w", pady=(0, 6)
        )
        self._row_entry(lf_cam, 1, "zO (м):", self.cam_z)

        # Сферы
        lf_s1 = ttk.LabelFrame(parent, text="Сфера 1", padding=10)
        lf_s1.grid(row=3, column=0, sticky="ew", pady=(10, 0))
        lf_s1.columnconfigure(1, weight=1)

        self._row_entry(lf_s1, 0, "Центр x (м) [-10..10]:", self.s1_cx)
        self._row_entry(lf_s1, 1, "Центр y (м) [-10..10]:", self.s1_cy)
        self._row_entry(lf_s1, 2, "Центр z (м) [0.1..10]:", self.s1_cz)
        self._row_entry(lf_s1, 3, "Радиус R (м) (>0):", self.s1_r)
        self._row_rgb(
            lf_s1,
            4,
            "Цвет поверхности (0..1):",
            self.s1_rcol,
            self.s1_gcol,
            self.s1_bcol,
        )
        self._row_entry(lf_s1, 5, "Kd (0..1):", self.s1_kd)
        self._row_entry(lf_s1, 6, "Ks (0..1):", self.s1_ks)
        self._row_entry(lf_s1, 7, "p (1..1000):", self.s1_sh)
        self._row_entry(lf_s1, 8, "Ka (0..1):", self.s1_ka)

        lf_s2 = ttk.LabelFrame(parent, text="Сфера 2", padding=10)
        lf_s2.grid(row=4, column=0, sticky="ew", pady=(10, 0))
        lf_s2.columnconfigure(1, weight=1)

        self._row_entry(lf_s2, 0, "Центр x (м) [-10..10]:", self.s2_cx)
        self._row_entry(lf_s2, 1, "Центр y (м) [-10..10]:", self.s2_cy)
        self._row_entry(lf_s2, 2, "Центр z (м) [0.1..10]:", self.s2_cz)
        self._row_entry(lf_s2, 3, "Радиус R (м) (>0):", self.s2_r)
        self._row_rgb(
            lf_s2,
            4,
            "Цвет поверхности (0..1):",
            self.s2_rcol,
            self.s2_gcol,
            self.s2_bcol,
        )
        self._row_entry(lf_s2, 5, "Kd (0..1):", self.s2_kd)
        self._row_entry(lf_s2, 6, "Ks (0..1):", self.s2_ks)
        self._row_entry(lf_s2, 7, "p (1..1000):", self.s2_sh)
        self._row_entry(lf_s2, 8, "Ka (0..1):", self.s2_ka)

    def _ui_lights(self, parent):
        lf_l1 = ttk.LabelFrame(
            parent, text="Источник света 1 (точечный + размер для полутени)", padding=10
        )
        lf_l1.grid(row=0, column=0, sticky="ew")
        lf_l1.columnconfigure(1, weight=1)

        self._row_entry(lf_l1, 0, "Позиция x (м) [-10..10]:", self.l1_x)
        self._row_entry(lf_l1, 1, "Позиция y (м) [-10..10]:", self.l1_y)
        self._row_entry(lf_l1, 2, "Позиция z (м) [0.1..10]:", self.l1_z)
        self._row_rgb(lf_l1, 3, "Цвет (0..1):", self.l1_r, self.l1_g, self.l1_b)

        row = 4
        ttk.Label(lf_l1, text="Яркость I0:").grid(row=row, column=0, sticky="w")
        fr = ttk.Frame(lf_l1)
        fr.grid(row=row, column=1, sticky="ew")
        fr.columnconfigure(0, weight=1)
        ttk.Entry(fr, textvariable=self.l1_i0, width=12).grid(
            row=0, column=0, sticky="ew"
        )
        ttk.Combobox(
            fr,
            textvariable=self.l1_unit,
            values=["Вт/ср", "Вт/(ср·м²)"],
            state="readonly",
            width=12,
        ).grid(row=0, column=1, padx=8)
        ttk.Label(fr, text="Площадь (м²) (>0):").grid(row=0, column=2, padx=(8, 4))
        ttk.Entry(fr, textvariable=self.l1_area, width=8).grid(row=0, column=3)

        self._row_entry(lf_l1, 5, "Ось источника → Tx (м):", self.l1_tx)
        self._row_entry(lf_l1, 6, "Ty (м):", self.l1_ty)
        self._row_entry(lf_l1, 7, "Tz (м):", self.l1_tz)
        self._row_entry(lf_l1, 8, "Радиус диска (м) (>=0):", self.l1_radius)
        self._row_entry(lf_l1, 9, "Семплы (1..64):", self.l1_samples, kind="int")

        lf_l2 = ttk.LabelFrame(parent, text="Источник света 2", padding=10)
        lf_l2.grid(row=1, column=0, sticky="ew", pady=(10, 0))
        lf_l2.columnconfigure(1, weight=1)

        self._row_entry(lf_l2, 0, "Позиция x (м) [-10..10]:", self.l2_x)
        self._row_entry(lf_l2, 1, "Позиция y (м) [-10..10]:", self.l2_y)
        self._row_entry(lf_l2, 2, "Позиция z (м) [0.1..10]:", self.l2_z)
        self._row_rgb(lf_l2, 3, "Цвет (0..1):", self.l2_r, self.l2_g, self.l2_b)

        row = 4
        ttk.Label(lf_l2, text="Яркость I0:").grid(row=row, column=0, sticky="w")
        fr2 = ttk.Frame(lf_l2)
        fr2.grid(row=row, column=1, sticky="ew")
        fr2.columnconfigure(0, weight=1)
        ttk.Entry(fr2, textvariable=self.l2_i0, width=12).grid(
            row=0, column=0, sticky="ew"
        )
        ttk.Combobox(
            fr2,
            textvariable=self.l2_unit,
            values=["Вт/ср", "Вт/(ср·м²)"],
            state="readonly",
            width=12,
        ).grid(row=0, column=1, padx=8)
        ttk.Label(fr2, text="Площадь (м²) (>0):").grid(row=0, column=2, padx=(8, 4))
        ttk.Entry(fr2, textvariable=self.l2_area, width=8).grid(row=0, column=3)

        self._row_entry(lf_l2, 5, "Ось источника → Tx (м):", self.l2_tx)
        self._row_entry(lf_l2, 6, "Ty (м):", self.l2_ty)
        self._row_entry(lf_l2, 7, "Tz (м):", self.l2_tz)
        self._row_entry(lf_l2, 8, "Радиус диска (м) (>=0):", self.l2_radius)
        self._row_entry(lf_l2, 9, "Семплы (1..64):", self.l2_samples, kind="int")

    def _ui_ui(self, parent):
        lf = ttk.LabelFrame(parent, text="HiDPI и масштаб интерфейса", padding=10)
        lf.grid(row=0, column=0, sticky="ew")
        lf.columnconfigure(1, weight=1)

        ttk.Label(lf, text="Режим:").grid(row=0, column=0, sticky="w")
        cmb = ttk.Combobox(
            lf,
            textvariable=self.ui_scale_mode,
            values=["Авто", "Вручную"],
            state="readonly",
            width=12,
        )
        cmb.grid(row=0, column=1, sticky="w")
        cmb.bind(
            "<<ComboboxSelected>>",
            lambda _e: self._apply_ui_scale(auto=(self.ui_scale_mode.get() == "Авто")),
        )

        self._row_entry(lf, 1, "Масштаб (например 1.25):", self.ui_scale_value)

        ttk.Button(
            lf,
            text="Применить масштаб",
            command=lambda: self._apply_ui_scale(
                auto=(self.ui_scale_mode.get() == "Авто")
            ),
        ).grid(row=2, column=0, columnspan=2, sticky="ew", pady=(8, 0))

        ttk.Label(
            lf, text="Если на 2K/HiDPI всё мелко — выбери 'Вручную' и поставь 1.25–1.8."
        ).grid(row=3, column=0, columnspan=2, sticky="w", pady=(10, 0))

    def _row_entry(self, parent, row, label, var, kind="float"):
        ttk.Label(parent, text=label).grid(row=row, column=0, sticky="w", pady=2)
        e = ttk.Entry(parent, textvariable=var, width=14)
        e.grid(row=row, column=1, sticky="ew", pady=2)

        def _on_focus_out(_e):
            try:
                if kind == "int":
                    int(var.get())
                else:
                    float(var.get())
            except Exception:
                messagebox.showwarning("Некорректный ввод", f"Проверь поле: {label}")

        e.bind("<FocusOut>", _on_focus_out)

    def _row_rgb(self, parent, row, label, vr, vg, vb):
        ttk.Label(parent, text=label).grid(row=row, column=0, sticky="w", pady=2)
        fr = ttk.Frame(parent)
        fr.grid(row=row, column=1, sticky="ew", pady=2)
        ttk.Entry(fr, textvariable=vr, width=5).grid(row=0, column=0)
        ttk.Label(fr, text="R").grid(row=0, column=1, padx=(4, 10))
        ttk.Entry(fr, textvariable=vg, width=5).grid(row=0, column=2)
        ttk.Label(fr, text="G").grid(row=0, column=3, padx=(4, 10))
        ttk.Entry(fr, textvariable=vb, width=5).grid(row=0, column=4)
        ttk.Label(fr, text="B").grid(row=0, column=5, padx=(4, 0))

    # ---------- Масштаб UI ----------

    def _init_base_fonts(self):
        if self._fonts_initialized:
            return
        for name in [
            "TkDefaultFont",
            "TkTextFont",
            "TkMenuFont",
            "TkHeadingFont",
            "TkFixedFont",
        ]:
            try:
                f = tkfont.nametofont(name)
                self._base_font_sizes[name] = int(f.cget("size"))
            except Exception:
                pass
        self._fonts_initialized = True

    def _apply_ui_scale(self, auto: bool):
        self._init_base_fonts()
        try:
            if auto:
                dpi = float(self.winfo_fpixels("1i"))
                scaling = max(0.8, min(3.0, dpi / 72.0))
            else:
                scaling = float(self.ui_scale_value.get())
                scaling = max(0.8, min(3.0, scaling))

            self.tk.call("tk", "scaling", scaling)

            # Подправим именованные шрифты (иначе часть ttk-виджетов может выглядеть мелко)
            for name, base_size in self._base_font_sizes.items():
                try:
                    f = tkfont.nametofont(name)
                    if base_size < 0:
                        new_px = max(8, int(round(abs(base_size) * scaling)))
                        f.configure(size=-new_px)
                    else:
                        f.configure(size=base_size)
                except Exception:
                    pass

            self.update_idletasks()
        except Exception as e:
            messagebox.showwarning(
                "Масштабирование", f"Не удалось применить масштаб:\n{e}"
            )

    def _on_auto_square_changed(self):
        # Просто попробуем пересчитать (и при необходимости подогнать Hres)
        self.start_render()

    # ---------- Сбор и проверка параметров ----------

    def _collect_scene(self):
        # Экран и разрешение (ТЗ)
        Wm = self._require_range(
            "Ширина экрана W (м)", float(self.screen_w.get()), 0.1, 10.0
        )
        Hm = self._require_range(
            "Высота экрана H (м)", float(self.screen_h.get()), 0.1, 10.0
        )

        Wres = self._require_int_range("Wres (px)", int(self.wres.get()), 200, 800)
        Hres = self._require_int_range("Hres (px)", int(self.hres.get()), 200, 800)

        # Автоподгон квадратных пикселей (ТЗ требует)
        Wres, Hres = self._auto_square_pixels(Wm, Hm, Wres, Hres)

        # Камера
        cam_z = float(self.cam_z.get())
        # ТЗ не задаёт диапазон, но для адекватности запрещаем cam_z=0 и рекомендуем cam_z<0
        if abs(cam_z) < 1e-6:
            raise ValueError("zO не должен быть 0 (камера на экране).")
        # (не жёстко, но полезно) — если камера окажется за экраном, картинка будет странной
        if cam_z > -0.01:
            raise ValueError(
                "Рекомендуется zO < 0 (камера перед экраном). Поставь, например, -3."
            )

        # Сферы: координаты (ТЗ), цвета (ТЗ), радиус (>0), Блинн-Фонг
        def mk_sphere(
            prefix: str,
            cxv: tk.DoubleVar,
            cyv: tk.DoubleVar,
            czv: tk.DoubleVar,
            rv: tk.DoubleVar,
            rcv: tk.DoubleVar,
            gcv: tk.DoubleVar,
            bcv: tk.DoubleVar,
            kdv: tk.DoubleVar,
            ksv: tk.DoubleVar,
            shv: tk.DoubleVar,
            kav: tk.DoubleVar,
        ) -> Sphere:
            cx = self._require_range(f"{prefix}: cx (м)", float(cxv.get()), -10.0, 10.0)
            cy = self._require_range(f"{prefix}: cy (м)", float(cyv.get()), -10.0, 10.0)
            cz = self._require_range(f"{prefix}: cz (м)", float(czv.get()), 0.1, 10.0)
            r = float(rv.get())
            if r <= 0.0:
                raise ValueError(f"{prefix}: радиус должен быть > 0")
            # чтобы не было гигантов
            r = self._require_range(f"{prefix}: радиус (м)", r, 0.01, 10.0)

            cr = self._require_01(f"{prefix}: R", float(rcv.get()))
            cg = self._require_01(f"{prefix}: G", float(gcv.get()))
            cb = self._require_01(f"{prefix}: B", float(bcv.get()))

            kd = self._require_range(f"{prefix}: Kd", float(kdv.get()), 0.0, 1.0)
            ks = self._require_range(f"{prefix}: Ks", float(ksv.get()), 0.0, 1.0)
            shin = self._require_range(f"{prefix}: p", float(shv.get()), 1.0, 1000.0)
            ka = self._require_range(f"{prefix}: Ka", float(kav.get()), 0.0, 1.0)

            return Sphere(cx, cy, cz, r, (cr, cg, cb), kd, ks, shin, ka)

        s1 = mk_sphere(
            "Сфера 1",
            self.s1_cx,
            self.s1_cy,
            self.s1_cz,
            self.s1_r,
            self.s1_rcol,
            self.s1_gcol,
            self.s1_bcol,
            self.s1_kd,
            self.s1_ks,
            self.s1_sh,
            self.s1_ka,
        )

        s2 = mk_sphere(
            "Сфера 2",
            self.s2_cx,
            self.s2_cy,
            self.s2_cz,
            self.s2_r,
            self.s2_rcol,
            self.s2_gcol,
            self.s2_bcol,
            self.s2_kd,
            self.s2_ks,
            self.s2_sh,
            self.s2_ka,
        )

        # Источники: координаты (ТЗ), цвета (ТЗ), I0 (ТЗ), направление не нулевое
        def mk_light(
            prefix: str,
            xv: tk.DoubleVar,
            yv: tk.DoubleVar,
            zv: tk.DoubleVar,
            rv: tk.DoubleVar,
            gv: tk.DoubleVar,
            bv: tk.DoubleVar,
            i0v: tk.DoubleVar,
            unitv: tk.StringVar,
            areav: tk.DoubleVar,
            txv: tk.DoubleVar,
            tyv: tk.DoubleVar,
            tzv: tk.DoubleVar,
            radv: tk.DoubleVar,
            sampv: tk.IntVar,
        ) -> Light:
            x = self._require_range(f"{prefix}: x (м)", float(xv.get()), -10.0, 10.0)
            y = self._require_range(f"{prefix}: y (м)", float(yv.get()), -10.0, 10.0)
            z = self._require_range(f"{prefix}: z (м)", float(zv.get()), 0.1, 10.0)

            cr = self._require_01(f"{prefix}: R", float(rv.get()))
            cg = self._require_01(f"{prefix}: G", float(gv.get()))
            cb = self._require_01(f"{prefix}: B", float(bv.get()))

            i0 = float(i0v.get())
            unit = str(unitv.get())
            area = float(areav.get())
            if area <= 0.0:
                raise ValueError(f"{prefix}: площадь должна быть > 0")

            # ТЗ: I0 0.01..10000 Вт/ср
            # Если Вт/(ср·м²), то "эффективная" сила = I0*area
            ieff = i0 * area if unit == "Вт/(ср·м²)" else i0
            self._require_range(
                f"{prefix}: I0 (эффективн., Вт/ср)", float(ieff), 0.01, 10000.0
            )

            tx = float(txv.get())
            ty = float(tyv.get())
            tz = float(tzv.get())
            self._require_nonzero_dir(prefix, tx - x, ty - y, tz - z)

            radius = float(radv.get())
            if radius < 0.0:
                raise ValueError(f"{prefix}: радиус диска не может быть < 0")
            # разумные пределы (не из ТЗ, но чтобы не убить производительность)
            radius = min(radius, 10.0)

            samples = int(sampv.get())
            samples = self._require_int_range(f"{prefix}: семплы", samples, 1, 64)

            return Light(
                x, y, z, (cr, cg, cb), i0, unit, area, tx, ty, tz, radius, samples
            )

        l1 = mk_light(
            "Свет 1",
            self.l1_x,
            self.l1_y,
            self.l1_z,
            self.l1_r,
            self.l1_g,
            self.l1_b,
            self.l1_i0,
            self.l1_unit,
            self.l1_area,
            self.l1_tx,
            self.l1_ty,
            self.l1_tz,
            self.l1_radius,
            self.l1_samples,
        )

        l2 = mk_light(
            "Свет 2",
            self.l2_x,
            self.l2_y,
            self.l2_z,
            self.l2_r,
            self.l2_g,
            self.l2_b,
            self.l2_i0,
            self.l2_unit,
            self.l2_area,
            self.l2_tx,
            self.l2_ty,
            self.l2_tz,
            self.l2_radius,
            self.l2_samples,
        )

        proj = str(self.projection.get())
        if proj not in (PROJ_FRONT, PROJ_TOP, PROJ_SIDE):
            proj = PROJ_FRONT

        # Доп. проверка: сферы должны попадать в видимость
        # (это нужно по ТЗ)
        self._check_sphere_in_view(Wm, Hm, cam_z, s1)
        self._check_sphere_in_view(Wm, Hm, cam_z, s2)

        return Wm, Hm, Wres, Hres, cam_z, [s1, s2], [l1, l2], proj

    # ---------- Рендер поток ----------

    def on_render_button(self):
        if self._render_thread is not None and self._render_thread.is_alive():
            self._cancel.set()
            self.lbl_status.config(text="Отменяю…")
            return
        self.start_render()

    def start_render(self):
        try:
            Wm, Hm, Wres, Hres, cam_z, spheres, lights, proj = self._collect_scene()
        except Exception as e:
            self._set_idle_buttons()
            messagebox.showerror("Ошибка параметров (ТЗ)", str(e))
            return

        self._cancel.clear()
        self.pb["value"] = 0
        self.lbl_status.config(text="Считаю изображение…")
        self.btn_render.config(text="Отменить рендер")

        def progress(p: float):
            self._q.put(("progress", float(p)))

        def worker():
            try:
                spheres_p, lights_p = apply_projection(spheres, lights, proj)
                img = render_scene(
                    Wm,
                    Hm,
                    Wres,
                    Hres,
                    cam_z,
                    spheres_p,
                    lights_p,
                    progress_cb=progress,
                    cancel_event=self._cancel,
                )
                self._q.put(("done", img))
            except Exception as e:
                self._q.put(("error", str(e)))

        self._render_thread = threading.Thread(target=worker, daemon=True)
        self._render_thread.start()
        self.after(50, self._poll_queue)

    def _poll_queue(self):
        try:
            while True:
                kind, payload = self._q.get_nowait()
                if kind == "progress":
                    p = float(payload)  # type: ignore[arg-type]
                    self.pb["value"] = max(0.0, min(100.0, p * 100.0))
                    self.lbl_status.config(text=f"Считаю… {self.pb['value']:.0f}%")
                elif kind == "done":
                    if payload is None:
                        self.lbl_status.config(text="Отменено.")
                        self._set_idle_buttons()
                        return
                    self._img_np = payload  # type: ignore[assignment]
                    self.lbl_status.config(text="Готово.")
                    self.pb["value"] = 100
                    self._update_preview()
                    self._set_idle_buttons()
                    return
                elif kind == "error":
                    self.lbl_status.config(text="Ошибка.")
                    self._set_idle_buttons()
                    messagebox.showerror("Ошибка рендера", str(payload))
                    return
        except queue.Empty:
            pass

        if self._render_thread is not None and self._render_thread.is_alive():
            self.after(50, self._poll_queue)
        else:
            self._set_idle_buttons()

    def _set_idle_buttons(self):
        self.btn_render.config(text="Пересчитать / Рендер")

    # ---------- Конвертация изображения для Tk ----------

    def _encode_ppm(self, img_np: np.ndarray) -> bytes:
        h, w, _ = img_np.shape
        header = f"P6\n{w} {h}\n255\n".encode("ascii")
        body = img_np.astype(np.uint8).tobytes()
        return header + body

    def _np_to_photoimage(self, img_np: np.ndarray, scale: float):
        scale = float(scale)
        scale = max(0.25, min(3.0, scale))

        if PIL_AVAILABLE and PILImage is not None and PILImageTk is not None:
            im = PILImage.fromarray(img_np, mode="RGB")
            if abs(scale - 1.0) > 1e-6:
                w, h = im.size
                nw = max(1, int(round(w * scale)))
                nh = max(1, int(round(h * scale)))
                resample = _get_pil_bilinear()
                if resample is None:
                    im = im.resize((nw, nh))
                else:
                    im = im.resize((nw, nh), resample=resample)
            self._img_pil = im
            return PILImageTk.PhotoImage(im)

        # Без PIL: передаём PPM в PhotoImage
        ppm = self._encode_ppm(img_np)
        ph = tk.PhotoImage(data=ppm)
        if scale > 1.0:
            z = int(round(scale))
            ph = ph.zoom(z, z)
        elif scale < 1.0:
            s = int(round(1.0 / scale))
            s = max(1, s)
            ph = ph.subsample(s, s)
        return ph

    def _update_preview(self):
        if self._img_np is None:
            return
        ph = self._np_to_photoimage(self._img_np, self.preview_scale.get())
        self._img_tk = ph
        self.preview_label.config(image=self._img_tk)

    def open_big_view(self):
        if self._img_np is None:
            messagebox.showinfo("Нет изображения", "Сначала сделай рендер.")
            return

        win = tk.Toplevel(self)
        win.title("Просмотр изображения")
        win.minsize(1000, 800)
        win.rowconfigure(0, weight=1)
        win.columnconfigure(0, weight=1)

        frm = ttk.Frame(win, padding=10)
        frm.grid(row=0, column=0, sticky="nsew")
        frm.rowconfigure(0, weight=1)
        frm.columnconfigure(0, weight=1)

        lbl = ttk.Label(frm, anchor="center")
        lbl.grid(row=0, column=0, sticky="nsew")

        bottom = ttk.Frame(frm)
        bottom.grid(row=1, column=0, sticky="ew", pady=(10, 0))
        bottom.columnconfigure(1, weight=1)

        scale_var = tk.DoubleVar(value=max(1.0, float(self.preview_scale.get())))

        def refresh():
            ph = self._np_to_photoimage(self._img_np, scale_var.get())  # type: ignore[arg-type]
            lbl.image = ph
            lbl.config(image=ph)

        ttk.Label(bottom, text="Масштаб:").grid(row=0, column=0, sticky="w")
        ttk.Scale(
            bottom,
            from_=0.25,
            to=3.0,
            variable=scale_var,
            command=lambda _=None: refresh(),
        ).grid(row=0, column=1, sticky="ew", padx=8)
        ttk.Button(bottom, text="Закрыть", command=win.destroy).grid(
            row=0, column=2, sticky="e"
        )
        refresh()

    # ---------- Сохранение ----------

    def save_image(self):
        if self._img_np is None:
            messagebox.showinfo("Нет изображения", "Сначала сделай рендер.")
            return

        if PIL_AVAILABLE:
            ftypes = [("PNG изображение", "*.png"), ("PPM изображение", "*.ppm")]
            defext = ".png"
        else:
            ftypes = [("PPM изображение", "*.ppm")]
            defext = ".ppm"

        path = filedialog.asksaveasfilename(
            title="Сохранить изображение", defaultextension=defext, filetypes=ftypes
        )
        if not path:
            return

        try:
            if PIL_AVAILABLE and PILImage is not None and path.lower().endswith(".png"):
                PILImage.fromarray(self._img_np, mode="RGB").save(path)  # type: ignore[arg-type]
            else:
                with open(path, "wb") as f:
                    f.write(self._encode_ppm(self._img_np))  # type: ignore[arg-type]
            messagebox.showinfo("Сохранено", f"Файл сохранён:\n{path}")
        except Exception as e:
            messagebox.showerror("Ошибка сохранения", str(e))

    def save_scene_projections(self):
        """
        Сохраняет 3 схемы сцены в ортогональных проекциях:
        - front: XY
        - top: XZ
        - side: YZ
        """
        try:
            _, _, _, _, _, spheres, lights, _ = self._collect_scene()
        except Exception as e:
            messagebox.showerror("Ошибка параметров (ТЗ)", str(e))
            return

        folder = filedialog.askdirectory(title="Выбери папку для сохранения 3 проекций")
        if not folder:
            return

        mapping = [
            (PROJ_FRONT, "scene_front_XY"),
            (PROJ_TOP, "scene_top_XZ"),
            (PROJ_SIDE, "scene_side_YZ"),
        ]

        try:
            for proj, name in mapping:
                img = _scene_projection_image(spheres, lights, proj, size=800)
                path_png = f"{folder}/{name}.png"
                path_ppm = f"{folder}/{name}.ppm"

                if PIL_AVAILABLE and PILImage is not None:
                    PILImage.fromarray(img, mode="RGB").save(path_png)
                else:
                    # если нет PIL, пишем PPM
                    with open(path_ppm, "wb") as f:
                        h, w, _ = img.shape
                        header = f"P6\n{w} {h}\n255\n".encode("ascii")
                        f.write(header)
                        f.write(img.tobytes())

            messagebox.showinfo("Готово", f"3 проекции сохранены в:\n{folder}")
        except Exception as e:
            messagebox.showerror("Ошибка сохранения проекций", str(e))


def main():
    app = App()
    app.mainloop()


if __name__ == "__main__":
    main()
