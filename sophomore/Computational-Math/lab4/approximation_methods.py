import math
import numpy as np
from math import exp, log

def calculate_sums_1(n, X, Y):
    sum_X = sum(X)
    sum_Y = sum(Y)
    sum_X2 = sum(map(lambda x: x ** 2, X))
    sum_XY = sum([X[i] * Y[i] for i in range(n)])
    return sum_X, sum_Y, sum_X2, sum_XY


def calculate_sums_2(n, X, Y):
    sum_X3 = sum(map(lambda x: x ** 3, X))
    sum_X2Y = sum([X[i] ** 2 * Y[i] for i in range(n)])
    sum_X4 = sum(map(lambda x: x ** 4, X))
    return sum_X3, sum_X2Y, sum_X4


def calculate_sums_3(n, X, Y):
    sum_X5 = sum(map(lambda x: x ** 5, X))
    sum_X3Y = sum([X[i] ** 3 * Y[i] for i in range(n)])
    sum_X6 = sum(map(lambda x: x ** 6, X))
    return sum_X5, sum_X6, sum_X3Y


def linear_regression(n, X, Y) -> (float, float): # type: ignore
    """
    :return: coefficients a, b for the linear function ax + b
    """
    sum_X, sum_Y, sum_X2, sum_XY = calculate_sums_1(n, X, Y)

    # Solve the linear system using Cramer's rule
    delta = sum_X2 * n - sum_X ** 2
    delta_1 = sum_XY * n - sum_X * sum_Y
    delta_2 = sum_X2 * sum_Y - sum_X * sum_XY

    return delta_1 / delta, delta_2 / delta


def solve_linear_equation_system(A, B):
    A = np.array(A)
    B = np.array(B)
    try:
        solution = np.linalg.solve(A, B)
        return solution
    except np.linalg.LinAlgError:
        return None, None


def quadratic_regression(n, X, Y) -> (float, float, float): # type: ignore
    """
    :return: coefficients a, b, c for the quadratic function ax^2 + bx + c
    """
    sum_X, sum_Y, sum_X2, sum_XY = calculate_sums_1(n, X, Y)
    sum_X3, sum_X2Y, sum_X4 = calculate_sums_2(n, X, Y)
    A = [[n, sum_X, sum_X2],
         [sum_X, sum_X2, sum_X3],
         [sum_X2, sum_X3, sum_X4]]
    B = [sum_Y, sum_XY, sum_X2Y]

    a, b, c = solve_linear_equation_system(A, B)[::-1]

    return a, b, c


def cubic_regression(n, X, Y) -> (float, float, float, float): # type: ignore
    """
    :return: coefficients a, b, c, d for the cubic function ax^3 + bx^2 + cx + d
    """
    sum_X, sum_Y, sum_X2, sum_XY = calculate_sums_1(n, X, Y)
    sum_X3, sum_X2Y, sum_X4 = calculate_sums_2(n, X, Y)
    sum_X5, sum_X6, sum_X3Y = calculate_sums_3(n, X, Y)
    A = [
        [sum_X6, sum_X5, sum_X4, sum_X3],
        [sum_X5, sum_X4, sum_X3, sum_X2],
        [sum_X4, sum_X3, sum_X2, sum_X],
        [sum_X3, sum_X2, sum_X, n]
    ]

    B = [sum_X3Y, sum_X2Y, sum_XY, sum_Y]
    return solve_linear_equation_system(A, B)


def exponential_regression(n, X, Y):
    """
    :return: coefficients a, b for the function ae^bx
    """
    valid_X = []
    valid_Y = []

    for x, y in zip(X, Y):
        if y is not None and y > 0:  # Check for validity
            valid_X.append(x)
            valid_Y.append(y)

    if len(valid_Y) < 2:  # For linear regression, at least 2 points are required
        return None, None, None, None

    try:
        lnY = [math.log(y) for y in valid_Y]
        B, A = linear_regression(len(lnY), valid_X, lnY)
        return math.exp(A), B, valid_X, valid_Y
    except (ValueError, TypeError):
        return None, None, None, None

def logarithmic_regression(n, X, Y):
    valid_X = []
    valid_Y = []

    for x, y in zip(X, Y):
        if x is not None and y is not None and x > 0:  # ln(x) is defined only for x > 0
            valid_X.append(x)
            valid_Y.append(y)

    if len(valid_X) < 2:
        return None, None, None, None

    try:
        lnX = [math.log(x) for x in valid_X]
        a, b = linear_regression(len(lnX), lnX, valid_Y)
        return a, b, valid_X, valid_Y
    except (ValueError, TypeError, ZeroDivisionError):
        return None, None, None, None


def power_regression(n, X, Y):
    valid_X = []
    valid_Y = []

    for x, y in zip(X, Y):
        if x is not None and y is not None and x > 0 and y > 0:
            valid_X.append(x)
            valid_Y.append(y)

    if len(valid_X) < 2:
        return None, None, None, None

    try:
        lnX = [math.log(x) for x in valid_X]
        lnY = [math.log(y) for y in valid_Y]
        b, ln_a = linear_regression(len(lnX), lnX, lnY)
        a = math.exp(ln_a)

        return a, b, valid_X, valid_Y
    except (ValueError, TypeError, ZeroDivisionError):
        return None, None, None, None
