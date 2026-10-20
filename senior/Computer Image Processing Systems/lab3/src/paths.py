"""Пути по умолчанию относительно корня проекта, независимо от cwd."""
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_ROOT = str(PROJECT_ROOT)
MANIFEST = str(PROJECT_ROOT / 'data' / 'split.csv')
DATA_DIR = str(PROJECT_ROOT / 'data')
RESULTS_DIR = str(PROJECT_ROOT / 'results')
CHECKPOINT = str(PROJECT_ROOT / 'results' / 'best.pt')
