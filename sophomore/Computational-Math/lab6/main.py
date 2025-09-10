import numpy as np
import matplotlib.pyplot as plt
from math import sin, cos, exp

class ODESolver:
    def __init__(self, f, y_exact=None):
        self.f = f
        self.y_exact = y_exact

    def euler(self, x0, y0, h, xn):
        x_vals = [x0]
        y_vals = [y0]
        x, y = x0, y0
        while x < xn:
            y += h * self.f(x, y)
            x += h
            x_vals.append(x)
            y_vals.append(y)
        return np.array(x_vals), np.array(y_vals)

    def improved_euler(self, x0, y0, h, xn):
        x_vals = [x0]
        y_vals = [y0]
        x, y = x0, y0
        while x < xn:
            k1 = self.f(x, y)
            k2 = self.f(x + h, y + h * k1)
            y += h / 2 * (k1 + k2)
            x += h
            x_vals.append(x)
            y_vals.append(y)
        return np.array(x_vals), np.array(y_vals)

    def runge_rule_generic(self, method, x0, y0, h, xn, p, eps=0.1):
        x1, y1 = method(x0, y0, h, xn)
        x2, y2 = method(x0, y0, h / 2, xn)
        y2_interp = y2[::2]
        min_len = min(len(y1), len(y2_interp))
        y1 = y1[:min_len]
        y2_interp = y2_interp[:min_len]
        x1 = x1[:min_len]
        eps_arr = np.abs(y1 - y2_interp) / (2**p - 1)
        return eps_arr, y1, x1

    def milne(self, x0, y0, h, xn):
        x_vals, y_vals = self.improved_euler(x0, y0, h, x0 + 3 * h)  # 4 точки
        f_vals = [self.f(x, y) for x, y in zip(x_vals, y_vals)]

        x = x_vals[-1]
        while x + h <= xn:
            y_pred = y_vals[-4] + (4 * h / 3) * (2 * f_vals[-3] - f_vals[-2] + 2 * f_vals[-1])
            f_pred = self.f(x + h, y_pred)
            y_corr = y_vals[-2] + (h / 3) * (f_vals[-2] + 4 * f_vals[-1] + f_pred)
            x += h
            x_vals = np.append(x_vals, x)
            y_vals = np.append(y_vals, y_corr)
            f_vals.append(self.f(x, y_corr))

        return x_vals, y_vals

# --- Уравнения ---
def equation1(x, y): return x + y
def equation2(x, y): return y - x**2 + 1
def equation3(x, y): return sin(x) - y

print("Выберите уравнение y' = f(x, y):")
print("1. y' = x + y")
print("2. y' = y - x^2 + 1")
print("3. y' = sin(x) - y")
while True:
    try:
        choice = int(input("Ваш выбор (1-3): "))
        if choice in [1, 2, 3]: break
    except ValueError: continue

x0 = float(input("Введите x₀: "))
y0 = float(input("Введите y₀: "))
xn = float(input("Введите xₙ: "))
h = float(input("Введите шаг h: "))

# --- Точные решения ---
def exact1(x): 
    C = (y0 + x0 + 1) / exp(x0)
    return C * np.exp(x) - x - 1

def exact2(x):
    return (x + 1)**2 - 0.5 * np.exp(x)

def exact3(x):
    C = (y0 - 0.5 * (sin(x0) - cos(x0))) * exp(x0)
    return 0.5 * (np.sin(x) - np.cos(x)) + C * np.exp(-x)

equations = {1: (equation1, exact1), 2: (equation2, exact2), 3: (equation3, exact3)}
f, y_exact = equations[choice]
solver = ODESolver(f, y_exact)

# --- Решения и ошибки ---
eps_euler, y_euler, x_vals = solver.runge_rule_generic(solver.euler, x0, y0, h, xn, p=1)
eps_improved, y_improved, _ = solver.runge_rule_generic(solver.improved_euler, x0, y0, h, xn, p=2)
x_milne, y_milne = solver.milne(x0, y0, h, xn)

# --- Глобальные ошибки ---
y_true = y_exact(np.array(x_vals))
err_euler = np.max(np.abs(y_true - y_euler))
err_improved = np.max(np.abs(y_true - y_improved))
err_milne = np.max(np.abs(y_exact(x_milne) - y_milne))

print("\n{:>5} {:>12} {:>12} {:>16} {:>16} {:>16}".format("i", "x", "Euler", "Improved", "Milne", "ε (Euler)"))
print("-" * 90)
for i in range(len(x_vals)):
    x = x_vals[i]
    ye = y_euler[i]
    yi = y_improved[i]
    ym = y_milne[i] if i < len(y_milne) else float('nan')
    ee = eps_euler[i] if i < len(eps_euler) else float('nan')
    print("{:>5} {:>12.6f} {:>12.6f} {:>16.6f} {:>16.6f} {:>16.6f}".format(i, x, ye, yi, ym, ee))

print("\nГлобальная погрешность:")
print(f"  Метод Эйлера:              {err_euler:.6f}")
print(f"  Усоверш. Эйлер:            {err_improved:.6f}")
print(f"  Метод Милна:               {err_milne:.6f}")

x_dense = np.linspace(x0, xn, 500)
y_dense = y_exact(x_dense)

plt.plot(x_dense, y_dense, label="Точное решение", color="blue")
plt.plot(x_vals, y_euler, "o-", label="Эйлер", color="orange")
plt.plot(x_vals, y_improved, "s--", label="Усоверш. Эйлер", color="green")
plt.plot(x_milne, y_milne, "d-.", label="Метод Милна", color="red")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Решение ОДУ: Эйлер, улучшенный и Милн")
plt.grid(True)
plt.legend()
plt.show()
