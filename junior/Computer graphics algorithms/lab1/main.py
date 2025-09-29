import os
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import tkinter as tk
from tkinter import filedialog, messagebox

IMG1_PATH = "pic1.png"
IMG2_PATH = "pic2.png"

def show_image_and_hists(path):
    try:
        im = Image.open(path).convert("RGB")
    except Exception as e:
        messagebox.showerror("Error", f"Failed to open image:\n{e}")
        return

    r, g, b = im.split()
    r_counts = np.array(r.histogram())  # 256 counts (0..255)
    g_counts = np.array(g.histogram())
    b_counts = np.array(b.histogram())
    bins = np.arange(256)
    ticks = np.arange(0, 257, 16)

    # Figure: image on top, 3 histograms below
    fig = plt.figure(figsize=(12, 8))
    gs = fig.add_gridspec(2, 3, height_ratios=[2, 1])

    # Top: image
    ax_img = fig.add_subplot(gs[0, :])
    ax_img.imshow(im)
    ax_img.set_title(f"Image: {os.path.basename(path)}")
    ax_img.axis("off")

    # Bottom: R, G, B histograms
    axR = fig.add_subplot(gs[1, 0])
    axG = fig.add_subplot(gs[1, 1])
    axB = fig.add_subplot(gs[1, 2])

    for ax, counts, color, title in [
        (axR, r_counts, "red",   "Red"),
        (axG, g_counts, "green", "Green"),
        (axB, b_counts, "blue",  "Blue"),
    ]:
        ax.bar(bins, counts, width=1.0, alpha=0.7, color=color)
        ax.set_xlim(0, 255)
        ax.set_xticks(ticks)
        ax.set_xticklabels([str(t) for t in ticks], rotation=90)
        ax.set_xlabel("Intensity (0–255)")
        ax.set_ylabel("Pixel count")
        ax.set_title(f"{title} channel")
        ax.set_yscale("log")

    fig.tight_layout()
    plt.show()

def pick_and_show():
    path = filedialog.askopenfilename(
        title="Choose an image",
        filetypes=[
            ("Images", "*.png;*.jpg;*.jpeg;*.bmp;*.tif;*.tiff;*.webp"),
            ("All files", "*.*"),
        ],
    )
    if path:
        show_image_and_hists(path)

def main_window():
    root = tk.Tk()
    root.title("Image & RGB Histograms")

    tk.Button(root, text="Open Image 1", width=24,
              command=lambda: show_image_and_hists(IMG1_PATH)).pack(padx=12, pady=8)

    tk.Button(root, text="Open Image 2", width=24,
              command=lambda: show_image_and_hists(IMG2_PATH)).pack(padx=12, pady=8)

    tk.Button(root, text="Open From File…", width=24,
              command=pick_and_show).pack(padx=12, pady=8)

    tk.Button(root, text="Quit", width=24, command=root.destroy).pack(padx=12, pady=8)

    root.mainloop()

if __name__ == "__main__":
    main_window()
