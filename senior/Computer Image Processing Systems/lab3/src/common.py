import csv
from pathlib import Path
from PIL import Image, ImageOps
from torch.utils.data import Dataset
from torchvision import transforms

CLASSES = ['paper', 'rock', 'scissors']


def transform(training=False):
    steps = [transforms.Resize((96, 96))]
    if training:
        steps += [transforms.RandomHorizontalFlip(),
                  transforms.RandomAffine(degrees=10, translate=(.05, .05), scale=(.9, 1.1)),
                  transforms.ColorJitter(brightness=.15, contrast=.15, saturation=.1)]
    return transforms.Compose(steps + [transforms.ToTensor(),
                                      transforms.Normalize((.5,)*3, (.5,)*3)])


class GestureDataset(Dataset):
    def __init__(self, root, manifest, split, training=False):
        self.root = Path(root)
        with open(manifest, newline='') as f:
            self.rows = [r for r in csv.DictReader(f) if r['split'] == split]
        if not self.rows:
            raise ValueError(f'Пустая выборка {split}; сначала выполните src/prepare_data.py')
        self.transform = transform(training)

    def __len__(self):
        return len(self.rows)

    def __getitem__(self, index):
        row = self.rows[index]
        with Image.open(self.root / row['path']) as im:
            x = self.transform(ImageOps.exif_transpose(im).convert('RGB'))
        return x, int(row['label'])
