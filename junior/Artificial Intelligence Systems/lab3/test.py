#!/usr/bin/env python3

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from typing import Tuple, List, Dict

CSV_PATH = "./Student_Performance.csv"
TARGET = "Performance Index"
RANDOM_STATE = 52
TEST_SIZE = 0.2


def set_seed(seed: int = 42) -> None:
    np.random.seed(seed)


def train_test_split_np(
    X: pd.DataFrame, y: pd.Series, test_size: float = 0.2, seed: int = 42
) -> Tuple[pd.DataFrame, pd.DataFrame, pd.Series, pd.Series]:
    set_seed(seed)
    idx = np.arange(len(X))
    np.random.shuffle(idx)
    n_test = int(len(X) * test_size)
    test_idx = idx[:n_test]
    train_idx = idx[n_test:]
    return X.iloc[train_idx], X.iloc[test_idx], y.iloc[train_idx], y.iloc[test_idx]


def add_intercept(X: np.ndarray) -> np.ndarray:
    """Add a column of ones for the intercept term."""
    ones = np.ones((X.shape[0], 1), dtype=X.dtype)
    return np.hstack([ones, X])


def ols_fit(X: np.ndarray, y: np.ndarray) -> np.ndarray:
    """
    Closed-form OLS: beta = (X^T X)^{-1} X^T y
    Uses pseudo-inverse for numerical stability.
    """
    X1 = add_intercept(X)
    beta = np.linalg.pinv(X1.T @ X1) @ (X1.T @ y)
    return beta  # shape: (n_features+1, )


def ols_predict(X: np.ndarray, beta: np.ndarray) -> np.ndarray:
    X1 = add_intercept(X)
    return X1 @ beta


def r2_score(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    ss_res = np.sum((y_true - y_pred) ** 2)
    ss_tot = np.sum((y_true - np.mean(y_true)) ** 2)
    return 1.0 - ss_res / ss_tot if ss_tot != 0 else np.nan


def summarize_numeric(df: pd.DataFrame) -> pd.DataFrame:
    """Include common quantiles explicitly."""
    quantiles = [0.05, 0.25, 0.5, 0.75, 0.95]
    desc = df.describe(include=[np.number]).T
    for q in quantiles:
        desc[f"q{int(q * 100)}"] = df.quantile(q, numeric_only=True)
    # Reorder columns nicely
    cols = ["count", "mean", "std", "min", "q5", "q25", "50%", "q75", "q95", "max"]
    desc = desc.rename(columns={"25%": "q25", "50%": "median", "75%": "q75"})
    cols = ["count", "mean", "std", "min", "q5", "q25", "median", "q75", "q95", "max"]
    return desc[cols]


def plot_statistics(df: pd.DataFrame, target: str) -> None:
    """Histograms, boxplots for numeric, and a correlation heatmap."""
    numeric_df = df.select_dtypes(include=[np.number])

    # 1) Histograms
    numeric_df.hist(bins=20, figsize=(12, 8))
    plt.suptitle("Histograms of Numeric Features", y=0.99)
    plt.tight_layout()
    plt.show()

    # 2) Boxplots
    plt.figure(figsize=(12, 6))
    numeric_df.boxplot(rot=45)
    plt.title("Boxplots of Numeric Features")
    plt.tight_layout()
    plt.show()

    # 3) Correlation Heatmap (no seaborn)
    if numeric_df.shape[1] >= 2:
        corr = numeric_df.corr(numeric_only=True)
        plt.figure(figsize=(8, 6))
        im = plt.imshow(corr.values, aspect="auto")
        plt.colorbar(im, fraction=0.046, pad=0.04)
        plt.xticks(range(len(corr.columns)), corr.columns, rotation=45, ha="right")
        plt.yticks(range(len(corr.index)), corr.index)
        plt.title("Correlation Heatmap (numeric)")
        plt.tight_layout()
        plt.show()

        # Correlation of features with target (bar)
        if target in corr.columns:
            target_corr = (
                corr[target].drop(target, errors="ignore").sort_values(ascending=False)
            )
            plt.figure(figsize=(8, 5))
            target_corr.plot(kind="bar")
            plt.title(f"Correlation with target: {target}")
            plt.ylabel("Pearson r")
            plt.tight_layout()
            plt.show()


def preprocess(
    df_raw: pd.DataFrame, target: str
) -> Tuple[pd.DataFrame, pd.Series, Dict[str, float], Dict[str, float]]:
    """
    - Split X/y
    - Handle missing:
        * Numeric: fill with median
        * Categorical: fill with mode
    - One-hot encode categoricals
    - Normalize numeric (z-score) -> save means/stds for later transforms
    Returns X_processed, y, num_means, num_stds
    """
    df = df_raw.copy()

    if target not in df.columns:
        raise ValueError(f"Target '{target}' not found in columns: {list(df.columns)}")

    y = df[target]
    X = df.drop(columns=[target])

    # Identify types
    num_cols = X.select_dtypes(include=[np.number]).columns.tolist()
    cat_cols = X.select_dtypes(exclude=[np.number]).columns.tolist()

    # Missing values
    # numeric -> median; categorical -> mode (first if multiple)
    num_medians = X[num_cols].median(numeric_only=True)
    X[num_cols] = X[num_cols].fillna(num_medians)

    for c in cat_cols:
        mode_val = X[c].mode(dropna=True)
        fill_val = mode_val.iloc[0] if not mode_val.empty else "Unknown"
        X[c] = X[c].fillna(fill_val)

    # Encoding categoricals (drop_first to avoid dummy trap)
    X = pd.get_dummies(X, columns=cat_cols, drop_first=True)

    # Normalize numeric columns (z-score)
    num_means = X[num_cols].mean(numeric_only=True)
    num_stds = X[num_cols].std(ddof=0, numeric_only=True).replace(0, 1.0)
    X[num_cols] = (X[num_cols] - num_means) / num_stds

    return X, y, num_means.to_dict(), num_stds.to_dict()


def select_top_k_by_corr(X: pd.DataFrame, y: pd.Series, k: int = 3) -> List[str]:
    """Return top-k features by absolute Pearson correlation with target."""
    df_tmp = X.copy()
    df_tmp[TARGET] = y
    corr = df_tmp.corr(numeric_only=True)[TARGET].drop(TARGET, errors="ignore")
    corr = corr.abs().sort_values(ascending=False)
    return corr.index[:k].tolist()


def evaluate_model(
    name: str,
    X_train: pd.DataFrame,
    X_test: pd.DataFrame,
    y_train: pd.Series,
    y_test: pd.Series,
) -> float:
    """Fit manual OLS and compute R²."""
    # Ensure numpy arrays
    Xtr = X_train.to_numpy(dtype=float)
    Xte = X_test.to_numpy(dtype=float)
    ytr = y_train.to_numpy(dtype=float).reshape(
        -1,
    )
    yte = y_test.to_numpy(dtype=float).reshape(
        -1,
    )

    beta = ols_fit(Xtr, ytr)
    preds = ols_predict(Xte, beta)
    r2 = r2_score(yte, preds)
    print(f"[{name}] R² on test: {r2:.4f} | n_features={X_train.shape[1]}")
    return r2


def main():
    # 0) Load
    df = pd.read_csv(CSV_PATH)

    # 1) Stats + Visualizations
    print("\n=== Dataset shape ===")
    print(df.shape)

    print("\n=== Head ===")
    print(df.head())

    print("\n=== Numeric summary with quantiles ===")
    numeric_summary = summarize_numeric(df)
    print(numeric_summary)

    plot_statistics(df, TARGET)

    # 2) Preprocess
    X_all, y, _, _ = preprocess(df, TARGET)

    # 3) Split
    X_train_all, X_test_all, y_train, y_test = train_test_split_np(
        X_all, y, test_size=TEST_SIZE, seed=RANDOM_STATE
    )

    # 4) Build THREE models with different feature sets

    # Model A: numeric-only features (subset of X_all that were originally numeric)
    # We reconstruct by checking which original numeric columns survived (some may be normalized)
    original_num_cols = (
        df.drop(columns=[TARGET]).select_dtypes(include=[np.number]).columns.tolist()
    )
    modelA_feats = [c for c in X_all.columns if c in original_num_cols]
    if not modelA_feats:
        # Fallback: if everything was categorical, pick first 1-3 dummy cols
        modelA_feats = X_all.columns[:3].tolist()
    XA_tr = X_train_all[modelA_feats]
    XA_te = X_test_all[modelA_feats]

    # Model B: full feature set (all encoded + normalized)
    XB_tr = X_train_all
    XB_te = X_test_all

    # Model C: top-k by absolute correlation with target
    topk = select_top_k_by_corr(X_all, y, k=min(3, X_all.shape[1]))
    XC_tr = X_train_all[topk]
    XC_te = X_test_all[topk]

    # 5) Train & evaluate (manual OLS)
    r2_A = evaluate_model("Model A (numeric-only)", XA_tr, XA_te, y_train, y_test)
    r2_B = evaluate_model("Model B (all features)", XB_tr, XB_te, y_train, y_test)
    r2_C = evaluate_model(
        f"Model C (top-{len(topk)} by |corr|)", XC_tr, XC_te, y_train, y_test
    )

    # 6) Compare visually
    names = ["A numeric", "B all", f"C top{len(topk)}"]
    scores = [r2_A, r2_B, r2_C]

    plt.figure(figsize=(6, 4))
    plt.bar(names, scores)
    plt.ylabel("R² (test)")
    plt.ylim(0, 1)
    plt.title("Model Comparison (R²)")
    for i, v in enumerate(scores):
        plt.text(i, v + 0.02, f"{v:.3f}", ha="center")
    plt.tight_layout()
    plt.show()

    # 7) Print conclusions
    best_idx = int(np.nanargmax(scores))
    print("\n=== Conclusions ===")
    for n, s in zip(names, scores):
        print(f"{n}: R² = {s:.4f}")
    print(f"\nBest on test: {names[best_idx]}")

    # If Model C won, also show which features it used:
    if best_idx == 2:
        print(f"Top features used by Model C: {topk}")


if __name__ == "__main__":
    main()
