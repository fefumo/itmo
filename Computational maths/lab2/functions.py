import math

def f1(x):
    return x**3 - x - 2

def f2(x):
    return math.cos(x) - x

def f3(x):
    return math.exp(x) - 2

def f4(x):
    return x**2 - 2

def f5(x):
    return math.sin(x) - 0.5

def get_functions():
    return {
        "1": ("x^3 - x - 2", f1),
        "2": ("cos(x) - x", f2),
        "3": ("exp(x) - 2", f3),
        "4": ("x^2 - 2", f4),
        "5": ("sin(x) - 0.5", f5),
    }

def get_function_choice(functions):
    print("Доступные функции:")
    for key, (desc, _) in functions.items():
        print(f"{key}: {desc}")
    choice = input("Выберите номер функции: ").strip()
    return functions[choice][1]