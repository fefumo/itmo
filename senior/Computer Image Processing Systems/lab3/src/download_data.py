"""Скачивание Kaggle-архива или импорт уже скачанного ZIP без лишних копий."""
from paths import DATA_ROOT
import argparse
from pathlib import Path, PurePosixPath
import shutil
import tempfile
import urllib.request
import zipfile

URL = 'https://www.kaggle.com/api/v1/datasets/download/drgfreeman/rockpaperscissors'


def extract(archive, destination):
    destination = Path(destination)
    counts = {name: 0 for name in ['paper', 'rock', 'scissors']}
    with zipfile.ZipFile(archive) as z:
        for member in z.infolist():
            path = PurePosixPath(member.filename)
            # Берём только корневые папки классов, не дублирующую rps-cv-images.
            if len(path.parts) == 2 and path.parts[0] in counts and path.suffix.lower() == '.png':
                target = destination.joinpath(*path.parts)
                target.parent.mkdir(parents=True, exist_ok=True)
                with z.open(member) as source, target.open('wb') as output:
                    shutil.copyfileobj(source, output)
                counts[path.parts[0]] += 1
            elif member.filename == 'README_rpc-cv-images.txt':
                destination.mkdir(parents=True, exist_ok=True)
                (destination/member.filename).write_bytes(z.read(member))
    if min(counts.values()) == 0:
        raise ValueError('В архиве не найдены ожидаемые папки paper/rock/scissors с PNG')
    print('Извлечено:', counts)


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--zip', type=Path, help='Путь к архиву, скачанному вручную с Kaggle')
    p.add_argument('--out', default=DATA_ROOT)
    a = p.parse_args()
    if a.zip:
        extract(a.zip, a.out)
    else:
        print('Скачивание ~305 MiB с Kaggle...', flush=True)
        with tempfile.TemporaryDirectory() as directory:
            archive = Path(directory)/'dataset.zip'
            try:
                request = urllib.request.Request(URL, headers={'User-Agent': 'rps-cnn-lab/1.0'})
                with urllib.request.urlopen(request, timeout=120) as response, archive.open('wb') as f:
                    shutil.copyfileobj(response, f)
                extract(archive, a.out)
            except (OSError, zipfile.BadZipFile) as error:
                p.exit(1, f'Ошибка загрузки: {error}\nСкачайте архив на Kaggle и выполните python src/download_data.py --zip /путь/archive.zip\n')


if __name__ == '__main__':
    main()
