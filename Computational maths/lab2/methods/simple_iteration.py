import numpy as np

def numerical_derivative(f, x, h=1e-6):
    return (f(x + h) - f(x - h)) / (2 * h)

def simple_iteration_method(f, a, b, eps, max_iter=1000):
    dx = 1e-6
    steps = 100

    # Приближённая производная на концах интервала
    df_left = numerical_derivative(f, a, dx)
    df_right = numerical_derivative(f, b, dx)
    max_df = max(abs(df_left), abs(df_right))

    if max_df == 0:
        raise ValueError("Производная функции равна нулю на концах интервала — метод неприменим.")

    # Выбор lambda с учетом знака производной
    lbd = 1.0 / max_df
    if df_left > 0:
        lbd = -lbd

    # Фи функция
    phi = lambda x: x + lbd * f(x)

    # Проверка условия сходимости
    for x in np.linspace(a, b, steps):
        dphi = abs(numerical_derivative(phi, x, dx))
        if dphi >= 1:
            print(f"Не выполнено условие сходимости |phi'(x)| < 1 при x = {x:.5f} (|phi'| = {dphi:.4f})")
            break

    # Начальное приближение
    x_prev = a if abs(f(a)) < abs(f(b)) else b
    x_curr = phi(x_prev)
    iteration = 1

    while abs(x_curr - x_prev) > eps and abs(f(x_curr)) > eps and iteration < max_iter:
        x_prev = x_curr
        x_curr = phi(x_prev)
        iteration += 1

    return {
        "method": "Метод простой итерации",
        "root": x_curr,
        "f(root)": f(x_curr),
        "iterations": iteration
    }
