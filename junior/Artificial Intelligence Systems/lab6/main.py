import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


# =========================
# CONFIG
# =========================
TRAIN_PATH = "./train.csv"
TEST_PATH = "./test.csv"
GENDER_SUB_PATH = "./gender_submission.csv"

RANDOM_SEED = 42
VAL_FRACTION = 0.2  # доп.валидация из train (по желанию)
THRESHOLD = 0.5


# =========================
# METRICS
# =========================
def accuracy(y_true, y_pred):
    y_true = y_true.astype(int)
    y_pred = y_pred.astype(int)
    return float((y_true == y_pred).mean())


def precision(y_true, y_pred):
    y_true = y_true.astype(int)
    y_pred = y_pred.astype(int)
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    return float(tp / (tp + fp + 1e-12))


def recall(y_true, y_pred):
    y_true = y_true.astype(int)
    y_pred = y_pred.astype(int)
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))
    return float(tp / (tp + fn + 1e-12))


def f1_score(y_true, y_pred):
    p = precision(y_true, y_pred)
    r = recall(y_true, y_pred)
    return float(2 * p * r / (p + r + 1e-12))


def confusion_counts(y_true, y_pred):
    y_true = y_true.astype(int)
    y_pred = y_pred.astype(int)
    tp = int(np.sum((y_true == 1) & (y_pred == 1)))
    tn = int(np.sum((y_true == 0) & (y_pred == 0)))
    fp = int(np.sum((y_true == 0) & (y_pred == 1)))
    fn = int(np.sum((y_true == 1) & (y_pred == 0)))
    return tp, tn, fp, fn


# =========================
# LOGREG
# =========================
class LogisticRegressionScratch:
    def __init__(self, fit_intercept=True, l2=0.0):
        self.fit_intercept = bool(fit_intercept)
        self.l2 = float(l2)
        self.w = None
        self.loss_history = []

    @staticmethod
    def sigmoid(z):
        z = np.clip(z, -35, 35)
        return 1.0 / (1.0 + np.exp(-z))

    def _add_intercept(self, X):
        if not self.fit_intercept:
            return X
        return np.hstack([np.ones((X.shape[0], 1), dtype=X.dtype), X])

    def log_loss(self, y, p):
        eps = 1e-12
        p = np.clip(p, eps, 1 - eps)
        base = -np.mean(y * np.log(p) + (1 - y) * np.log(1 - p))
        if self.l2 > 0:
            w = self.w[1:] if self.fit_intercept else self.w
            base += (self.l2 / (2 * len(y))) * np.sum(w * w)
        return float(base)

    def fit(self, X, y, lr=0.1, n_iter=1000, method="gd", newton_damping=1e-6, verbose=False):
        """
        method:
          - "gd": gradient descent
          - "newton": Newton optimization (Hessian)
        """
        X = np.asarray(X, dtype=np.float64)
        y = np.asarray(y, dtype=np.float64).reshape(-1)

        Xb = self._add_intercept(X)
        m, n = Xb.shape

        self.w = np.zeros(n, dtype=np.float64)
        self.loss_history = []

        for it in range(int(n_iter)):
            z = Xb @ self.w
            p = self.sigmoid(z)

            grad = (Xb.T @ (p - y)) / m

            # L2 regularization (exclude bias)
            if self.l2 > 0:
                reg = np.zeros_like(self.w)
                if self.fit_intercept:
                    reg[1:] = (self.l2 / m) * self.w[1:]
                else:
                    reg[:] = (self.l2 / m) * self.w
                grad += reg

            if method == "gd":
                self.w -= lr * grad

            elif method == "newton":
                R = p * (1 - p)
                XR = Xb * R[:, None]
                H = (Xb.T @ XR) / m

                if self.l2 > 0:
                    if self.fit_intercept:
                        H[1:, 1:] += (self.l2 / m) * np.eye(n - 1)
                    else:
                        H += (self.l2 / m) * np.eye(n)

                H += newton_damping * np.eye(n)

                step = np.linalg.solve(H, grad)
                self.w -= lr * step  # lr as step size
            else:
                raise ValueError("method must be 'gd' or 'newton'")

            loss = self.log_loss(y, self.sigmoid(Xb @ self.w))
            self.loss_history.append(loss)

            if verbose and (it % max(1, n_iter // 10) == 0):
                print(f"[{method}] iter={it} loss={loss:.5f}")

        return self

    def predict_proba(self, X):
        X = np.asarray(X, dtype=np.float64)
        Xb = self._add_intercept(X)
        return self.sigmoid(Xb @ self.w)

    def predict(self, X, threshold=0.5):
        return (self.predict_proba(X) >= threshold).astype(int)


# =========================
# PREPROCESSING TITANIC
# =========================
def extract_title(name):
    if not isinstance(name, str):
        return "Unknown"
    if "," in name and "." in name:
        try:
            return name.split(",")[1].split(".")[0].strip()
        except Exception:
            return "Unknown"
    return "Unknown"


def extract_deck(cabin):
    if isinstance(cabin, str) and len(cabin) > 0:
        return cabin[0]
    return "U"


def preprocess(train_df, test_df):
    train = train_df.copy()
    test = test_df.copy()

    y = train["Survived"].astype(int).to_numpy()
    train = train.drop(columns=["Survived"])

    full = pd.concat([train, test], axis=0, ignore_index=True)

    # feature engineering
    full["Title"] = full["Name"].apply(extract_title)
    full["FamilySize"] = full["SibSp"].fillna(0) + full["Parch"].fillna(0) + 1
    full["IsAlone"] = (full["FamilySize"] == 1).astype(int)

    full["CabinKnown"] = full["Cabin"].notna().astype(int)
    full["Deck"] = full["Cabin"].apply(extract_deck)

    # missing values
    if full["Embarked"].isna().any():
        full["Embarked"] = full["Embarked"].fillna(full["Embarked"].mode(dropna=True)[0])

    full["Fare"] = full.groupby("Pclass")["Fare"].transform(lambda s: s.fillna(s.median()))
    full["Fare"] = full["Fare"].fillna(full["Fare"].median())

    # Age: median by (Sex, Pclass, Title) -> (Sex,Pclass) -> global median
    full["Age"] = full.groupby(["Sex", "Pclass", "Title"])["Age"].transform(lambda s: s.fillna(s.median()))
    full["Age"] = full.groupby(["Sex", "Pclass"])["Age"].transform(lambda s: s.fillna(s.median()))
    full["Age"] = full["Age"].fillna(full["Age"].median())

    # drop raw text columns
    full = full.drop(columns=["Name", "Ticket", "Cabin"])

    # one-hot
    full = pd.get_dummies(full, columns=["Sex", "Embarked", "Title", "Deck"], drop_first=True)

    # split back
    n_train = len(train)
    X_train = full.iloc[:n_train].copy()
    X_test = full.iloc[n_train:].copy()

    # standardize numeric columns using train stats
    numeric_cols = [c for c in ["Age", "Fare", "FamilySize", "SibSp", "Parch"] if c in X_train.columns]
    means = X_train[numeric_cols].mean()
    stds = X_train[numeric_cols].std().replace(0, 1.0)

    X_train[numeric_cols] = (X_train[numeric_cols] - means) / stds
    X_test[numeric_cols] = (X_test[numeric_cols] - means) / stds

    return X_train.astype(np.float64), y, X_test.astype(np.float64)


def train_val_split(X, y, val_fraction=0.2, seed=42):
    rng = np.random.default_rng(seed)
    idx = np.arange(len(y))
    rng.shuffle(idx)
    n_val = int(len(y) * val_fraction)
    val_idx = idx[:n_val]
    tr_idx = idx[n_val:]
    return X[tr_idx], y[tr_idx], X[val_idx], y[val_idx]


# =========================
# STATS + PLOTS
# =========================
def print_and_plot_stats(train_df, test_df):
    print("\n=== TRAIN missing values (top 15) ===")
    print(train_df.isna().sum().sort_values(ascending=False).head(15))

    print("\n=== TEST missing values (top 15) ===")
    print(test_df.isna().sum().sort_values(ascending=False).head(15))

    print("\n=== TRAIN describe (numeric) ===")
    print(train_df.describe(percentiles=[0.1, 0.25, 0.5, 0.75, 0.9]).T)

    print("\n=== TEST describe (numeric) ===")
    print(test_df.describe(percentiles=[0.1, 0.25, 0.5, 0.75, 0.9]).T)

    if "Age" in train_df.columns:
        plt.figure()
        train_df["Age"].dropna().hist(bins=30)
        plt.title("Train: Age distribution")
        plt.xlabel("Age")
        plt.ylabel("Count")
        plt.tight_layout()

    if "Fare" in train_df.columns:
        plt.figure()
        train_df["Fare"].dropna().hist(bins=30)
        plt.title("Train: Fare distribution")
        plt.xlabel("Fare")
        plt.ylabel("Count")
        plt.tight_layout()

    if "Sex" in train_df.columns and "Survived" in train_df.columns:
        plt.figure()
        train_df.groupby("Sex")["Survived"].mean().plot(kind="bar")
        plt.title("Train: survival rate by Sex")
        plt.xlabel("Sex")
        plt.ylabel("Mean Survived")
        plt.tight_layout()

    if "Pclass" in train_df.columns and "Survived" in train_df.columns:
        plt.figure()
        train_df.groupby("Pclass")["Survived"].mean().plot(kind="bar")
        plt.title("Train: survival rate by Pclass")
        plt.xlabel("Pclass")
        plt.ylabel("Mean Survived")
        plt.tight_layout()

    # correlation heatmap numeric
    plt.figure()
    corr = train_df.select_dtypes(include=[np.number]).corr()
    plt.imshow(corr, interpolation="nearest")
    plt.title("Train: correlation (numeric)")
    plt.xticks(range(len(corr.columns)), corr.columns, rotation=90)
    plt.yticks(range(len(corr.columns)), corr.columns)
    plt.colorbar()
    plt.tight_layout()

    plt.show()


# =========================
# EXPERIMENTS
# =========================
def evaluate(model, X, y):
    pred = model.predict(X, threshold=THRESHOLD)
    tp, tn, fp, fn = confusion_counts(y, pred)
    return {
        "acc": accuracy(y, pred),
        "precision": precision(y, pred),
        "recall": recall(y, pred),
        "f1": f1_score(y, pred),
        "tp": tp,
        "tn": tn,
        "fp": fp,
        "fn": fn,
    }


def run_experiments(X_train, y_train, X_test, y_test):
    """
    Оцениваем на TEST (gender_submission.csv).
    Дополнительно можно выводить метрики на VAL split, но в таблице держим test.
    """
    rows = []

    # GD
    gd_lrs = [0.01, 0.05, 0.1, 0.2]
    gd_iters = [300, 800, 2000, 4000]

    # Newton (меньше итераций)
    newton_lrs = [0.5, 1.0]
    newton_iters = [10, 25, 50, 100]

    for lr in gd_lrs:
        for n_iter in gd_iters:
            model = LogisticRegressionScratch(fit_intercept=True, l2=0.0)
            model.fit(X_train, y_train, lr=lr, n_iter=n_iter, method="gd")
            m = evaluate(model, X_test, y_test)
            rows.append(
                {
                    "method": "gd",
                    "lr": lr,
                    "n_iter": n_iter,
                    "final_loss": model.loss_history[-1],
                    "acc": m["acc"],
                    "precision": m["precision"],
                    "recall": m["recall"],
                    "f1": m["f1"],
                }
            )

    for lr in newton_lrs:
        for n_iter in newton_iters:
            model = LogisticRegressionScratch(fit_intercept=True, l2=0.0)
            try:
                model.fit(X_train, y_train, lr=lr, n_iter=n_iter, method="newton", newton_damping=1e-6)
            except np.linalg.LinAlgError:
                continue
            m = evaluate(model, X_test, y_test)
            rows.append(
                {
                    "method": "newton",
                    "lr": lr,
                    "n_iter": n_iter,
                    "final_loss": model.loss_history[-1],
                    "acc": m["acc"],
                    "precision": m["precision"],
                    "recall": m["recall"],
                    "f1": m["f1"],
                }
            )

    res = pd.DataFrame(rows).sort_values(["f1", "acc"], ascending=False).reset_index(drop=True)
    return res


def plot_experiment_results(results):
    plt.figure()
    plt.plot(results["f1"].to_numpy(), marker="o", linestyle="None")
    plt.title("F1 over experiments (sorted)")
    plt.xlabel("Experiment index (sorted)")
    plt.ylabel("F1")
    plt.tight_layout()

    plt.figure()
    results.groupby("method")["f1"].mean().plot(kind="bar")
    plt.title("Mean F1 by optimization method")
    plt.xlabel("Method")
    plt.ylabel("Mean F1")
    plt.tight_layout()

    plt.show()


# =========================
# MAIN
# =========================
def main():
    for path in [TRAIN_PATH, TEST_PATH, GENDER_SUB_PATH]:
        if not os.path.exists(path):
            raise FileNotFoundError(f"Не найден файл: {path}")

    train_df = pd.read_csv(TRAIN_PATH)
    test_df = pd.read_csv(TEST_PATH)
    gender_df = pd.read_csv(GENDER_SUB_PATH)

    # 3) stats + plots
    print_and_plot_stats(train_df, test_df)

    # 2) preprocess (train+test together)
    X_train_df, y_train, X_test_df = preprocess(train_df, test_df)
    X_train = X_train_df.to_numpy()
    X_test = X_test_df.to_numpy()

    # 7) "тестовые" лейблы (baseline)
    # Важно: нужно гарантировать одинаковый порядок PassengerId
    test_ids = test_df["PassengerId"].astype(int).to_numpy()
    gender_ids = gender_df["PassengerId"].astype(int).to_numpy()

    if not np.array_equal(test_ids, gender_ids):
        # если порядок отличается — выровняем
        merged = pd.DataFrame({"PassengerId": test_ids}).merge(gender_df, on="PassengerId", how="left")
        if merged["Survived"].isna().any():
            raise ValueError("Не удалось сопоставить PassengerId test.csv и gender_submission.csv")
        y_test = merged["Survived"].astype(int).to_numpy()
    else:
        y_test = gender_df["Survived"].astype(int).to_numpy()

    print("\nEvaluation: TEST labels from gender_submission.csv (baseline labels)")

    # 6) hyperparam search (lr, iters, method) evaluated on TEST
    results = run_experiments(X_train, y_train, X_test, y_test)
    print("\n=== Hyperparameter results (top 12 by F1 on TEST) ===")
    print(results.head(12))

    results.to_csv("hyperparam_results.csv", index=False)
    print("\nSaved: hyperparam_results.csv")

    plot_experiment_results(results)

    # best config
    best = results.iloc[0].to_dict()
    print("\n=== Best config ===")
    print(best)

    # Train best model on TRAIN (already full train) and evaluate on TEST (gender_submission)
    best_model = LogisticRegressionScratch(fit_intercept=True, l2=0.0)
    best_model.fit(
        X_train,
        y_train,
        lr=float(best["lr"]),
        n_iter=int(best["n_iter"]),
        method=str(best["method"]),
        newton_damping=1e-6,
    )

    test_pred = best_model.predict(X_test, threshold=THRESHOLD)
    tp, tn, fp, fn = confusion_counts(y_test, test_pred)

    print("\n=== Final metrics on TEST (gender_submission labels) ===")
    print("accuracy :", accuracy(y_test, test_pred))
    print("precision:", precision(y_test, test_pred))
    print("recall   :", recall(y_test, test_pred))
    print("f1       :", f1_score(y_test, test_pred))
    print(f"confusion (tp, tn, fp, fn) = ({tp}, {tn}, {fp}, {fn})")

    # Loss curve
    plt.figure()
    plt.plot(best_model.loss_history)
    plt.title(f"Loss curve (best: {best['method']} lr={best['lr']} iters={best['n_iter']})")
    plt.xlabel("Iteration")
    plt.ylabel("Log loss")
    plt.tight_layout()
    plt.show()

    submission = pd.DataFrame(
        {"PassengerId": test_df["PassengerId"].astype(int), "Survived": test_pred.astype(int)}
    )
    submission.to_csv("submission.csv", index=False)
    print("\nSaved: submission.csv")

    # небольшая проверка на VAL split из train
    X_tr, y_tr, X_val, y_val = train_val_split(X_train, y_train, VAL_FRACTION, RANDOM_SEED)
    val_model = LogisticRegressionScratch(fit_intercept=True, l2=0.0)
    val_model.fit(X_tr, y_tr, lr=float(best["lr"]), n_iter=int(best["n_iter"]), method=str(best["method"]))
    val_pred = val_model.predict(X_val, threshold=THRESHOLD)
    print(f"\n=== Extra: metrics on VAL split from TRAIN (val_fraction={VAL_FRACTION}) ===")
    print("accuracy :", accuracy(y_val, val_pred))
    print("precision:", precision(y_val, val_pred))
    print("recall   :", recall(y_val, val_pred))
    print("f1       :", f1_score(y_val, val_pred))


if __name__ == "__main__":
    main()
