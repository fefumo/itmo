"""Проверка изображений, удаление точных дубликатов, разбиение 70/15/15."""
from paths import DATA_ROOT, DATA_DIR
import argparse
import csv
import hashlib
import json
from pathlib import Path
import random
from PIL import Image

CLASSES = ['paper', 'rock', 'scissors']


def prepare(root, destination, seed=42):
    root, destination = Path(root).resolve(), Path(destination)
    if not all((root / c).is_dir() for c in CLASSES):
        raise ValueError('Укажите папку, непосредственно содержащую paper, rock, scissors')
    destination.mkdir(parents=True, exist_ok=True)
    seen, rows, duplicates = {}, [], []
    rng = random.Random(seed)
    counts = {}
    for label, name in enumerate(CLASSES):
        items = []
        # Только прямые папки классов: не добавляем вложенную копию rps-cv-images.
        for p in sorted((root / name).iterdir()):
            if p.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.webp'}:
                continue
            with Image.open(p) as im:
                im = im.convert('RGB')
                digest = hashlib.sha256(str(im.size).encode() + im.tobytes()).hexdigest()
            if digest in seen:
                previous = seen[digest]
                if previous['label'] != label:
                    raise ValueError(f'Одинаковые изображения с разными метками: {p}, {previous}')
                duplicates.append({'removed': p.relative_to(root).as_posix(), 'kept': previous['path']})
                continue
            item = dict(path=p.relative_to(root).as_posix(), label=label, class_name=name, sha256=digest)
            seen[digest] = item
            items.append(item)
        if len(items) < 10:
            raise ValueError(f'Слишком мало изображений класса {name}: {len(items)}')
        rng.shuffle(items)
        n_train, n_val = round(len(items) * .70), round(len(items) * .15)
        subsets = {'train': items[:n_train], 'val': items[n_train:n_train+n_val],
                   'test': items[n_train+n_val:]}
        counts[name] = {key: len(value) for key, value in subsets.items()}
        for split, members in subsets.items():
            rows.extend(dict(**item, split=split) for item in members)
    with (destination / 'split.csv').open('w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['path','label','class_name','sha256','split'])
        writer.writeheader()
        writer.writerows(rows)
    summary = dict(seed=seed, proportions=[.70,.15,.15], classes=CLASSES, counts=counts,
                   unique_images=len(rows), exact_duplicates_removed=duplicates,
                   totals={s: sum(c[s] for c in counts.values()) for s in ['train','val','test']})
    (destination / 'dataset_summary.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False))
    print(json.dumps(summary, indent=2, ensure_ascii=False))
    return summary


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data', default=DATA_ROOT)
    parser.add_argument('--out', default=DATA_DIR)
    parser.add_argument('--seed', type=int, default=42)
    args = parser.parse_args()
    prepare(args.data, args.out, args.seed)
