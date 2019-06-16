---
title: "Mybatis Single Column Mystic"
date: 2014-02-24 19:15:00
author: mallim
tags:
  - mybatis
---

## Scenario Encountered

In the associated java interface

```java
public boolean querySomething( @("keyField") String value )
```

In the mybatis xml

```xml
<select id="querySomething" parameterType="string" resultType="boolean">
select case
    when id != null then 'N'
    else 'Y'
    end IS_AFIELD
from aTable
where id = {{keyField}}
</select>
```

Upon selecting a non-existing id, the following error occurs:

```
attempted to return null from a method with a primitive return type
```

## Solution

In Java

```java
public Boolean querySomething( @("keyField") String value )
```

to ensure you are able to get the Null back and handle it accordingly
