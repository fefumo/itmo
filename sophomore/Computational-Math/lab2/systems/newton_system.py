import numpy as np

def newton_system(F, J, x0, eps=1e-6, max_iter=100):
    x = np.array(x0, dtype=float)
    iter_count = 0
    errors = []

    while iter_count < max_iter:
        Fx = np.array(F(x))
        Jx = np.array(J(x))

        norm_F = np.linalg.norm(Fx)
        if norm_F < eps:
            break

        try:
            dx = np.linalg.solve(Jx, -Fx)
        except np.linalg.LinAlgError:
            print("Якобиан необратим.")
            break

        x_new = x + dx
        error = np.linalg.norm(dx)
        errors.append(error)

        if error < eps:
            x = x_new
            break

        x = x_new
        iter_count += 1

    return {
        "x": x.tolist(),
        "iterations": iter_count,
        "errors": errors,
        "residual": np.linalg.norm(F(x))
    }