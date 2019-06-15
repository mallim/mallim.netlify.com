---
title: "SQL and Java 8 Stream Equivalent"
date: 2019-06-15 19:00:00
author: mallim
tags:
  - java
  - sql
---

[Common SQL Clauses and Their Equivalents in Java 8 Streams](https://blog.jooq.org/2015/08/13/common-sql-clauses-and-their-equivalents-in-java-8-streams/)

| SQL              | Equivalent                              |
| ---------------- | --------------------------------------- |
| SELECT           | map()                                   |
| DISTINCT         | distinct()                              |
| FROM             | of(), stream()                          |
| CROSS JOIN       | flatMap()                               |
| INNER JOIN       | flatMap() with filter()                 |
| LEFT OUTER JOIN  | flatMap() with filter() and a "default" |
| RIGHT OUTER JOIN | inverse LEFT OUTER JOIN                 |
| WHERE            | filter()                                |
| ORDER BY         | sorted()                                |
| LIMIT            | limit()                                 |
| OFFSET           | skip()                                  |
| HAVING           | filter()                                |
| GROUP BY         | collect()                               |
| UNION ALL        | concat()                                |
| UNION            | concat() and distinct()                 |


https://twitter.com/JavaOOQ?ref_src=twsrc%5Etfw
