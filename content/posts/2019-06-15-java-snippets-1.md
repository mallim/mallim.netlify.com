---
title: "Java Snippets #1"
description: "java snippets for my reference #1"
date: 2019-06-15 15:05:00
author: mallim
tags:
  - java
  - snippet
  - spring-data-jpa
---

## Refactoring with Loops and Collection Pipelines

https://martinfowler.com/articles/refactoring-pipelines.html

```java
  public List<String> twitterHandles(List<Author> authors, String company) {
    return authors.stream()
            .filter(a -> a.getCompany().equals(company))
            .map(a -> a.getTwitterHandle())
            .filter(h -> null != h)
            .collect(toList());
  }
```  

## Spring Data JPA @Query(native=true)

https://twitter.com/mallim/status/1139840256176295938

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
