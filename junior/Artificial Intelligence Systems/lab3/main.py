import pandas as pd
import numpy as np
from pandas.core.common import count_not_none
from sklearn.model_selection import train_test_split

df = pd.read_csv("./Student_Performance.csv")


X = df.drop(columns="Performance Index", axis=1)
y = df["Performance Index"]
print(X.head())
# print("\n ---- \n", y.head())

# target feature is performance index

print("\n-------------------------\n")
# print(y)
n = 10000
avg_value = sum(y)
standard_deviation = np.std(y)
variance = np.var(y)
print(
    f"\
amount: {n}\n\
avg_value: {avg_value}\n\
standard_deviation: {standard_deviation}\n\
variance: {variance}"
)

RANDOM_STATE = 52

# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, random_state=RANDOM_STATE
# )
