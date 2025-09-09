import matplotlib.pyplot as plt
import numpy as np

# Define the membership functions for air temperature
def M_NT(x):
    return np.maximum(0, np.minimum(1, (15 - x) / 15))

def M_CT(x):
    return np.maximum(0, np.minimum((x - 10) / 14, (30 - x) / 6))

def M_VT(x):
    return np.maximum(0, np.minimum((x - 27) / 13, 1))

# Generate x values
x = np.linspace(0, 40, 500)

# Calculate the membership values
nt_values = M_NT(x)
ct_values = M_CT(x)
vt_values = M_VT(x)

# Plot the membership functions
plt.figure(figsize=(10, 6))

plt.plot(x[nt_values > 0], nt_values[nt_values > 0], label='НТ (0-15°C)', color='blue')
plt.plot(x[ct_values > 0], ct_values[ct_values > 0], label='СТ (16-25°C)', color='red')
plt.plot(x[vt_values > 0], vt_values[vt_values > 0], label='ВТ (26-35°C)', color='green')

plt.title('Функция принадлежности для температуры воздуха')
plt.xlabel('Температура воздуха (°C)')
plt.ylabel('M(x)')
plt.legend()
plt.grid(True)
plt.show()