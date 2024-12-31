- [Pandas: Data Analysis](#pandas-data-analysis)
  - [Key Features of Pandas](#key-features-of-pandas)
- [Creating a Series, DataFrame](#creating-a-series-dataframe)
  - [1. **Creating a Series**](#1-creating-a-series)
  - [2. **Creating a DataFrame**](#2-creating-a-dataframe)
- [Reading Data from a CSV File](#reading-data-from-a-csv-file)
- [Saving Data to a CSV File](#saving-data-to-a-csv-file)
- [DataFrame Operations](#dataframe-operations)
  - [Inspecting The Data](#inspecting-the-data)
  - [Selecting The Data](#selecting-the-data)
    - [1. Selecting Columns](#1-selecting-columns)
    - [2. Selecting Rows by Index](#2-selecting-rows-by-index)
    - [3. Selecting Data Based on Conditions](#3-selecting-data-based-on-conditions)
  - [Handling The Missing Data](#handling-the-missing-data)
  - [Merging and Joining Data](#merging-and-joining-data)
    - [1. Merging DataFrames](#1-merging-dataframes)
    - [2. Concatenating DataFrames](#2-concatenating-dataframes)
  - [Grouping Data](#grouping-data)

## Pandas: Data Analysis

[Pandas](https://pandas.pydata.org/) is a powerful Python library used for data manipulation and analysis. It provides data structures like DataFrames and Series that make it easy to work with structured data. Pandas is commonly used for data cleaning, transformation, and analysis tasks, and it is an essential tool in Data Science and Machine Learning workflows.

> To install Pandas, use pip: `pip install pandas`

### Key Features of Pandas

- **DataFrame**: A 2D labeled data structure similar to a table in a database, an Excel spreadsheet, or a dictionary of Series objects.
- **Series**: A 1D labeled array capable of holding any data type (integers, strings, floats, etc.).
- **Handling missing data**: Pandas offers methods to handle missing or null data.
- **Data alignment and merging**: Easily merge and join data from multiple sources.
- **Data aggregation**: Group data and perform aggregation operations like sum, mean, count, etc.
- **Time Series Support**: Pandas has built-in functionality to work with time-based data.

## Creating a Series, DataFrame

In Pandas, Series and DataFrames are the core data structures for storing and manipulating data.

### 1. **Creating a Series**

A **Series** is a one-dimensional labeled array that can hold any data type (integers, strings, floats, etc.).

```python
import pandas as pd

# Create a Series from a list
data = [10, 20, 30, 40, 50]
series = pd.Series(data)

print(series)

# output

# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# Create a Series from a dictionary
data_dict = {'a': 10, 'b': 20, 'c': 30, 'd': 40}
series_from_dict = pd.Series(data_dict)

print(series_from_dict)

# Output

# a    10
# b    20
# c    30
# d    40
# dtype: int64

```

### 2. **Creating a DataFrame**

A DataFrame is a two-dimensional labeled data structure, similar to a table in a database or a spreadsheet. It can store different types of data (integers, floats, strings, etc.) in columns.

```python

# Create a DataFrame from a dictionary of lists
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['New York', 'Los Angeles', 'Chicago']}

df = pd.DataFrame(data)

print(df)

# Output

#      Name  Age         City
# 0    Alice   25     New York
# 1      Bob   30  Los Angeles
# 2  Charlie   35      Chicago


# Create a DataFrame from a list of dictionaries
data_list = [{'Name': 'Alice', 'Age': 25, 'City': 'New York'},
             {'Name': 'Bob', 'Age': 30, 'City': 'Los Angeles'},
             {'Name': 'Charlie', 'Age': 35, 'City': 'Chicago'}]

df_from_list = pd.DataFrame(data_list)

print(df_from_list)

# Output

#      Name  Age         City
# 0    Alice   25     New York
# 1      Bob   30  Los Angeles
# 2  Charlie   35      Chicago


```

## Reading Data from a CSV File

```python
# Read the CSV file into a DataFrame
# If you have downloaded the data and it is in the same folder as your notebook,
df_read = pd.read_csv('output.csv')

# If you are directly importing it from the internet.

df_read = pd.read_csv("https://raw.githubusercontent.com/mrdbourke/zero-to-mastery-ml/master/data/heart-disease.csv")


print(df_read)
```

## Saving Data to a CSV File

```python
# Save the DataFrame to a CSV file
df.to_csv('output.csv', index=False)
```

- The `index=False` argument is used to avoid writing row numbers (`index`) to the CSV file.
- If you want to include the `index` in the CSV file, omit this argument.

## DataFrame Operations

### Inspecting The Data

- **Head and Tail:** View the first or last few rows of the DataFrame.
  ```python
  df.head()  # Displays the first 5 rows
  df.tail()  # Displays the last 5 rows
  ```
- **Shape:** Get the number of rows and columns.
  ```python
  df.shape
  ```
- **Info:** Get a summary of the DataFrame, including column data types.
  ```python
  df.info()
  ```
- **Describe:** Get descriptive statistics of numerical columns.
  ```python
  df.describe()
  ```
- **Data Types (dtype):** Check the data types of each column in the DataFrame.
  ```python
  df.dtypes
  ```
- **columns:** Give the name of columns.
  ```python
  df.columns
  ```
- **Value Counts:** For categorical data, you can check the number of unique values in each column.
  ```python
  df['column_name'].value_counts()
  ```
- **Unique Values:** Get the unique values in a column, helpful for understanding categorical data.
  ```python
  df['column_name'].unique()
  ```

### Selecting The Data

#### 1. Selecting Columns

```python
df['Name']  # Selects the 'Name' column
```

#### 2. Selecting Rows by Index

```python

df.iloc[0]  # Selects the first row
df.iloc[0:2]  # Selects the first two rows
```

#### 3. Selecting Data Based on Conditions

```python
df[df['Age'] > 30]  # Select rows where Age is greater than 30
```

### Handling The Missing Data

```python

df.isnull()  # Detects missing values
df.notnull()  # Detects non-null values
df.dropna()  # Drops rows with missing values
df.fillna(0)  # Fills missing values with 0


```

### Merging and Joining Data

#### 1. Merging DataFrames

```python
df1 = pd.DataFrame({'Key': ['A', 'B', 'C'], 'Value': [1, 2, 3]})
df2 = pd.DataFrame({'Key': ['A', 'B', 'D'], 'Value': [4, 5, 6]})

merged_df = pd.merge(df1, df2, on='Key', how='inner')  # Inner join
```

#### 2. Concatenating DataFrames

```python
df1 = pd.DataFrame({'Name': ['Alice', 'Bob'], 'Age': [25, 30]})
df2 = pd.DataFrame({'Name': ['Charlie'], 'Age': [35]})

concat_df = pd.concat([df1, df2], ignore_index=True)
```

### Grouping Data

You can group data based on one or more columns and apply aggregation functions.

```python
df = pd.DataFrame({'Category': ['A', 'A', 'B', 'B', 'C'],
                   'Value': [10, 20, 30, 40, 50]})

grouped = df.groupby('Category').sum()  # Groups by 'Category' and sums 'Value'

```
