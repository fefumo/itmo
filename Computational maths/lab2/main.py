import numpy as np
from functions import get_functions
from input_handler import get_user_input, get_function_choice, get_output_choice
from verification import verify_interval, find_initial_guess
from methods.chord import chord_method
from methods.secant import secant_method
from methods.simple_iteration import simple_iteration_method
from systems.systems import get_systems
from systems.newton_system import newton_system
import matplotlib.pyplot as plt

def plot_scalar_function(func, a, b, root=None):
    x_vals = np.linspace(a, b, 400)
    y_vals = [func(x) for x in x_vals]

    plt.axhline(0, color='gray', linestyle='--')
    plt.plot(x_vals, y_vals, label='f(x)')
    if root is not None:
        plt.scatter(root, func(root), color='red', label='Корень')
    plt.xlabel('x')
    plt.ylabel('f(x)')
    plt.title('График функции')
    plt.legend()
    plt.grid(True)
    plt.show()

def main():
    mode = input("Выберите режим: 'scalar' (одно уравнение) или 'system' (система): ").strip().lower()
    
    if mode == "system":
        systems = get_systems()
        print("Доступные системы:")
        for key, s in systems.items():
            print(f"{key}: {s['desc']}")
        choice = input("Выберите номер системы: ").strip()
        system = systems[choice]
        F, J = system["func"], system["jacobian"]
        default_guess = system["guess"]

        print(f"Рекомендуемое начальное приближение: {default_guess}")
        use_default = input("Использовать рекомендованное? (y/n): ").strip().lower()
        if use_default == "y":
            x0 = default_guess
        else:
            x0 = list(map(float, input("Введите начальные приближения x1 и x2 через пробел: ").split()))

        eps = float(input("Введите точность eps: "))

        result = newton_system(F, J, x0, eps)

        print(f"Решение: x = {result['x']}")
        print(f"Итераций: {result['iterations']}")
        print(f"Вектор невязки (норма): {result['residual']:.3e}")

        for i, e in enumerate(result['errors']):
            print(f"Погрешности на итерации {i+1}: {e}")

        # График
        x_vals = np.linspace(-3, 3, 400)
        y_vals = np.linspace(-3, 3, 400)
        X, Y = np.meshgrid(x_vals, y_vals)

        if choice == "1":
            Z1 = X**2 + Y**2 - 4
            Z2 = X - Y
        elif choice == "2":
            Z1 = X**2 - Y - 1
            Z2 = X + Y**2 - 3
        elif choice == "3":
            Z1 = X**2 + Y**2 - 1
            Z2 = X**3 - Y + 0.5
        else:
            Z1 = Z2 = None

        if Z1 is not None and Z2 is not None:
            plt.contour(X, Y, Z1, [0], colors='blue')
            plt.contour(X, Y, Z2, [0], colors='red')
            plt.scatter(*result['x'], color='green')
            plt.title("Графики системы и найденный корень")
            plt.xlabel("x1")
            plt.ylabel("x2")
            plt.grid(True)
            plt.axis('equal')
            plt.show()

    else:
        functions = get_functions()
        func = get_function_choice(functions)
        method = input("Выберите метод (chord/secant/iteration): ").strip().lower()
        a, b, eps = get_user_input()

        if not verify_interval(func, a, b):
            print("На заданном интервале нет корней или их несколько.")
            return

        x0 = find_initial_guess(func, a, b)

        if method == "chord":
            result = chord_method(func, a, b, eps)
        elif method == "secant":
            result = secant_method(func, a, b, eps)
        elif method == "iteration":
            result = simple_iteration_method(func, a, b, eps)
        else:
            print("Неизвестный метод.")
            return

        output_choice = get_output_choice()
        if output_choice == "screen":
            print("Результат:")
            print(result)
        else:
            with open("result.txt", "w", encoding="utf-8") as f:
                f.write(str(result))
            print("Результат записан в result.txt")

        # Показываем график после вывода
        plot_scalar_function(func, a, b, root=result['root'])

if __name__ == "__main__":
    main()