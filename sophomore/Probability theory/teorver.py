from math import ceil, log2
import numpy as np
import matplotlib.pyplot as plt
from collections import Counter

# Исходная выборка
sample = [
    1.07, 1.59, -1.49, -0.10, 0.11, 1.18, 0.35, -0.73, 1.07, 0.31,
    -0.26, -1.20, -0.35, 0.73, 1.01, -0.12, 0.28, -1.32, -1.10, -0.26
]

# Вариационный ряд
sorted_sample = sorted(sample)

# Статистический ряд
frequency_dict = Counter(sorted_sample) # создем пары ключ - значение (ключ - число из выборки, значение - его частотность в выборке)
elements = list(frequency_dict.keys())
frequencies = list(frequency_dict.values())

# Минимальное и максимальное значения
min_value = min(sorted_sample)
max_value = max(sorted_sample)

# Размах
range_value = max_value - min_value

# Математическое ожидание
mean_value = sum(sample) / len(sample)

# Выборочная дисперсия
sample_variance = sum((x - mean_value) ** 2 for x in sample) / len(sample) # сумма всех разностей "значение из выборки минус мат. ожидание", делённая на кол-во элементов

# Исправленная дисперсия
corrected_variance = sum((x - mean_value) ** 2 for x in sample) / (len(sample) - 1) # то же самое, только делим на кол-во элементов - 1

# Выборочное СКО
sample_std_dev = sample_variance ** 0.5 # корень дисперсии

# Исправленное СКО
corrected_std_dev = corrected_variance ** 0.5 # корень исправленной дисперсии 

# Медиана
n = len(sorted_sample)
median = (sorted_sample[n // 2] if n % 2 != 0 else
          (sorted_sample[n // 2 - 1] + sorted_sample[n // 2]) / 2)

# Мода
def calc_mode(data):
    freq = {}
    for num in data:
        freq[num] = freq.get(num, 0) + 1
        max_freq = max(freq.values()) 
        modes = [num for num, count in freq.items() if count == max_freq]
        if len(modes) == 1:
            return modes[0] 
        else:
            return None 
        
mode  = calc_mode(sample)

# Уникальные значения выборки
unique_values = sorted(set(sorted_sample))

# Вычисление эмпирической функции распределения
empirical_intervals = []
for i, value in enumerate(unique_values):
    # Для каждого уникального значения x вычисляем F(x)
    prob = (i + 1) / len(sorted_sample)  # Доля элементов <= x
    if i == 0:
        # Для первого значения x: интервал (-∞, x]
        empirical_intervals.append(f"F(x) = 0, x ≤ {value:.2f}")
    else:
        # Для остальных значений: интервал предыдущего x до текущего
        prev_value = unique_values[i - 1]
        empirical_intervals.append(f"F(x) = {prob:.3f}, {prev_value:.2f} < x ≤ {value:.2f}")

# Последний интервал для x >= максимального значения
empirical_intervals.append(f"F(x) = 1, x > {unique_values[-1]:.2f}")

# Количество интервалов и длина интервала (формула Стерджесса)
num_intervals = ceil(1 + log2(n))
interval_length = round(range_value / num_intervals, 2)

# Интервальное распределение частот
interval_begin = round((min_value - interval_length/2), 2)
intervals = [(round(interval_begin + i * interval_length, 2),
              round(interval_begin + (i + 1) * interval_length, 2))
              for i in range(num_intervals)]

frequencies_intervals = [sum(1 for x in sample if interval[0] <= x <interval[1])
                  for interval in intervals]

bins = [min_value + i * interval_length for i in range(num_intervals + 1)]

# Приведение частот
relative_frequencies = [freq / len(sample) for freq in frequencies_intervals]

# Центры интервалов
interval_centers = [(bins[i] + bins[i + 1]) / 2 for i in range(num_intervals)]

# Вывод результатов
print("1. Вариационный ряд:", sorted_sample)
print("2. Статистический ряд:")
print("   Элементы:", elements)
print("   Частоты:", frequencies)
print(f"3. Минимальное значение: {min_value}, Максимальное значение: {max_value}, Размах: {range_value}")
print(f"4. Выборочное среднее: {mean_value:.4f}")
print(f"5. Выборочная дисперсия: {sample_variance:.4f}")
print(f"6. Исправленная выборочная дисперсия: {corrected_variance:.4f}")
print(f"7. Среднеквадратическое отклонение: {sample_std_dev:.4f}")
print(f"8. Исправленное среднеквадратическое отклонение: {corrected_std_dev:.4f}")
print(f"   Медиана: {median}")
print(f"   Мода: {mode}")
print("9. Эмпирическая функция распределения:")
for interval in empirical_intervals:
    print(interval)

print(f"10. Количество интервалов: {num_intervals}, Длина интервала: {interval_length:.4f}, x_нач: {bins[0]:.4f}")
print("11. Интервальное распределение частот:")
print(f"   [{bins[0] - (range_value) / 2:.4f}, {bins[1]:.4f}): Частота - {frequencies_intervals[0]}, Частотность - {relative_frequencies[0]:.2f}")

for i in range(1, num_intervals):
    print(f"   [{bins[i]:.4f}, {bins[i + 1]:.4f}): Частота - {frequencies_intervals[i]}, Частотность - {relative_frequencies[i]:.2f}")

# Построение графиков
plt.figure(figsize=(18, 6))

# Эмпирическая функция распределения

def empirical_distribution(x):
    return sum(1 for value in sorted_sample if value <= x) / len(sorted_sample)

empirical_values = [(sorted_sample[i], empirical_distribution(sorted_sample[i])) for i in range(len(sorted_sample))]

plt.subplot(1, 3, 1)
x_values = np.linspace(min_value, max_value, 100)
y_values = [empirical_distribution(x) for x in x_values]
plt.plot(x_values, y_values, label="Эмпирическая функция", color="blue")
plt.title("Эмпирическая функция распределения")
plt.xlabel("x")
plt.ylabel("F(x)")
plt.grid(True)
plt.legend()

# Гистограмма и полигон частот
plt.subplot(1, 3, 2)
plt.hist(sample, bins=bins, alpha=0.6, color="gray", label="Гистограмма", density=False)
plt.plot(interval_centers, frequencies_intervals, marker="o", color="red", label="Полигон частот")
plt.title("Гистограмма и полигон частот")
plt.xlabel("Интервалы")
plt.ylabel("Частота")
plt.grid(True)
plt.legend()

# Полигон частот
plt.subplot(1, 3, 3)
plt.plot(interval_centers, frequencies_intervals, marker="o", color="red", label="Полигон частот")
plt.fill_between(interval_centers, frequencies_intervals, alpha=0.2, color="red")
plt.title("Полигон частот")
plt.xlabel("Интервалы")
plt.ylabel("Частота")
plt.grid(True)
plt.legend()

# Показать графики
plt.tight_layout()
plt.show()
