import numpy as np

def chord_method(f, a, b, eps, max_iter=10000):
    iter_count = 0
    x = a - (b - a) * f(a) / (f(b) - f(a))
    
    while abs(b - a) > eps and iter_count < max_iter:
        if f(a) * f(x) < 0:
            b = x
        else:
            a = x

        x =  a - (b - a) * f(a) / (f(b) - f(a))
        iter_count += 1

    x_root = x
    return {
        "method": "Метод хорд",
        "a": a,
        "b": b,
        "epsilon":eps,
        "root": x_root,
        "f(root)": f(x_root),
        "iterations": iter_count
    }