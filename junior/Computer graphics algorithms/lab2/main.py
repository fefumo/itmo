#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import tkinter as tk
from tkinter import messagebox
from typing import Optional
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageTk, ImageEnhance, ImageFilter

# ---------- Config ----------
PREVIEW_MAX_W = 1300   # target width available for previews
PREVIEW_MAX_H = 800
SIDE_GAP = 24

try:
    from PIL.Image import Resampling
    RESAMPLE: int = Resampling.LANCZOS  # enum is int-like
except Exception:
    RESAMPLE = 1  # very old Pillow fallback

def pil_to_tk(img: Image.Image) -> ImageTk.PhotoImage:
    return ImageTk.PhotoImage(img)

def scale_for_pane(img: Image.Image, max_w: int, max_h: int, zoom: float) -> Image.Image:
    """Scale image to fit pane (respecting zoom multiplier), allowing upscaling."""
    w, h = img.size
    base = min(max_w / w, max_h / h)
    scale = base * max(0.5, min(zoom, 2.0))  # clamp zoom 0.5..2.0
    new_w, new_h = max(1, int(w * scale)), max(1, int(h * scale))
    return img.resize((new_w, new_h), RESAMPLE) if (new_w != w or new_h != h) else img

def invert_manual_rgba(img: Image.Image) -> Image.Image:
    """
    Manual inversion (no ImageOps.invert).
    Keep alpha as-is, invert R,G,B: v -> 255 - v.
    """
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    r, g, b, a = img.split()
    # point maps each 0..255 value via a function
    r = r.point(lambda v: 255 - v)
    g = g.point(lambda v: 255 - v)
    b = b.point(lambda v: 255 - v)
    return Image.merge("RGBA", (r, g, b, a))

class ImageEditorApp(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("Mini Image Editor — Before / After (Zoom & Dual Inversion)")
        self.geometry("1400x900")
        self.minsize(1100, 700)

        # Images
        self.original_image: Optional[Image.Image] = None   # Immutable source
        self.compare_image: Optional[Image.Image] = None    # Optional "Before" override (e.g., manual invert)
        self.image: Optional[Image.Image] = None            # Working "After"

        # Tk previews
        self.tk_preview_before: Optional[ImageTk.PhotoImage] = None
        self.tk_preview_after: Optional[ImageTk.PhotoImage] = None

        self.current_name: Optional[str] = None  # 'pic1.jpg' / 'pic2.jpg'
        self.zoom: float = 1.00                  # default zoom

        self._build_ui()

    def _build_ui(self) -> None:
        # Top bar
        topbar = tk.Frame(self, padx=8, pady=6)
        topbar.pack(side=tk.TOP, fill=tk.X)

        tk.Button(topbar, text="Load pic1", command=lambda: self.load_named("pic1.png")).pack(side=tk.LEFT, padx=4)
        tk.Button(topbar, text="Load pic2", command=lambda: self.load_named("pic2.png")).pack(side=tk.LEFT, padx=4)
        tk.Button(topbar, text="Save Current", command=self.save_current).pack(side=tk.LEFT, padx=12)
        tk.Button(topbar, text="Reset", command=self.reset_image).pack(side=tk.LEFT, padx=4)

        # Creds label (right side)
        creds = tk.Label(
            topbar,
            text="Молчанов Фёдор АКГ лаб2",
            fg="#888",
            font=("JetBrains Mono", 20, "bold")
        )
        creds.pack(side=tk.RIGHT, padx=6)

        # Main area
        main = tk.Frame(self)
        main.pack(fill=tk.BOTH, expand=True)

        # Preview container (left)
        previews = tk.Frame(main)
        previews.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(8, 4), pady=8)

        # BEFORE column
        before_col = tk.Frame(previews)
        before_col.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 6))
        tk.Label(before_col, text="Before", font=("TkDefaultFont", 11, "bold")).pack(anchor="w")
        self.before_label = tk.Label(before_col, bg="#222", width=64, height=32, relief="groove", bd=1)
        self.before_label.pack(fill=tk.BOTH, expand=True, pady=(4, 0))

        # AFTER column
        after_col = tk.Frame(previews)
        after_col.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(6, 0))
        tk.Label(after_col, text="After", font=("TkDefaultFont", 11, "bold")).pack(anchor="w")
        self.after_label = tk.Label(after_col, bg="#222", width=64, height=32, relief="groove", bd=1)
        self.after_label.pack(fill=tk.BOTH, expand=True, pady=(4, 0))

        # Controls (right)
        controls = tk.Frame(main, padx=10, pady=10)
        controls.pack(side=tk.RIGHT, fill=tk.Y, padx=(4, 8), pady=8)

        # Quick effects
        quick = tk.LabelFrame(controls, text="Quick Effects", padx=8, pady=8)
        quick.pack(fill=tk.X, pady=(0, 10))
        tk.Button(quick, text="Grey", width=18, command=self.apply_greyscale).grid(row=0, column=0, padx=4, pady=4, columnspan=2)

        # Inversion: two buttons, Pillow -> After; Manual -> Before
        invf = tk.LabelFrame(controls, text="Inversion (Compare)", padx=8, pady=8)
        invf.pack(fill=tk.X, pady=6)
        tk.Button(invf, text="Invert (Pillow → After)", width=20, command=self.apply_inversion_pillow).grid(row=0, column=0, padx=4, pady=4)
        tk.Button(invf, text="Invert (Manual → Before)", width=20, command=self.apply_inversion_manual_to_before).grid(row=0, column=1, padx=4, pady=4)
        tk.Button(invf, text="Clear Compare", width=20, command=self.clear_compare).grid(row=1, column=0, columnspan=2, padx=4, pady=4)

        # Brightness
        bright = tk.LabelFrame(controls, text="Brightness", padx=8, pady=8)
        bright.pack(fill=tk.X, pady=6)
        self.brightness_scale = tk.Scale(bright, from_=0.1, to=3.0, resolution=0.1, orient=tk.HORIZONTAL)
        self.brightness_scale.set(1.0)
        self.brightness_scale.pack(fill=tk.X, padx=4)
        tk.Button(bright, text="Apply Brightness", command=self.apply_brightness).pack(pady=4)

        # Contrast
        contrast = tk.LabelFrame(controls, text="Contrast", padx=8, pady=8)
        contrast.pack(fill=tk.X, pady=6)
        self.contrast_scale = tk.Scale(contrast, from_=0.1, to=3.0, resolution=0.1, orient=tk.HORIZONTAL)
        self.contrast_scale.set(1.0)
        self.contrast_scale.pack(fill=tk.X, padx=4)
        tk.Button(contrast, text="Apply Contrast", command=self.apply_contrast).pack(pady=4)

        # Blur
        blur = tk.LabelFrame(controls, text="Blur", padx=8, pady=8)
        blur.pack(fill=tk.X, pady=6)
        self.blur_scale = tk.Scale(blur, from_=0, to=12, resolution=1, orient=tk.HORIZONTAL)
        self.blur_scale.set(0)
        self.blur_scale.pack(fill=tk.X, padx=4)
        tk.Button(blur, text="Apply Blur", command=self.apply_blur).pack(pady=4)

        # Zoom
        zoomf = tk.LabelFrame(controls, text="Zoom", padx=8, pady=8)
        zoomf.pack(fill=tk.X, pady=6)
        self.zoom_scale = tk.Scale(zoomf, from_=0.5, to=2.0, resolution=0.05, orient=tk.HORIZONTAL, command=self.on_zoom_changed)
        self.zoom_scale.set(self.zoom)
        self.zoom_scale.pack(fill=tk.X, padx=4)

        self.status = tk.Label(
            self,
            text="Load pic1.jpg or pic2.jpg from the current directory to begin.",
            anchor="w",
            padx=8,
        )
        self.status.pack(side=tk.BOTTOM, fill=tk.X)

    # ---------- File ops ----------
    def load_named(self, name: str) -> None:
        path = Path.cwd() / name
        try:
            with open(path, "rb") as f:
                img = Image.open(f).convert("RGBA")
                img.load()
        except FileNotFoundError:
            messagebox.showerror("Not found", f"File '{name}' not found in {Path.cwd()}")
            return
        except Exception as e:
            messagebox.showerror("Open failed", f"Could not open '{name}':\n{e}")
            return

        self.original_image = img.copy()   # true BEFORE
        self.compare_image = None          # clear any previous comparison
        self.image = img                   # AFTER starts equal
        self.current_name = name

        self.update_preview()
        self.status.config(text=f"Loaded: {name}  —  {img.size[0]}×{img.size[1]}")

    def save_current(self) -> None:
        img = self.image
        if img is None:
            messagebox.showinfo("Nothing to save", "Load pic1 or pic2 first.")
            return
        base = self.current_name or "image"
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        out_name = f"{base}-edited-{ts}.png"
        out_path = Path.cwd() / out_name
        try:
            out_img = img if img.mode in ("RGB", "RGBA") else img.convert("RGBA")
            out_img.save(out_path)
            self.status.config(text=f"Saved: {out_name}")
        except Exception as e:
            messagebox.showerror("Save failed", f"Could not save image:\n{e}")

    def reset_image(self) -> None:
        if self.original_image is None:
            return
        self.image = self.original_image.copy()
        self.compare_image = None
        self.update_preview()
        self.brightness_scale.set(1.0)
        self.contrast_scale.set(1.0)
        self.blur_scale.set(0)
        self.zoom_scale.set(1.25)
        self.status.config(text="Image reset to original.")

    # ---------- Effects ----------
    def apply_greyscale(self) -> None:
        img = self.image
        if img is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        self.image = Image.Image.convert(img.convert("L"), "RGBA")  # grayscale then back to RGBA
        self.update_preview()
        self.status.config(text="Applied: Greyscale")

    def apply_inversion_pillow(self) -> None:
        """Built-in inversion (shows on After)."""
        img = self.image
        if img is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        if img.mode != "RGBA":
            img = img.convert("RGBA")
        # manual merge + Pillow's per-channel invert without ImageOps.invert:
        # Use point() to keep this path "library-based" but distinct from our manual version below.
        r, g, b, a = img.split()
        r = r.point(lambda v: 255 - v)
        g = g.point(lambda v: 255 - v)
        b = b.point(lambda v: 255 - v)
        self.image = Image.merge("RGBA", (r, g, b, a))
        self.update_preview()
        self.status.config(text="Applied: Inversion (Pillow → After)")

    def apply_inversion_manual_to_before(self) -> None:
        """Manual inversion computed from the ORIGINAL, shown on Before for comparison."""
        if self.original_image is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        self.compare_image = invert_manual_rgba(self.original_image)
        self.update_preview()
        self.status.config(text="Applied: Inversion (Manual -> Before)")

    def clear_compare(self) -> None:
        self.compare_image = None
        self.update_preview()
        self.status.config(text="Compare view cleared (Before shows original).")

    def apply_brightness(self) -> None:
        img = self.image
        if img is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        factor = float(self.brightness_scale.get())
        enhancer = ImageEnhance.Brightness(img)
        self.image = enhancer.enhance(factor)
        self.update_preview()
        self.status.config(text=f"Applied: Brightness ×{factor:.1f}")

    def apply_contrast(self) -> None:
        img = self.image
        if img is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        factor = float(self.contrast_scale.get())
        enhancer = ImageEnhance.Contrast(img)
        self.image = enhancer.enhance(factor)
        self.update_preview()
        self.status.config(text=f"Applied: Contrast ×{factor:.1f}")

    def apply_blur(self) -> None:
        img = self.image
        if img is None:
            messagebox.showinfo("No image", "Load pic1 or pic2 first.")
            return
        radius = int(self.blur_scale.get())
        if radius <= 0:
            self.status.config(text="Blur radius is 0 — no change.")
            return
        self.image = img.filter(ImageFilter.GaussianBlur(radius=radius))
        self.update_preview()
        self.status.config(text=f"Applied: Gaussian Blur (r={radius})")

    # ---------- Helpers ----------
    def on_zoom_changed(self, _evt: str) -> None:
        self.zoom = float(self.zoom_scale.get())
        self.update_preview()

    def _pane_sizes(self) -> tuple[int, int]:
        """Compute dynamic pane sizes for each side, based on window width."""
        # Try to get live widget width; fall back to PREVIEW_MAX_W
        total_w = max(self.winfo_width() - 260, PREVIEW_MAX_W)  # subtract approx controls width
        side_w = max(200, total_w // 2 - SIDE_GAP)
        return side_w, PREVIEW_MAX_H

    def update_preview(self) -> None:
        """Refresh BEFORE and AFTER panes (respecting zoom and compare image)."""
        side_w, side_h = self._pane_sizes()

        # BEFORE (either original or compare_image if present)
        src_before = self.compare_image if self.compare_image is not None else self.original_image
        if src_before is None:
            self.before_label.config(image="", text="No image", compound=tk.CENTER, fg="#bbb", bg="#222")
        else:
            disp_before = scale_for_pane(src_before, side_w, side_h, self.zoom)
            self.tk_preview_before = pil_to_tk(disp_before)
            self.before_label.config(image=self.tk_preview_before, text="", bg="#222")

        # AFTER (working image)
        if self.image is None:
            self.after_label.config(image="", text="No image", compound=tk.CENTER, fg="#bbb", bg="#222")
        else:
            disp_after = scale_for_pane(self.image, side_w, side_h, self.zoom)
            self.tk_preview_after = pil_to_tk(disp_after)
            self.after_label.config(image=self.tk_preview_after, text="", bg="#222")

if __name__ == "__main__":
    app = ImageEditorApp()
    app.mainloop()
