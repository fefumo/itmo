import numpy as np
import matplotlib.pyplot as plt

# Исходная выборка
sample = [
    1.07, 1.59, -1.49, -0.10, 0.11, 1.18, 0.35, -0.73, 1.07, 0.31,
    -0.26, -1.20, -0.35, 0.73, 1.01, -0.12, 0.28, -1.32, -1.10, -0.26
]

# Вариационный ряд
sorted_sample = sorted(sample)

# Статистический ряд
frequency_dict = {x: sorted_sample.count(x) for x in sorted(set(sorted_sample))}

# Экстремальные значения
min_value = sorted_sample[0]
max_value = sorted_sample[-1]

# Размах
range_value = max_value - min_value

# Выборочное среднее
mean_value = sum(sample) / len(sample)

# Выборочная дисперсия
sample_variance = sum((x - mean_value) ** 2 for x in sample) / len(sample)

# Исправленная дисперсия
corrected_variance = sum((x - mean_value) ** 2 for x in sample) / (len(sample) - 1)

# Выборочное СКО
sample_std_dev = sample_variance ** 0.5

# Исправленное СКО
corrected_std_dev = corrected_variance ** 0.5

# Функция распределения в аналитическом виде
def empirical_distribution(sample, x):
    return sum(1 for value in sample if value <= x) / len(sample)

# Создаем точки для графика эмпирической функции
x_values = np.linspace(min_value, max_value, 100)
y_values = [empirical_distribution(sample, x) for x in x_values]

# Расчет количества интервалов и длины интервала по формуле Стерджесса
num_intervals = int(1 + 3.322 * np.log10(len(sample)))
interval_length = range_value / num_intervals

# Формирование группированного ряда
bins = [min_value + i * interval_length for i in range(num_intervals + 1)]
frequencies = [0] * num_intervals

for value in sample:
    for i in range(num_intervals):
        if bins[i] <= value < bins[i + 1]:
            frequencies[i] += 1
            break

# Приведение частот
relative_frequencies = [freq / len(sample) for freq in frequencies]

# Центры интервалов для полигона
interval_centers = [(bins[i] + bins[i + 1]) / 2 for i in range(num_intervals)]

# Вывод результатов
print("Вариационный ряд:", sorted_sample)
print("Статистический ряд:", frequency_dict)
print("Минимальное значение:", min_value)
print("Максимальное значение:", max_value)
print("Размах:", range_value)
print("Выборочное среднее:", mean_value)
print("Выборочная дисперсия:", sample_variance)
print("Исправленная дисперсия:", corrected_variance)
print("Выборочное СКО:", sample_std_dev)
print("Исправленное СКО:", corrected_std_dev)
print("Функция распределения: F(x) = P(X ≤ x)")

# Построение графиков
plt.figure(figsize=(18, 6))

# Эмпирическая функция распределения
plt.subplot(1, 3, 1)
plt.plot(x_values, y_values, label="Эмпирическая функция", color="blue")
plt.title("Эмпирическая функция распределения")
plt.xlabel("x")
plt.ylabel("F(x)")
plt.grid(True)
plt.legend()

# Гистограмма и полигон приведенных частот
plt.subplot(1, 3, 2)
plt.hist(sample, bins=bins, alpha=0.6, color="gray", label="Гистограмма", density=True)
plt.plot(interval_centers, relative_frequencies, marker="o", color="red", label="Полигон частот")
plt.title("Гистограмма и полигон приведенных частот")
plt.xlabel("Интервалы")
plt.ylabel("Частота")
plt.grid(True)
plt.legend()

# Полигон частот отдельно
plt.subplot(1, 3, 3)
plt.plot(interval_centers, relative_frequencies, marker="o", color="red", label="Полигон частот")
plt.fill_between(interval_centers, relative_frequencies, alpha=0.2, color="red")
plt.title("Полигон частот")
plt.xlabel("Интервалы")
plt.ylabel("Частота")
plt.grid(True)
plt.legend()

# Показать графики
plt.tight_layout()
plt.show()
