---
title: "Notes for my lesson on Python for Data Science and Machine Learning Bootcamp"
date: 2018-04-10 19:27:00
author: mallim
tags:
  - paython
---

Here are my notes on my lesson on Python for Data Science and Machine Learning Bootcamp

#### Anaconda and Jupyter

Followed [Getting Started With Jupyter Notebook for Python](https://medium.com/codingthesmartway-com-blog/getting-started-with-jupyter-notebook-for-python-4e7082bd5d46)
to have short tour of Jupyter Notebook

Here is a good short guide - [Save the Environment with Anaconda](https://medium.com/data-science-in-practice/saving-the-environment-with-anaconda-ad68e603d8c5) on
how to create, save, and share portable Python environments for reproducible data science.

And I can continue the course ... Phew...

#### Dictionary

> Or Map in Java

```python
dict = { "key1":"value1", "key2" : 2}
```

#### Function

```python
def square(num):
    """
    This is actually a multi-line comment in python.
    Sweet...
    """
    return num ** 2
```

#### List comprehension

```python
out = [num ** 2 for num in x]
```

is equivalent to

```python
for num in x:
    out.append( num ** 2)
```
