def secant_method(f, a, b, eps, max_iter=10000):
    x0, x1 = a, b
    iter_count = 0

    while abs(x1 - x0) > eps and iter_count < max_iter:
        try:
            x2 = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0))
        except ZeroDivisionError:
            break
        x0, x1 = x1, x2
        iter_count += 1

    return {
        "method": "Метод секущих",
        "root": x1,
        "f(root)": f(x1),
        "iterations": iter_count
    }