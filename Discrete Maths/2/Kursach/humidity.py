import matplotlib.pyplot as plt
import numpy as np

# Define the membership functions for soil moisture
def M_NV(x):
    return np.maximum(0, np.minimum(1, (30 - x) / 30))

def M_SV(x):
    return np.maximum(0, np.minimum((x - 20) / 20, (60 - x) / 20))

def M_VV(x):
    return np.maximum(0, np.minimum((x - 50) / 20, 1))

# Generate x values
x = np.linspace(0, 100, 500)

# Calculate the membership values
nv_values = M_NV(x)
sv_values = M_SV(x)
vv_values = M_VV(x)

# Plot the membership functions
plt.figure(figsize=(10, 6))

plt.plot(x[nv_values > 0], nv_values[nv_values > 0], label='НВ (0-30%)', color='blue')
plt.plot(x[sv_values > 0], sv_values[sv_values > 0], label='СВ (31-60%)', color='red')
plt.plot(x[vv_values > 0], vv_values[vv_values > 0], label='ВВ (61-100%)', color='green')

plt.title('Функция принадлежности для влажности почвы')
plt.xlabel('Влажность почвы (%)')
plt.ylabel('M(x)')
plt.legend()
plt.grid(True)
plt.show()
