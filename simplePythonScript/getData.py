import pandas as pd

df = pd.read_csv('prices.csv')

for index, row in df.iterrows():
	row['price'] = row['price'].strip('$')

df.to_csv('new_prices.csv')
