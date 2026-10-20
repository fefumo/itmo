"""Распознавание одного изображения: python src/predict.py path/to/image.jpg"""
from paths import CHECKPOINT
import argparse
from PIL import Image, ImageOps
import torch
from common import transform
from model import SmallCNN

p = argparse.ArgumentParser(description=__doc__)
p.add_argument('image')
p.add_argument('--checkpoint', default=CHECKPOINT)
a = p.parse_args()
torch.set_num_threads(4)
checkpoint = torch.load(a.checkpoint, map_location='cpu', weights_only=True)
model = SmallCNN()
model.load_state_dict(checkpoint['state_dict'])
model.eval()
with Image.open(a.image) as im:
    x = transform()(ImageOps.exif_transpose(im).convert('RGB')).unsqueeze(0)
with torch.inference_mode():
    probs = model(x).softmax(1)[0]
for name, prob in sorted(zip(checkpoint['classes'], probs.tolist()), key=lambda v: -v[1]):
    print(f'{name:10s}: {prob:.2%}')
