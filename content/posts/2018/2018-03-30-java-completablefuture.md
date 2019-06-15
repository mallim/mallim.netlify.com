---
title: "Let My Future be Complete..."
date: 2018-03-30 00:00:01
author: mallim
tags:
  - java
  - CompletableFuture
---

## Introduction

I have tried and put up some examples at https://github.com/mallim/java101 (look for completablefuture package).

On my laptop, RealLifeWithoutCompletableFutureExample took 15087 ms and RealLifeCompletableFutureExample 5098 ms.

Hmm.. so there is a a difference.

## Libraries related to CompletableFuture 

* [tascalate-concurrent](https://github.com/vsilaev/tascalate-concurrent)
* [cyclops-react](https://github.com/aol/cyclops-react) - good introduction at [What is Cyclops-react?](https://blog.jooq.org/2016/05/12/cyclops-react-organises-the-cambrian-explosion-of-java-8-libraries/) 
and [homepage](http://cyclops-react.io/) at http://cyclops-react.io/
* [ea-async](https://github.com/electronicarts/ea-async) - EA Async implements async-await methods in the JVM. It looks like a simplified version of [kilim](https://github.com/nqzero/kilim)

## Libraries related to Executor/Executor Service

* [async-retry](https://github.com/nurkiewicz/async-retry)
* [vmlens Executor service](https://github.com/vmlens/executor-service) - A high throughput java executor service
* [About ExecutorServices](https://blog.jayway.com/2014/03/06/about-executorservices/) take note on the section about Dynamic ThreadPoolExecutor and there is a formula for Sizing Thread Pools.
* [BlockingThreadPoolExecutor](https://github.com/umermansoor/BlockingThreadPoolExecutor) A Blocking ThreadPoolExecutor (alternative ThreadPoolExecutor Java)

## Parallel Stream --> CompletableFuture

* [Java 8: CompletableFuture vs Parallel Stream](http://fahdshariff.blogspot.sg/2016/06/java-8-completablefuture-vs-parallel.html?m=1)
* [Gentle introduction to Completable Future](https://blog.cngroup.dk/2015/08/04/completable-future/ ) gives a Thread Pool Size Formula

## Spring @Async with CompletableFuture

* [One example](https://github.com/mallim/java101/tree/master/spring-async-complfuture) - based on Spring Boot 2.0 works nicely.
* [Completable futures with Spring async](https://geowarin.github.io/completable-futures-with-spring-async/) - you will need the tips here if you want @Async to work with Spring 3.X, seems like no such problem on Spring Boot 2.X. 
There is an [example here](https://github.com/mallim/java101/tree/master/CompletableExecutor)
* [Good tips on Spring @Asyn here](https://stackoverflow.com/questions/29181057/how-to-check-that-async-call-completed-in-spring/29182773#29182773)


```
Nthreads) = Ncpu * Ucpu * (1 + W/C)

Ncpu - number of cpus
Ucpu - cpu utilization
W/C - ration of wait to compute time
```
