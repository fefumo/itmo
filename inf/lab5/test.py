import pandas as pd
import matplotlib.pyplot as plt

import seaborn as sns
#получение 4-х датафреймов
#date = ['17/09/18','15/10/18','15/11/18','17/12/18']
df = pd.read_csv('data.csv')
september = (df.loc[df['<DATE>'] == ('17/09/18'), '<DATE>':'<CLOSE>'])
october = (df.loc[df['<DATE>'] == ('15/10/18'), '<DATE>':'<CLOSE>'])
november = (df.loc[df['<DATE>'] == ('15/11/18'), '<DATE>':'<CLOSE>'])
december = (df.loc[df['<DATE>'] == ('17/12/18'), '<DATE>':'<CLOSE>'])

dfs = [september,october,november,december]
for month in dfs:
    month.drop('<TIME>', axis=1)
    month.set_index('<DATE>', inplace=True)
all_data = pd.concat(dfs)

ax = all_data.boxplot( by = '<DATE>', figsize=(12,6))


#print(all_data)
plt.show()

toPath = 'C:\\coding\\itmo\\inf\\lab5\\df.csv'
all_data.to_csv(toPath)
