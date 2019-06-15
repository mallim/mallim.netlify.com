---
title: "Java Snippets #1"
description: "java snippets for my reference #1"
date: 2019-06-15 21:21:00
author: mallim
tags:
  - java
  - snippet
  - spring-data-jpa
  - command-pattern
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [PipelinR](#pipelinr)
- [Command Pattern](#command-pattern)
- [Flux publishOn and then eg to save user](#flux-publishon-and-then-eg-to-save-user)
- [Defer a Flux's blocking method](#defer-a-fluxs-blocking-method)
- [Refactoring with Loops and Collection Pipelines](#refactoring-with-loops-and-collection-pipelines)
  - [Spring Boot Concurrency Basics](#spring-boot-concurrency-basics)
- [Spring Data JPA @Query(native=true)](#spring-data-jpa-querynativetrue)
- [Assert an Exception is Thrown in JUnit 4 and 5](#assert-an-exception-is-thrown-in-junit-4-and-5)
- [8 Bulk Update Methods in Oracle](#8-bulk-update-methods-in-oracle)
- [Tablesaw](#tablesaw)
- [JSONB](#jsonb)
- [Randoop](#randoop)
- [Life outside Spring Security](#life-outside-spring-security)
- [Logging supplementary - Logbook](#logging-supplementary---logbook)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## PipelinR

A lightweight command processing pipeline for Java.

```java
@RequestMapping("/members")
public String post(@RequestBody BecomeAMember command) {
    return pipeline.send(command);
}

---

@Component
static class Handler implements Command.Handler<BecomeAMember, String> {

    @Override
    public String handle(BecomeAMember $) {
      var member = new Member(new Email($.email, blacklist));
      members.save(member);
      return member.id();
    }
}

```

## Command Pattern

The @Command in [Axon Framework](http://www.axonframework.org/) is quite a sleek thing to use if you want to adopt
Command pattern in your application. Alternatively, you may consulte the links below for other options:

- [Commands / Reactions / Funnels service layer](https://github.com/eduardsi/crf-demo)
- [Spring Command Pattern](https://github.com/khannedy/spring-command-pattern)

```java
        return serviceExecutor.execute(AddProductToCartCommand.class, request)
                .map(Response::ok)
                .subscribeOn(Schedulers.elastic());
```

## Flux publishOn and then eg to save user

Got the idea from [Developing Reactive applications with Reactive Streams and Java 8 by Brian Clozel, Sébastien Deleuze ](https://youtu.be/Cj4foJzPF80)

```java
Flux.publishOn( Scheduler.elastic() ).doOnNext( user -> BlockRepository.saveUser( user ) ).then()
```

## Defer a Flux's blocking method

Got the idea from [Developing Reactive applications with Reactive Streams and Java 8 by Brian Clozel, Sébastien Deleuze ](https://youtu.be/Cj4foJzPF80)

```java
Flux.defer( () -> Flux.iteratable( BlockRepository.findAllUsers() ) ).subscribeOn( Scheduler.elastic() )
```

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

### Spring Boot Concurrency Basics

https://www.e4developer.com/2018/03/30/introduction-to-concurrency-in-spring-boot/

- server.tomcat.max-threads (default is 200)
- @EnableAsync, @Async, CompletableFuture<>

Good to always keep in mind:

> Spring Services and Controllers are Singletons by default.

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

## 8 Bulk Update Methods in Oracle

http://www.orafaq.com/node/2450

- Explicit Cursor Loop
- Implicit Cursor Loop
- UPDATE with nested SET subquery
- BULK COLLECT / FORALL UPDATE
- Updateable Join View
- MERGE
- Parallel DML MERGE
- Parallel PL/SQL

## Tablesaw

[Tablesaw](https://github.com/jtablesaw/tablesaw) - is a Java dataframe similar to Pandas in Python. That is why I notice it.

| SQL      | Tableasw Example                                                                        |
| -------- | --------------------------------------------------------------------------------------- |
| WHERE    | Table result = t.where(nc1.isGreaterThan(4));                                           |
| ORDER BY | Table sorted = table.sort("foo", "bar", "bam");                                         |
| GROUP BY | Table summary = table.summarize("sales", mean, sum, min, max).by("province", "status"); |

## JSONB

https://twitter.com/mallim/status/1139859004660670464

## Randoop

[Randoop](https://randoop.github.io/randoop/) - Automatic unit test generation for Java. Only if you simply just want coverage for tons of Java classes which I normally just start from something small first.

## Life outside Spring Security

- [jCasbin](https://github.com/casbin/casbin) - An authorization library that supports access control models like ACL, RBAC, ABAC in Java

which reminds me of

- [OACC](http://oaccframework.org/) - Java Application Security Framework.

## Logging supplementary - Logbook

- [Logbook](https://github.com/zalando/logbook) - An extensible Java library for HTTP request and response logging. Worth taking note on this point:
  Logbook puts a big emphasis on logging the actual request/response body that was sent over the wire. The Apache HttpClient, among the following alternatives,
  is the only technology to support that.
