import numpy as np

def f1(x): return x ** 2
def f2(x): return np.sin(x)
def f3(x): return np.exp(-x ** 2)
def f4(x): return 1 / (1 + x ** 2)
def f5(x): return np.log(x + 1)
def f6(x): return 4*x**3 - 5*x**2 + 6*x - 7

functions = {
    1: ("x^2", f1),
    2: ("sin(x)", f2),
    3: ("exp(-x^2)", f3),
    4: ("1 / (1 + x^2)", f4),
    5: ("ln(x + 1)", f5),
    6: ("4x^3 - 5x^2 + 6x - 7", f6) # из письменного задания
}

# Методы численного интегрирования
def left_rect(f, a, b, n):
    h = (b - a) / n
    x = np.linspace(a, b - h, n)
    return h * np.sum(f(x))

def right_rect(f, a, b, n):
    h = (b - a) / n
    x = np.linspace(a + h, b, n)
    return h * np.sum(f(x))

def mid_rect(f, a, b, n):
    h = (b - a) / n
    x = np.linspace(a + h/2, b - h/2, n)
    return h * np.sum(f(x))

def trapezoid(f, a, b, n):
    h = (b - a) / n
    x = np.linspace(a, b, n + 1)
    return h * (0.5 * f(x[0]) + np.sum(f(x[1:-1])) + 0.5 * f(x[-1]))

def simpson(f, a, b, n):
    if n % 2:
        n += 1
    h = (b - a) / n
    x = np.linspace(a, b, n + 1)
    return (h / 3) * (f(x[0]) + f(x[-1]) +
                      4 * np.sum(f(x[1:-1:2])) +
                      2 * np.sum(f(x[2:-2:2])))

# Правило Рунге
def runge_rule(I1, I2, k):
    return abs(I1 - I2) / (2 ** k - 1)

# Интегрирование с выводом шагов
def integrate_with_steps(method, f, a, b, eps, p):
    n = 4
    step = 1
    I0 = method(f, a, b, n)
    rows = []

    while True:
        n *= 2
        I1 = method(f, a, b, n)
        diff = abs(I1 - I0)
        rows.append((step, n, I0, I1, diff))
        if diff / (2**p - 1) < eps:
            break
        I0 = I1
        step += 1

    return I1, n, rows

# Ввод пользователя
def main():
    print("Выберите функцию для интегрирования:")
    for k, (name, _) in functions.items():
        print(f"{k}: {name}")
    choice = int(input("Введите номер функции (1-5): "))
    fname, f = functions[choice]

    print("\nВыберите метод численного интегрирования:")
    methods = {
        1: ("Left Rectangles", left_rect, 1),
        2: ("Right Rectangles", right_rect, 1),
        3: ("Mid Rectangles", mid_rect, 2),
        4: ("Trapezoid", trapezoid, 2),
        5: ("Simpson", simpson, 4)
    }
    for k, (name, _, _) in methods.items():
        print(f"{k}: {name}")
    method_choice = int(input("Введите номер метода (1-5): "))
    mname, mfunc, p = methods[method_choice]

    a = float(input("\nВведите нижний предел интегрирования a: "))
    b = float(input("Введите верхний предел интегрирования b: "))
    eps = float(input("Введите требуемую точность ε: "))

    print(f"\nМетод: {mname}")
    print(f"Функция: {fname} на интервале [{a}, {b}], точность ε = {eps}\n")
    print(f"{'Step':<5} {'n':<8} {'I_0':<20} {'I_1':<20} {'|I_1 - I_0|':<20}")
    print("-" * 75)

    result, final_n, table = integrate_with_steps(mfunc, f, a, b, eps, p)
    for step, n, I0, I1, diff in table:
        print(f"{step:<5} {n:<8} {I0:<20.10f} {I1:<20.10f} {diff:<20.10f}")

    print(f"\nПриближённое значение интеграла: {result:.10f} при n = {final_n}")

main()
