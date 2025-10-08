from math import sqrt
from typing import Iterable

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split


def show_target_correlations(
    X: pd.DataFrame,
    y: pd.Series,
    top_k: int = 5,
    print_top: int = 10,
) -> None:
    """
    Рисует:
      1) bar-график |corr| всех признаков с таргетом
      2) scatter-графики для top_k признаков (по |corr|) с линейной аппроксимацией
    """

    df = X.copy()
    df["_TARGET_"] = y
    df = df.dropna(axis=0, how="any")
    y_clean: pd.Series = df.pop("_TARGET_")

    corr: pd.Series = df.corrwith(y_clean, numeric_only=True)
    corr = corr.sort_values(key=np.abs, ascending=False)

    if print_top:
        print("\nTop correlations with target:")
        print(corr.head(print_top))

    plt.figure()
    corr.abs().plot(kind="bar")
    plt.title("Absolute Pearson correlation between target and features")
    plt.ylabel("Correllations")
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()
    plt.show()

    top_feats: Iterable = corr.abs().nlargest(top_k).index

    # linear regression + graphics
    for feat in top_feats:
        feat_name = str(feat)

        x_vals = df[feat].to_numpy(dtype=float)
        y_vals = y_clean.to_numpy(dtype=float)

        plt.figure()
        plt.scatter(x_vals, y_vals, alpha=0.6)

        if np.nanstd(x_vals) > 0:
            try:
                a, b = np.polyfit(x_vals, y_vals, 1)
                xs = np.linspace(
                    float(np.nanmin(x_vals)), float(np.nanmax(x_vals)), 100
                )
                ys = a * xs + b
                plt.plot(xs, ys)
            except Exception:
                pass

        plt.title(f"Target vs {feat_name} (corr={corr[feat]:.3f})")
        plt.xlabel(feat_name)  # <-- str(feat)
        plt.ylabel("Target")
        plt.tight_layout()
        plt.show()


def main():
    # pd.set_option("display.max_rows", None)
    pd.set_option("display.max_columns", None)
    pd.set_option("display.width", None)
    pd.set_option("display.max_colwidth", None)

    df = pd.read_csv("./Student_Performance.csv")
    print("\n-------------------------\n")
    print(df.head())

    # target feature is performance index
    X = df.drop(columns="Performance Index", axis=1)
    y: pd.Series = df.loc[:, "Performance Index"]

    # X = pd.get_dummies(X, columns="Extracurricular Activities", drop_first=True)
    # category_cols = X["Extracurricular Activities"]
    # X = pd.get_dummies(X, columns=category_cols)
    X = pd.get_dummies(
        X, columns=["Extracurricular Activities"], drop_first=True, dtype=int
    )
    print("\n-------------------------\n")
    print(X)

    print("\n-------------------------\n")
    # print(y)
    n = df.shape[0]  # rows
    avg_value = sum(y) / n
    median = y.median()
    variance = np.var(y)
    standard_deviation = np.std(y)
    q1, q2, q3 = y.quantile([0.25, 0.5, 0.75])

    print(
        f"\
    Performance Index stats: \n\
    median: {median}\n\
    amount: {n}\n\
    avg_value: {avg_value}\n\
    variance: {variance}\n\
    standard_deviation: {standard_deviation}\n\
    0.25 quantile = {q1}\n\
    0.5 quantile = {q2}\n\
    0.75 quantile = {q3}\n"
    )

    if q2 == median:
        print("median and Q2 are equal. all good")
    else:
        print("median and Q2 are not equal. something is wrong")

    RANDOM_STATE = 52

    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=RANDOM_STATE)

    model_lr = LinearRegression()
    model_lr.fit(X_train, y_train)
    # print(model_lr.coef_, model_lr.intercept_)
    predictions = model_lr.predict(X_test)

    mse = mean_squared_error(y_test, predictions)
    rmse = sqrt(mse)
    r2 = model_lr.score(X_test, y_test)
    print(f"mean squared error: {rmse}")
    print(f"score: {r2}")

    for name, coef in zip(X.columns, model_lr.coef_):
        print(f"{name}: {coef:.3f}")

    show_target_correlations(X, y)

    # --- Extra models ---
    # 1) Small model with 2-3 features
    small_feats = ["Hours Studied", "Previous Scores", "Sleep Hours"]
    X_small = X[small_feats].copy()

    Xs_train, Xs_test, ys_train, ys_test = train_test_split(
        X_small, y, random_state=RANDOM_STATE
    )

    model_small = LinearRegression()
    model_small.fit(Xs_train, ys_train)
    preds_small = model_small.predict(Xs_test)

    mse_small = mean_squared_error(ys_test, preds_small)
    rmse_small = sqrt(mse_small)
    r2_small = model_small.score(Xs_test, ys_test)

    print("\n--- Small model (2-3 features) ---")
    print("RMSE:", rmse_small)
    print("R2:", r2_small)
    for name, coef in zip(X_small.columns, model_small.coef_):
        print(f"{name}: {coef:.3f}")
    print("Intercept:", model_small.intercept_)

    # 2) Model with a synthetic feature
    X_synth = X.copy()
    # simple interaction as a synthetic feature
    X_synth["StudyPractice"] = X["Hours Studied"].to_numpy(dtype=float) * X[
        "Sample Question Papers Practiced"
    ].to_numpy(dtype=float)

    Xf_train, Xf_test, yf_train, yf_test = train_test_split(
        X_synth, y, random_state=RANDOM_STATE
    )

    model_full_synth = LinearRegression()
    model_full_synth.fit(Xf_train, yf_train)
    preds_full_synth = model_full_synth.predict(Xf_test)

    mse_full_synth = mean_squared_error(yf_test, preds_full_synth)
    rmse_full_synth = sqrt(mse_full_synth)
    r2_full_synth = model_full_synth.score(Xf_test, yf_test)

    print("\n--- Full model + synthetic feature ---")
    print("RMSE:", rmse_full_synth)
    print("R2:", r2_full_synth)
    for name, coef in zip(X_synth.columns, model_full_synth.coef_):
        print(f"{name}: {coef:.3f}")
    print("Intercept:", model_full_synth.intercept_)


if __name__ == "__main__":
    main()
