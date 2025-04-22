def verify_interval(func, a, b):
    try:
        return func(a) * func(b) < 0
    except:
        return False

def find_initial_guess(func, a, b):
    return a if abs(func(a)) < abs(func(b)) else b