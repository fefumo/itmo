def get_user_input():
    source = input("Ввод из файла или с клавиатуры? (file/keyboard): ").strip().lower()
    if source == "file":
        filename = input("Введите имя файла: ").strip()
        with open(filename, encoding="utf-8") as f:
            parts = f.read().split()
            a, b, eps = map(float, parts[:3])
    else:
        a = float(input("Введите левую границу интервала a: "))
        b = float(input("Введите правую границу интервала b: "))
        eps = float(input("Введите точность вычисления eps: "))
    return a, b, eps

def get_output_choice():
    return input("Вывести результат на экран или в файл? (screen/file): ").strip().lower()

def get_function_choice(functions):
    print("Доступные функции:")
    for key, (desc, _) in functions.items():
        print(f"{key}: {desc}")
    choice = input("Выберите номер функции: ").strip()
    return functions[choice][1]