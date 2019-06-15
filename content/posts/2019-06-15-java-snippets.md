---
title: "Java Snippets"
description: "things to jot my memory"
date: 2019-06-15 15:05:00
author: mallim
tags:
  - java
  - snippet
---

## Assert an Exception is Thrown in JUnit 4 and 5

https://twitter.com/baeldung/status/1139487722312257537

```java
@Test
public void whenDerivedExceptionThrown_thenAssertionSucceds() {
    String test = null;
    assertThrows(RuntimeException.class, () -> {
        test.length();
    });
}
```
