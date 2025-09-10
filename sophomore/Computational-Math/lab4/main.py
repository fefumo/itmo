from approximation_methods import *
from graphics_drawer import *
from table_printer import *

# Coefficients map for all methods
approximation_results = {"linear": [None, None],
                         "quadratic": [None] * 3,
                         "cubic": [None] * 4,
                         "exp": [None] * 4,
                         "log": [None] * 4,
                         "pow": [None] * 4
                         }

def validate_input(n, x_values, y_values):
    if n < 8 or n > 12:
        raise ValueError
    X = [float(x) for x in x_values.split()]
    if len(X) != n:
        raise ValueError
    Y = [float(y) for y in y_values.split()]
    if len(Y) != n:
        raise ValueError
    return n, X, Y

def input_data():
    while True:
        try:
            choice = input("Enter 'f' to read from a file or any other key to enter manually:")
            if choice.strip() == "f":
                with open(input("Enter filename:")) as f:
                    n = int(f.readline())
                    x_values = f.readline().replace(",", ".")
                    y_values = f.readline().replace(",", ".")
            else:
                n = int(input("Enter the number of function nodes:"))
                x_values = input("Enter x_i values separated by spaces:")
                y_values = input("Enter y_i values separated by spaces:")
            n, X, Y = validate_input(n, x_values, y_values)
            return n, X, Y

        except ValueError:
            print("Error: invalid input, please try again!")
            continue

def display_results():
    choice = input("Enter 'f' to save results to a file or any other key to display in console:")
    if choice.strip() == "f":
        with open("output.txt", mode="w") as f:
            print("LINEAR REGRESSION METHOD:".center(90), file=f)
            print_table(n, X, Y, lambda x: approximation_results["linear"][0] * x + approximation_results["linear"][1], f)

            print("QUADRATIC REGRESSION METHOD:".center(90), file=f)
            print_table(n, X, Y,
                        lambda x: approximation_results["quadratic"][0] * x ** 2 + approximation_results["quadratic"][1] * x + approximation_results["quadratic"][2], f)

            print("CUBIC REGRESSION METHOD:".center(90), file=f)
            print_table(n, X, Y, lambda x:
            approximation_results["cubic"][0] * x ** 3 + approximation_results["cubic"][1] * x ** 2 + approximation_results["cubic"][2] * x + approximation_results["cubic"][3], f)

            if all(x is not None for x in approximation_results["exp"]):
                print("EXPONENTIAL REGRESSION METHOD".center(90), file=f)
                print_table(len(approximation_results["exp"][2]), approximation_results["exp"][2], approximation_results["exp"][3],
                            lambda x: approximation_results["exp"][0] * math.exp(approximation_results["exp"][1] * x), f)

            if all(x is not None for x in approximation_results["log"]):
                print("LOGARITHMIC REGRESSION METHOD".center(90), file=f)
                print_table(len(approximation_results["log"][2]), approximation_results["log"][2], approximation_results["log"][3],
                            lambda x: approximation_results["log"][0] * math.log(x) + approximation_results["log"][1], f)

            if all(x is not None for x in approximation_results["pow"]):
                print("POWER REGRESSION METHOD".center(90), file=f)
                print_table(len(approximation_results["pow"][2]), approximation_results["pow"][2], approximation_results["pow"][3],
                            lambda x: approximation_results["log"][0] * x ** approximation_results["log"][1], f)

            return

    print("LINEAR REGRESSION METHOD:".center(90))
    print_table(n, X, Y, lambda x: approximation_results["linear"][0] * x + approximation_results["linear"][1], None)

    print("QUADRATIC REGRESSION METHOD:".center(90))
    print_table(n, X, Y,
                lambda x: approximation_results["quadratic"][0] * x ** 2 + approximation_results["quadratic"][1] * x + approximation_results["quadratic"][2],
                None)
    print("CUBIC REGRESSION METHOD:".center(90))
    print_table(n, X, Y, lambda x:
    approximation_results["cubic"][0] * x ** 3 + approximation_results["cubic"][1] * x ** 2 + approximation_results["cubic"][2] * x + approximation_results["cubic"][3], None)

    if all(x is not None for x in approximation_results["exp"]):
        print("EXPONENTIAL REGRESSION METHOD".center(90))
        print_table(len(approximation_results["exp"][2]), approximation_results["exp"][2], approximation_results["exp"][3],
                    lambda x: approximation_results["exp"][0] * math.exp(approximation_results["exp"][1] * x),
                    None)

    if all(x is not None for x in approximation_results["log"]):
        print("LOGARITHMIC REGRESSION METHOD".center(90))
        print_table(len(approximation_results["log"][2]), approximation_results["log"][2], approximation_results["log"][3],
                    lambda x: approximation_results["log"][0] * math.log(x) + approximation_results["log"][1], None)

    if all(x is not None for x in approximation_results["pow"]):
        print("POWER REGRESSION METHOD".center(90))
        print_table(len(approximation_results["pow"][2]), approximation_results["pow"][2], approximation_results["pow"][3],
                    lambda x: approximation_results["log"][0] * x ** approximation_results["log"][1], None)


if __name__ == "__main__":
    n, X, Y = input_data()

    a, b = linear_regression(n, X, Y)
    approximation_results["linear"] = a, b
    draw_linear_approximation(X, Y, a, b)

    a, b, c = quadratic_regression(n, X, Y)
    approximation_results["quadratic"] = float(a), float(b), float(c)
    draw_quadratic_approximation(X, Y, a, b, c)

    a, b, c, d = cubic_regression(n, X, Y)
    approximation_results["cubic"] = float(a), float(b), float(c), float(d)
    draw_cubic_approximation(X, Y, a, b, c, d)

    try:
        a, b, accepted_X, accepted_Y = exponential_regression(n, X, Y)
        approximation_results["exp"] = float(a), float(b), accepted_X, accepted_Y
        draw_exponential_approximation(X, Y, accepted_X, a, b)
    except TypeError:
        print(
            "exponential approximation error: domain of definition for logarithm x>0 -> not enough points with positive function values for approximation using this method")

    try:
        a, b, accepted_X, accepted_Y = logarithmic_regression(n, X, Y)
        approximation_results["log"] = float(a), float(b), accepted_X, accepted_Y
        draw_logarithmic_approximation(X, Y, accepted_X, a, b)

    except TypeError:
        print(
            "logarithmic approximation error: domain of definition for logarithm x>0 -> not enough points with positive function values for approximation using this method")

    try:
        a, b, accepted_X, accepted_Y = power_regression(n, X, Y)
        approximation_results["pow"] = float(a), float(b), accepted_X, accepted_Y
        draw_power_approximation(X, Y, accepted_X, a, b)

    except TypeError:
        print(
            "power approximation error: domain of definition for logarithm x>0 -> not enough points with positive function values for approximation using this method")

    display_results()
    draw_all_approximations(X, Y, approximation_results)
