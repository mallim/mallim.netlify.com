---
title: "Problems for Spring MVC and Spring WebFlux"
excerpt: "Generic error handling for Spring "
date: 2020-09-24 22:30:00
author: mallim
tags:
  - spring-boot
  - spring
---

## Problems for Spring MVC and Spring WebFlux

URL: https://github.com/zalando/problem-spring-web

Good library to use if you are tired of frequently writing @ControllerAdvices for every Spring Boot applications you written.

@ControllerAdvice cannot work for webflux. So need to implement twice to handle coventional MVC error and then webflux error.

## How to handle webflux errors?

Good reference: https://medium.com/@akhil.bojedla/exception-handling-spring-webflux-b11647d8608

