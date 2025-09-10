import numpy as np
import matplotlib.pyplot as plt
from math import factorial, sin, cos

def input_data():
    n = int(input("Enter the number of points: "))
    x = []
    y = []
    for i in range(n):
        xi = float(input(f"x[{i}] = "))
        yi = float(input(f"y[{i}] = "))
        x.append(xi)
        y.append(yi)
    return np.array(x), np.array(y)

def load_data_from_file(filename):
    data = np.loadtxt(filename)
    return data[:, 0], data[:, 1]

def generate_function_data():
    funcs = {1: (np.sin, "sin(x)"), 2: (np.cos, "cos(x)")}
    print("Choose a function:")
    for k, (_, name) in funcs.items():
        print(f"{k} - {name}")
    choice = int(input("Your choice: "))
    f, name = funcs[choice]
    a = float(input("Enter interval start: "))
    b = float(input("Enter interval end: "))
    n = int(input("Number of points: "))
    x = np.linspace(a, b, n)
    y = f(x)
    return x, y

def finite_differences(y):
    n = len(y)
    diffs = [y.copy()]
    for i in range(1, n):
        diffs.append(np.diff(diffs[-1]))
    return diffs

def print_difference_table(x, y):
    diffs = finite_differences(y)
    n = len(x)
    headers = ["x", "y"] + [f"Δ^{i}y" for i in range(1, n)]
    row_data = []
    for i in range(n):
        row = [f"{x[i]:.4f}", f"{y[i]:.4f}"]
        for order in range(1, n):
            if i < len(diffs[order]):
                row.append(f"{diffs[order][i]:.4f}")
            else:
                row.append("")
        row_data.append(row)
    print("\nFinite Difference Table:")
    print("  ".join(f"{h:>8}" for h in headers))
    for row in row_data:
        print("  ".join(f"{val:>8}" for val in row))
    return diffs

def newton_finite_diff(x, y, x_val):
    h = x[1] - x[0]
    diffs = finite_differences(y)
    t = (x_val - x[0]) / h
    result = y[0]
    t_product = 1
    for i in range(1, len(x)):
        t_product *= (t - i + 1)
        result += t_product / factorial(i) * diffs[i][0]
    return result

def divided_differences(x, y):
    n = len(x)
    coef = y.copy()
    for j in range(1, n):
        coef[j:] = (coef[j:] - coef[j-1:-1]) / (x[j:] - x[:n-j])
    return coef

def newton_divided(x, coef, x_val):
    result = coef[0]
    product = 1
    for i in range(1, len(coef)):
        product *= (x_val - x[i-1])
        result += coef[i] * product
    return result

def lagrange_interpolation(x, y, x_val):
    total = 0
    n = len(x)
    for i in range(n):
        term = y[i]
        for j in range(n):
            if i != j:
                term *= (x_val - x[j]) / (x[i] - x[j])
        total += term
    return total

def plot_all_methods(x, y, x_val):
    x_dense = np.linspace(min(x), max(x), 500)

    y_true = None
    func_name = None
    if np.allclose(y, np.sin(x), atol=1e-1):
        y_true = np.sin(x_dense)
        func_name = 'sin(x)'
    elif np.allclose(y, np.cos(x), atol=1e-1):
        y_true = np.cos(x_dense)
        func_name = 'cos(x)'

    y_lagr_dense = np.array([lagrange_interpolation(x, y, xi) for xi in x_dense])
    coef_div = divided_differences(x, y)
    y_newton_div_dense = np.array([newton_divided(x, coef_div, xi) for xi in x_dense])
    y_newton_fin_dense = np.array([newton_finite_diff(x, y, xi) for xi in x_dense])

    if y_true is not None:
        plt.plot(x_dense, y_true, label="Original Function", color='red', linestyle='solid', linewidth=2)

    plt.plot(x_dense, y_newton_div_dense, label="Newton Method (Divided)", color='orange', linestyle='--', linewidth=2)
    plt.plot(x_dense, y_newton_fin_dense, label="Newton Method (Finite)", color='green', linestyle='-.', linewidth=2)
    plt.plot(x_dense, y_lagr_dense, label="Lagrange Method", color='blue', linestyle=':', linewidth=2)

    plt.plot(x, y, 'o', label="Interpolation Nodes", color='black', markersize=6)
    plt.axvline(x=x_val, color='gray', linestyle='--', label='Target x')

    plt.legend()
    plt.grid(True, linestyle=':')
    plt.title("Interpolation Methods Comparison")
    plt.tight_layout()
    plt.show()

def check_duplicate_x(x):
    unique, counts = np.unique(x, return_counts=True)
    duplicates = unique[counts > 1]
    if len(duplicates) > 0:
        print("Error: duplicate x values found:", duplicates)
        exit(1)

def main():
    mode = int(input("Select input mode (1 - manual, 2 - from file, 3 - function): "))
    if mode == 1:
        x, y = input_data()
    elif mode == 2:
        filename = input("Enter filename: ")
        x, y = load_data_from_file(filename)
    else:
        x, y = generate_function_data()

    check_duplicate_x(x)
    print_difference_table(x, y)

    x_val = float(input("\nEnter the value of x for interpolation: "))

    y_lagr = lagrange_interpolation(x, y, x_val)
    y_newton_div = newton_divided(x, divided_differences(x, y), x_val)
    y_newton_fin = newton_finite_diff(x, y, x_val)

    print(f"\nInterpolated function values:")
    print(f"Lagrange: {y_lagr:.6f}")
    print(f"Newton (divided differences): {y_newton_div:.6f}")
    print(f"Newton (finite differences): {y_newton_fin:.6f}")

    plot_all_methods(x, y, x_val)

if __name__ == "__main__":
    main()
