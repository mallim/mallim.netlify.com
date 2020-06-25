---
title: "Java Tips: Optional - anything better than isPresent?"
excerpt: "Examples for myself, especially when I start writing isPresent..."
date: 2020-06-25 22:37:00
author: mallim
tags:
  - java
  - Optional
---

## orElse() - Constant for orElse

### From

```java
public static final String DEFAULT_STATUS = "Unknown";
...
public String getEmployeeStatus(long id) {
    Optional<String> empStatus = ... ;
    if (empStatus.isPresent()) {
        return empStatus.get();
    } else {
        return DEFAULT_STATUS;
    }
}
```

### To

```java
public String getEmployeeStatus(long id) {
    Optional<String> empStatus = ... ;
    return empStatus.orElse(DEFAULT_STATUS); // Constant for orElse
}
```

## orElseGet() - Function call for orElseGet

```java
System.out.println(Optional.ofNullable(s).orElseGet(() -> {
    System.out.print("za ");
    return "warudo";
}));
```

## orElseThrow()

### From

```java
public Inventory getInventory(User user) {
    Optional inventory = findInventoryByUser(User user)
    if (inventory.isPresent()) {
        return inventory.get();
    } else {
        throw new NotFoundException();
    }
}
```

### To

```java
public Inventory getInventory(User user) {
    return findInventoryByUser(User user)
        .orElseThrow(() -> new NotFoundException());
}
```

also

```java
public Inventory getInventory(User user) {
    return findInventoryByUser(User user)
        .orElseThrow(NotFoundException::new);
}
```

## Stream.findFirst()

```java
Integer idCountry = listContries.stream()               // Stream
    .filter(c -> countryFinal.equals(c.getNoCountry())) // Get one equals to "Spain"
    .findFirst()                                        // Get Optional<Country>
    .map(Country::getCoCountry)                         // If exists, get its code
    .orElse(0);                                         // Or else return an invalid code
```

## References

- [12 recipes for using the Optional class as it’s meant to be used](https://blogs.oracle.com/javamagazine/12-recipes-for-using-the-optional-class-as-its-meant-to-be-used)
- [Code review: Are you using Optional.orElse wrong?](https://medium.com/alphadev-thoughts/are-you-using-optional-orelse-wrong-4f39585a19da)
- [Stackoverflow: How use findAny() and not return null?](https://stackoverflow.com/questions/52058749/how-use-findany-and-not-return-null)
