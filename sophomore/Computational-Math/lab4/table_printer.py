import math


def print_table(n, X, Y, phi, output_file):
    print("X".center(10) + "|" + "|".join([str(round(x, 4)).center(12) for x in X]), file=output_file)
    print("-" * (n + 1) * 13, file=output_file)
    print("Y".center(10) + "|" + "|".join([str(round(y, 4)).center(12) for y in Y]), file=output_file)
    print("-" * (n + 1) * 13, file=output_file)

    print("phi(X)".center(10) + "|" + "|".join([str(round(phi(x), 4)).center(12) for x in X]), file=output_file)
    print("-" * (n + 1) * 13, file=output_file)

    e_i = [phi(X[i]) - Y[i] for i in range(n)]
    print("e_i".center(10) + "|" + "|".join([str(round(e, 4)).center(12) for e in e_i]), file=output_file)

    e_i2 = list(map(lambda x: x ** 2, e_i))
    print(f"СРЕДНЕКВАДРАТИЧНОЕ ОТКЛОНЕНИЕ: {round(math.sqrt(sum(e_i2) / n), 4)}", file=output_file)
    print("\n", file=output_file)