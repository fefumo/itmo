from collections import Counter
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import math
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

RANDOM_STATE = 52


class KNN:
    def __init__(self, k) -> None:
        self.k = k

    def fit(self, x, y) -> None:
        self.x_train = x
        self.y_train = y

    def distance(self, x1, x2) -> float:
        return math.dist(x1, x2)

    def predict(self, x_test) -> list:
        out = []
        for i in range(len(x_test)):
            xi = x_test.iloc[i].values
            d = []
            votes = []
            for j in range(len(self.x_train)):
                dist = self.distance(self.x_train.iloc[j].values, xi)
                d.append((dist,j))
            d.sort(key=lambda x: x[0])
            neighbors = d[0 : self.k]
            votes = [self.y_train.iloc[j] for _, j in neighbors]
            ans = Counter(votes).most_common(1)[0][0] # class with the most votes
            out.append(ans)
        return out

    def score(self, x_test, y_test) -> float:
        yp = np.array(self.predict(x_test))
        yt = np.array(y_test)
        return np.mean(yp == yt)


def bin_metrics(y_true, y_pred):
    """
    | Реальность | Предсказано | Обозначение             | Смысл                                        |
    | ---------- | ----------- | ----------------------- | ------------------------------------------- |
    | 1          | 1           | TP (True Positive)  | Больные, которых модель правильно распознала     |
    | 0          | 0           | TN (True Negative)  | Здоровые, правильно распознаны                   |
    | 1          | 0           | FN (False Negative) | Больные, которых модель не распознала            |
    | 0          | 1           | FP (False Positive) | Здоровые, ошибочно признаны больными             |
    
    выборка 100 человек, из них 10 больны
    модель: распознала 8 человек с диабетом, но:
    - 6 из них действительно больны (TP = 6)
    - 2 оказались здоровыми (FP = 2)  
    - 4 больных она пропустила (FN = 4) 
    fp - 1 род
    fn - 2 род
    
    acc = (tp/tn)/N = 94% всех прогнозов верны
    prec = tp/(tp+fp) = 75% Среди предсказанных больных действительно больны
    rec = tp/(tp+fn) = 60% всех больных найдено
    f1 = 2*(prec * rec) / (prec + rec)
    """
    
    y_true = np.asarray(y_true)
    y_pred = np.asarray(y_pred)
    tp = np.sum((y_true == 1) & (y_pred == 1))
    tn = np.sum((y_true == 0) & (y_pred == 0))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))
    acc = (tp + tn) / max(1, (tp + tn + fp + fn)) # доля всех правильных ответов
    prec = tp / max(1, (tp + fp)) # точность
    rec = tp / max(1, (tp + fn)) # полнота
    f1 = 2 * prec * rec / max(1e-12, (prec + rec)) # баланс между точностью и полнотой
    return tp, fp, fn, tn, acc, prec, rec, f1


def plot_confusion_matrix(y_true, y_pred, title):
    labels = np.sort(
        np.unique(np.concatenate([np.asarray(y_true), np.asarray(y_pred)]))
    )
    cm = pd.crosstab(
        pd.Series(y_true, name="True"), pd.Series(y_pred, name="Pred"), dropna=False
    ).reindex(index=labels, columns=labels, fill_value=0)
    plt.figure(figsize=(4, 3))
    sns.heatmap(cm, annot=True, fmt="d", cbar=False)
    plt.title(title)
    plt.xlabel("Pred")
    plt.ylabel("True")
    plt.tight_layout()
    plt.show()


def main():
    raw_data = pd.read_csv("diabetes.xls")
    target_col = "Outcome"

    cat_cols = raw_data.select_dtypes(include=["object", "category"]).columns.tolist()
    if cat_cols:
        raw_data = pd.get_dummies(raw_data, columns=cat_cols, drop_first=True)

    zero_as_nan = [
        c
        for c in ["Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI"]
        if c in raw_data.columns
    ]
    for c in zero_as_nan:
        raw_data[c] = raw_data[c].replace(0, np.nan)

    num_cols = raw_data.columns.drop(target_col)
    raw_data[num_cols] = raw_data[num_cols].fillna(raw_data[num_cols].median())
    raw_data[target_col] = raw_data[target_col].astype(int)

    print("--- Dataset shape:", raw_data)

    print("\n--- Dataset Statistics ---")
    print(raw_data.describe(include="all"))

    plt.figure(figsize=(10, 6))
    sns.heatmap(
        raw_data[num_cols].corr(numeric_only=True),
        annot=True,
        cmap="coolwarm",
        fmt=".2f",
    )
    plt.title("Correlation Heatmap")
    plt.show()

    raw_data[num_cols].hist(bins=20, figsize=(12, 8))
    plt.suptitle("Feature Distributions")
    plt.show()

    from sklearn.decomposition import PCA

    pca = PCA(n_components=3)
    components = pca.fit_transform(raw_data[num_cols])
    comp_df = pd.DataFrame(components, columns=["PC1", "PC2", "PC3"])
    comp_df[target_col] = raw_data[target_col].values

    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection="3d")
    scatter = ax.scatter(
        comp_df["PC1"],
        comp_df["PC2"],
        comp_df["PC3"],
        c=comp_df[target_col],
        s=50,
        alpha=0.7,
    )
    ax.set_xlabel("PC1")
    ax.set_ylabel("PC2")
    ax.set_zlabel("PC3")
    plt.title("3D Visualization (PCA)")
    plt.colorbar(scatter, label=target_col)
    plt.show()

    X = raw_data.drop(columns=target_col)
    y = raw_data[target_col]
    x_train, x_test, y_train, y_test = train_test_split(
        X, y, random_state=RANDOM_STATE, stratify=y, test_size=0.25
    )

    scaler = StandardScaler()
    x_train = pd.DataFrame(
        scaler.fit_transform(x_train), columns=x_train.columns, index=x_train.index
    )
    x_test = pd.DataFrame(
        scaler.transform(x_test), columns=x_test.columns, index=x_test.index
    )

    rng = np.random.RandomState(RANDOM_STATE)
    m1_feats = rng.choice(X.columns, size=min(4, X.shape[1]), replace=False)
    m2_fixed = [c for c in ["Glucose", "BMI", "Age", "BloodPressure"] if c in X.columns]
    if not m2_fixed:
        m2_fixed = X.columns[: min(4, X.shape[1])]

    ks = [3, 5, 10]
    results = []

    print("\nModel 1 (random features):", list(m1_feats))
    for k in ks:
        clf = KNN(k)
        clf.fit(x_train[m1_feats], y_train)
        y_pred = clf.predict(x_test[m1_feats])
        tp, fp, fn, tn, acc, prec, rec, f1 = bin_metrics(y_test, y_pred)
        print(
            f"[M1] k={k} | acc={acc:.3f} | prec={prec:.3f} | rec={rec:.3f} | f1={f1:.3f} | TP={tp} FP={fp} FN={fn} TN={tn}"
        )
        plot_confusion_matrix(y_test, y_pred, f"Model 1 (k={k})")
        results.append(("Model1", k, acc, prec, rec, f1))

    print("\nModel 2 (fixed features):", m2_fixed)
    for k in ks:
        clf = KNN(k)
        clf.fit(x_train[m2_fixed], y_train)
        y_pred = clf.predict(x_test[m2_fixed])
        tp, fp, fn, tn, acc, prec, rec, f1 = bin_metrics(y_test, y_pred)
        print(
            f"[M2] k={k} | acc={acc:.3f} | prec={prec:.3f} | rec={rec:.3f} | f1={f1:.3f} | TP={tp} FP={fp} FN={fn} TN={tn}"
        )
        plot_confusion_matrix(y_test, y_pred, f"Model 2 (k={k})")
        results.append(("Model2", k, acc, prec, rec, f1))

    res_df = pd.DataFrame(results, columns=["model", "k", "acc", "prec", "rec", "f1"])
    best = res_df.sort_values(["f1", "acc"], ascending=False).iloc[0]
    print("\n--- Analytics ---")
    print(res_df.to_string(index=False))
    print(
        f"\nЛучший по F1: {best.model} при k={int(best.k)} | acc={best.acc:.3f} | prec={best.prec:.3f} | rec={best.rec:.3f} | f1={best.f1:.3f}"
    )

if __name__ == "__main__":
    main()
