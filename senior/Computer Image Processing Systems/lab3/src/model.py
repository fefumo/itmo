"""Компактная CNN: 89 379 обучаемых параметра, вход RGB 96x96."""
from torch import nn


class SmallCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 16, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.AdaptiveAvgPool2d((4, 4)),
        )
        self.classifier = nn.Sequential(
            nn.Flatten(), nn.Linear(64 * 4 * 4, 64), nn.ReLU(),
            nn.Dropout(.3), nn.Linear(64, 3),
        )

    def forward(self, x):
        return self.classifier(self.features(x))  # logits, без Softmax перед CrossEntropyLoss
