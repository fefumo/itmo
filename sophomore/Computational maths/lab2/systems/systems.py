def system1(x):
    x1, x2 = x
    return [
        x1**2 + x2**2 - 4,
        x1 - x2
    ]

def jacobian1(x):
    x1, x2 = x
    return [
        [2 * x1, 2 * x2],
        [1, -1]
    ]

def system2(x):
    x1, x2 = x
    return [
        x1**2 - x2 - 1,
        x1 + x2**2 - 3
    ]

def jacobian2(x):
    x1, x2 = x
    return [
        [2 * x1, -1],
        [1, 2 * x2]
    ]

def system3(x):
    x1, x2 = x
    return [
        x1**2 + x2**2 - 1,
        x1**3 - x2 + 0.5
    ]

def jacobian3(x):
    x1, x2 = x
    return [
        [2 * x1, 2 * x2],
        [3 * x1**2, -1]
    ]

def get_systems():
    return {
        "1": {
            "desc": "x^2 + y^2 = 4; x = y",
            "func": system1,
            "jacobian": jacobian1,
            "guess": [1.0, 1.0]
        },
        "2": {
            "desc": "x^2 - y = 1; x + y^2 = 3",
            "func": system2,
            "jacobian": jacobian2,
            "guess": [1.0, 1.0]
        },
        "3": {
            "desc": "x^2 + y^2 = 1; x^3 - y = -0.5",
            "func": system3,
            "jacobian": jacobian3,
            "guess": [0.5, 0.5]
        }
    }