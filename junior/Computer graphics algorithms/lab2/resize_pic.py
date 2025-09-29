#!/usr/bin/env python3
from PIL import Image
import sys

# --- Usage ---
# python resize_image.py input.jpg output.jpg

if len(sys.argv) != 3:
    print("Usage: python resize_image.py <input_image> <output_image>")
    sys.exit(1)

input_path = sys.argv[1]
output_path = sys.argv[2]

# Open, resize, save
with Image.open(input_path) as img:
    resized = img.resize((420, 320), Image.Resampling.LANCZOS)  # high-quality downscale
    resized.save(output_path, format="PNG")

print(f"Saved resized image as {output_path} (420x320)")
