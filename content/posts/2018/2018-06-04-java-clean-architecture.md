---
title: "Java Clean Architecture"
date: 2018-06-14 20:35:00
tags:
  - java
  - clean-architecture
---

I look around for a decent Spring 5 Reactor based Java clean architecture repository for reference. But seems like there is no one stop solution.

So I improvised...

<!--more-->

### First Choice - Axon Framework

If you are not into Monos and Flux, you may want to consider [Axon Framework](http://www.axonframework.org/) ,
you just need to use the [Command](https://docs.axonframework.org/part-ii-domain-logic/command-model) and [Query](https://docs.axonframework.org/part-ii-domain-logic/query-handling) as the Use Cases.

### The Possiblities

The samples below helped me to shape my options. Although most of them are based on Android architecture:

- [A Guided Tour inside a clean architecture code base.](https://proandroiddev.com/a-guided-tour-inside-a-clean-architecture-code-base-48bb5cc9fc97) with its [github repository](https://github.com/mrsegev/MovieNight) - although this is based on Android, the reactive style still applicable for Spring 5, I used this as the basis for clean architecture.
- [mattia-battiston/clean-architecture-example
  ](https://github.com/mattia-battiston/clean-architecture-example) - *DataProvider, *Dto
