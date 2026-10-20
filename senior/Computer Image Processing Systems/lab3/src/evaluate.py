"""Итоговая проверка лучшего checkpoint на отложенной test-выборке."""
from paths import DATA_ROOT, MANIFEST, RESULTS_DIR
import argparse
import csv
import hashlib
import json
from pathlib import Path
import numpy as np
import torch
from torch.utils.data import DataLoader
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from PIL import Image
from common import GestureDataset, CLASSES
from model import SmallCNN
from train import evaluate


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--data', default=DATA_ROOT)
    p.add_argument('--manifest', default=MANIFEST)
    p.add_argument('--run', default=RESULTS_DIR)
    p.add_argument('--threads', type=int, default=4)
    a = p.parse_args()
    torch.set_num_threads(a.threads)
    run = Path(a.run)
    checkpoint = torch.load(run/'best.pt', map_location='cpu', weights_only=True)
    if hashlib.sha256(Path(a.manifest).read_bytes()).hexdigest() != checkpoint['config']['manifest_sha256']:
        raise ValueError('Разбиение изменилось после обучения; используйте исходный split.csv')
    dataset = GestureDataset(a.data, a.manifest, 'test')
    model = SmallCNN()
    model.load_state_dict(checkpoint['state_dict'])
    metrics, truth, predictions, probabilities = evaluate(model, DataLoader(dataset, batch_size=32), 'cpu')
    report = classification_report(truth, predictions, labels=[0,1,2], target_names=CLASSES,
                                   output_dict=True, zero_division=0)
    cm = confusion_matrix(truth, predictions, labels=[0,1,2])
    output = dict(n_images=len(dataset), **metrics, classification_report=report, confusion_matrix=cm.tolist())
    (run/'test_metrics.json').write_text(json.dumps(output, indent=2))
    with (run/'test_predictions.csv').open('w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['path','true','predicted','confidence'])
        for row, target, pred, probs in zip(dataset.rows, truth, predictions, probabilities):
            w.writerow([row['path'], CLASSES[target], CLASSES[pred], probs[pred]])
    fig, ax = plt.subplots(figsize=(6,5))
    ConfusionMatrixDisplay(cm, display_labels=CLASSES).plot(ax=ax, cmap='Blues', colorbar=False)
    ax.set_title('Test confusion matrix')
    fig.tight_layout()
    fig.savefig(run/'confusion_matrix.png', dpi=150)
    plt.close(fig)
    # Сначала ошибки, затем случайные примеры: показательный, а не только удачный набор.
    errors = [i for i,(t,v) in enumerate(zip(truth,predictions)) if t != v]
    rest = [i for i in np.random.default_rng(42).permutation(len(dataset)) if i not in errors]
    indices = (errors+rest)[:12]
    fig, axes = plt.subplots(3,4, figsize=(12,8))
    for ax in axes.flat:
        ax.axis('off')
    for ax,i in zip(axes.flat, indices):
        with Image.open(Path(a.data)/dataset.rows[i]['path']) as im:
            ax.imshow(im.convert('RGB'))
        ax.set_title(f'True: {CLASSES[truth[i]]}\nPred: {CLASSES[predictions[i]]}',
                     color='green' if truth[i]==predictions[i] else 'red', fontsize=10)
    fig.tight_layout()
    fig.savefig(run/'test_examples.png', dpi=150)
    plt.close(fig)
    print(json.dumps(output, indent=2))


if __name__ == '__main__':
    main()
