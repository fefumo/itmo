import matplotlib.pyplot as plt
import numpy as np

# Define the membership functions for irrigation time
def M_KP(x):
    return np.maximum(0, np.minimum(1, (12 - x) / 12))

def M_NP(x):
    return np.maximum(0, np.minimum((x - 10) / 12, (22 - x) / 12))

def M_SP(x):
    return np.maximum(0, np.minimum((x - 20) / 12, (32 - x) / 12))

def M_VP(x):
    return np.maximum(0, np.minimum((x - 30) / 12, (42 - x) / 12))

def M_OVP(x):
    return np.maximum(0, np.minimum((x - 40) / 10, 1))

# Generate x values
x = np.linspace(0, 50, 500)

# Calculate the membership values
kp_values = M_KP(x)
np_values = M_NP(x)
sp_values = M_SP(x)
vp_values = M_VP(x)
ovp_values = M_OVP(x)

# Plot the membership functions
plt.figure(figsize=(10, 6))

plt.plot(x[kp_values > 0], kp_values[kp_values > 0], label='КВП (0-12 мин)', color='blue')
plt.plot(x[np_values > 0], np_values[np_values > 0], label='НВП (10-22 мин)', color='red')
plt.plot(x[sp_values > 0], sp_values[sp_values > 0], label='СВП (20-32 мин)', color='green')
plt.plot(x[vp_values > 0], vp_values[vp_values > 0], label='ДВП (30-42 мин)', color='orange')
plt.plot(x[ovp_values > 0], ovp_values[ovp_values > 0], label='ОДВП (40-50 мин)', color='purple')

plt.title('Функция принадлежности для времени полива')
plt.xlabel('Время полива (минуты)')
plt.ylabel('M(x)')
plt.legend()
plt.grid(True)
plt.show()
