"""Обучение только на train, выбор checkpoint только по validation loss."""
from paths import DATA_ROOT, MANIFEST, RESULTS_DIR
import argparse
import csv
import hashlib
import json
import platform
import random
import resource
import time
from pathlib import Path
import numpy as np
import torch
from torch import nn
from torch.utils.data import DataLoader
from sklearn.metrics import accuracy_score, f1_score
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from common import GestureDataset, CLASSES
from model import SmallCNN


def evaluate(model, loader, device):
    model.eval()
    loss_sum, truth, predictions, probabilities = 0., [], [], []
    with torch.inference_mode():
        for x, y in loader:
            x, y = x.to(device), y.to(device)
            logits = model(x)
            loss_sum += nn.functional.cross_entropy(logits, y, reduction='sum').item()
            truth.extend(y.cpu().tolist())
            predictions.extend(logits.argmax(1).cpu().tolist())
            probabilities.extend(logits.softmax(1).cpu().tolist())
    metrics = dict(loss=loss_sum/len(truth), accuracy=accuracy_score(truth, predictions),
                   macro_f1=f1_score(truth, predictions, labels=[0,1,2], average='macro', zero_division=0))
    return metrics, truth, predictions, probabilities


def plot_history(history, path):
    fig, axes = plt.subplots(1, 2, figsize=(11, 4))
    epochs = [r['epoch'] for r in history]
    for ax, metric in zip(axes, ['loss', 'accuracy']):
        for split in ['train', 'val']:
            ax.plot(epochs, [r[f'{split}_{metric}'] for r in history], label=split)
        ax.set(xlabel='Epoch', ylabel=metric, title=metric.title())
        ax.grid(alpha=.25)
        ax.legend()
    fig.tight_layout()
    fig.savefig(path, dpi=150)
    plt.close(fig)


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--data', default=DATA_ROOT)
    p.add_argument('--manifest', default=MANIFEST)
    p.add_argument('--out', default=RESULTS_DIR)
    p.add_argument('--epochs', type=int, default=25)
    p.add_argument('--batch-size', type=int, default=32)
    p.add_argument('--threads', type=int, default=4)
    p.add_argument('--patience', type=int, default=6)
    p.add_argument('--lr', type=float, default=.001)
    p.add_argument('--seed', type=int, default=42)
    p.add_argument('--device', choices=['cpu', 'cuda'], default='cpu')
    a = p.parse_args()
    if min(a.epochs, a.batch_size, a.threads, a.patience) <= 0 or a.lr <= 0:
        p.error('Числовые параметры должны быть положительными')
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    if (out / 'best.pt').exists():
        p.error('В папке уже есть best.pt. Укажите новую папку --out для нового эксперимента.')
    random.seed(a.seed)
    np.random.seed(a.seed)
    torch.manual_seed(a.seed)
    torch.set_num_threads(a.threads)
    torch.use_deterministic_algorithms(True)
    if a.device == 'cuda' and not torch.cuda.is_available():
        p.error('CUDA недоступна; используйте --device cpu')
    device = torch.device(a.device)
    train = GestureDataset(a.data, a.manifest, 'train', training=True)
    train_clean = GestureDataset(a.data, a.manifest, 'train')
    val = GestureDataset(a.data, a.manifest, 'val')
    generator = torch.Generator().manual_seed(a.seed)
    train_loader = DataLoader(train, batch_size=a.batch_size, shuffle=True, num_workers=0, generator=generator)
    clean_loader = DataLoader(train_clean, batch_size=a.batch_size, num_workers=0)
    val_loader = DataLoader(val, batch_size=a.batch_size, num_workers=0)
    model = SmallCNN().to(device)
    optimizer = torch.optim.Adam(model.parameters(), lr=a.lr, weight_decay=1e-4)
    config = dict(vars(a), python=platform.python_version(), torch=str(torch.__version__),
                  platform=platform.platform(), parameters=sum(p.numel() for p in model.parameters()),
                  manifest_sha256=hashlib.sha256(Path(a.manifest).read_bytes()).hexdigest())
    (out/'config.json').write_text(json.dumps(config, indent=2))
    history, best, stale = [], float('inf'), 0
    start = time.perf_counter()
    print(f'Device: {device}; parameters: {config["parameters"]}; train: {len(train)}; val: {len(val)}', flush=True)
    for epoch in range(1, a.epochs+1):
        epoch_start = time.perf_counter()
        model.train()
        aug_loss = 0.
        for x, y in train_loader:
            x, y = x.to(device), y.to(device)
            optimizer.zero_grad(set_to_none=True)
            loss = nn.functional.cross_entropy(model(x), y)
            loss.backward()
            optimizer.step()
            aug_loss += loss.item()*len(y)
        # Сопоставимые train/val: eval(), без аугментаций и dropout, одинаковые веса.
        tr = evaluate(model, clean_loader, device)[0]
        va = evaluate(model, val_loader, device)[0]
        row = dict(epoch=epoch, optimization_loss=aug_loss/len(train),
                   **{f'train_{k}':v for k,v in tr.items()}, **{f'val_{k}':v for k,v in va.items()},
                   seconds=time.perf_counter()-epoch_start)
        history.append(row)
        if va['loss'] < best:
            best, stale = va['loss'], 0
            torch.save(dict(state_dict=model.state_dict(), epoch=epoch, classes=CLASSES,
                            config=config, val_metrics=va), out/'best.pt')
        else:
            stale += 1
        with (out/'history.csv').open('w', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=list(row))
            writer.writeheader()
            writer.writerows(history)
        print(f'Epoch {epoch:02d} | train loss {tr["loss"]:.4f} acc {tr["accuracy"]:.4f} | '
              f'val loss {va["loss"]:.4f} acc {va["accuracy"]:.4f} | {row["seconds"]:.1f}s', flush=True)
        if stale >= a.patience:
            print('Early stopping', flush=True)
            break
    checkpoint = torch.load(out/'best.pt', map_location=device, weights_only=True)
    model.load_state_dict(checkpoint['state_dict'])
    summary = dict(best_epoch=checkpoint['epoch'], epochs_run=len(history),
                   train=evaluate(model, clean_loader, device)[0],
                   val=evaluate(model, val_loader, device)[0],
                   training_seconds=time.perf_counter()-start,
                   peak_rss_mib=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024)
    (out/'training_summary.json').write_text(json.dumps(summary, indent=2))
    plot_history(history, out/'learning_curves.png')
    print(json.dumps(summary, indent=2), flush=True)


if __name__ == '__main__':
    main()
