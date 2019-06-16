---
title: "Java Snippets #1"
description: "java snippets for my reference #1"
date: 2019-06-16 19:45:00
author: mallim
tags:
  - java
  - snippet
  - spring-data-jpa
  - command-pattern
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Spring Related](#spring-related)
  - [Spring Boot RestController @RequestPart](#spring-boot-restcontroller-requestpart)
  - [Spring Boot Concurrency Basics](#spring-boot-concurrency-basics)
  - [Spring Data JPA @Query(native=true)](#spring-data-jpa-querynativetrue)
  - [PipelinR](#pipelinr)
  - [Command Pattern](#command-pattern)
  - [Gatling, DeferredResult](#gatling-deferredresult)
- [Snippets](#snippets)
  - [Download a Large File Through a Spring RestTemplate](#download-a-large-file-through-a-spring-resttemplate)
  - [Common MySQL Queries](#common-mysql-queries)
  - [ObjectMapper, CsvSchema, CsvMapper](#objectmapper-csvschema-csvmapper)
  - [Flux publishOn and then eg to save user](#flux-publishon-and-then-eg-to-save-user)
  - [Defer a Flux's blocking method](#defer-a-fluxs-blocking-method)
  - [Refactoring with Loops and Collection Pipelines](#refactoring-with-loops-and-collection-pipelines)
  - [Assert an Exception is Thrown in JUnit 4 and 5](#assert-an-exception-is-thrown-in-junit-4-and-5)
  - [8 Bulk Update Methods in Oracle](#8-bulk-update-methods-in-oracle)
  - [Java Strings, Generics, Collections, Exceptions, Enums and Annotations Best Practices](#java-strings-generics-collections-exceptions-enums-and-annotations-best-practices)
- [Interesting Libraries](#interesting-libraries)
  - [CORS Filter](#cors-filter)
  - [DTO Mapper in Java](#dto-mapper-in-java)
  - [State Machines in Java](#state-machines-in-java)
  - [Events in Java](#events-in-java)
  - [java-uuid-generator](#java-uuid-generator)
  - [Tablesaw](#tablesaw)
  - [JSONB](#jsonb)
  - [Randoop](#randoop)
  - [Life outside Spring Security](#life-outside-spring-security)
  - [Logging supplementary - Logbook](#logging-supplementary---logbook)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Spring Related

### Spring Boot RestController @RequestPart

Given

```java
@RequestMapping(value="/upload",method=RequestMethod.POST)
public YourResponse uploadDocument( @RequestPart("meta-data") @Valid YourJson metadata,
                                    @RequestPart("file-data") MultipartFile incomingFile )
```

Then the multipart/mixed message to send is :

```
POST [http://{base_url}/upload](http://192.168.190.39:8080/document/upload/94671261-faa8-11e4-a578-7542d0ebc4e4) HTTP/1.1
Content-Type: multipart/mixed; boundary=ABC123Boundary
Content-Length: 83746
{{NEW_LINE}
--ABC123Boundary
Content-Disposition: form-data; name="meta-data"
Content-Type: application/json; charset=UTF-8
Content-Transfer-Encoding: 8bit
{{NEW_LINE}
{
  "id": 1,
  ...
}
{{NEW_LINE}
--ABC123Boundary
Content-Disposition: form-data; name="file-data"; filename="sdasdfa"
Content-Type: application/octet-stream
Content-Transfer-Encoding: 8bit
{{NEW_LINE}
binary-stream of file content
{{NEW_LINE}
 --ABC123Boundary--
```

### Spring Boot Concurrency Basics

https://www.e4developer.com/2018/03/30/introduction-to-concurrency-in-spring-boot/

- server.tomcat.max-threads (default is 200)
- @EnableAsync, @Async, CompletableFuture<>

Good to always keep in mind:

> Spring Services and Controllers are Singletons by default.

### Spring Data JPA @Query(native=true)

https://twitter.com/mallim/status/1139840256176295938?ref_src=twsrc%5Etfw

### PipelinR

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

### Command Pattern

The @Command in [Axon Framework](http://www.axonframework.org/) is quite a sleek thing to use if you want to adopt
Command pattern in your application. Alternatively, you may consulte the links below for other options:

- [Commands / Reactions / Funnels service layer](https://github.com/eduardsi/crf-demo)
- [Spring Command Pattern](https://github.com/khannedy/spring-command-pattern)

```java
  return serviceExecutor.execute(AddProductToCartCommand.class, request)
          .map(Response::ok)
          .subscribeOn(Schedulers.elastic());
```

### Gatling, DeferredResult

https://twitter.com/mallim/status/1139904555527753728?ref_src=twsrc%5Etfw

## Snippets

### Download a Large File Through a Spring RestTemplate

- Download Without Resume
- Download with Pause and Resume

https://twitter.com/mallim/status/1140229762515738626

### Common MySQL Queries

http://www.artfulsoftware.com/infotree/queries.php

can also think of it as a SQL cheatsheet

### ObjectMapper, CsvSchema, CsvMapper

https://twitter.com/mallim/status/1140023271011704832

### Flux publishOn and then eg to save user

Got the idea from [Developing Reactive applications with Reactive Streams and Java 8 by Brian Clozel, Sébastien Deleuze ](https://youtu.be/Cj4foJzPF80)

```java
Flux.publishOn( Scheduler.elastic() )
    .doOnNext( user -> BlockRepository.saveUser( user ) ).then()
```

### Defer a Flux's blocking method

Got the idea from [Developing Reactive applications with Reactive Streams and Java 8 by Brian Clozel, Sébastien Deleuze ](https://youtu.be/Cj4foJzPF80)

```java
Flux.defer( () -> Flux.iteratable( BlockRepository.findAllUsers() ) )
    .subscribeOn( Scheduler.elastic() )
```

### Refactoring with Loops and Collection Pipelines

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

### Assert an Exception is Thrown in JUnit 4 and 5

https://twitter.com/baeldung/status/1139487722312257537?ref_src=twsrc%5Etfw

```java
@Test
public void whenDerivedExceptionThrown_thenAssertionSucceds() {
    String test = null;
    assertThrows(RuntimeException.class, () -> {
        test.length();
    });
}
```

### 8 Bulk Update Methods in Oracle

http://www.orafaq.com/node/2450

- Explicit Cursor Loop
- Implicit Cursor Loop
- UPDATE with nested SET subquery
- BULK COLLECT / FORALL UPDATE
- Updateable Join View
- MERGE
- Parallel DML MERGE
- Parallel PL/SQL

### Java Strings, Generics, Collections, Exceptions, Enums and Annotations Best Practices

https://twitter.com/java/status/1139931320518348801?ref_src=twsrc%5Etfw

## Interesting Libraries

### CORS Filter

http://software.dzhuvinov.com/cors-filter.html

### DTO Mapper in Java

- [MapStruct](http://mapstruct.org/)
- [Orika Mapper](http://orika-mapper.github.io/orika-docs/)
- [ModelMapper](http://modelmapper.org/)
- [Dozer](https://dozermapper.github.io/)

### State Machines in Java

- [Spring Statemachine](https://github.com/spring-projects/spring-statemachine)
- [Squirrel State Machine](http://hekailiang.github.io/squirrel/)
- [stateless4j](https://github.com/oxo42/stateless4j/)

### Events in Java

- [Guava EventBus](https://github.com/google/guava/wiki/EventBusExplained)
- [guava-eventbus-spring](https://github.com/armsargis/guava-eventbus-spring)
- [simpleeventbus](https://github.com/olostan/simpleventbus)
- [MBassador](https://github.com/bennidi/mbassador)
- [spring-event](https://github.com/psycho-ir/spring-event) old example of using Spring application context to publish events
- [Myclila Event](http://code.mycila.com/pubsub/) EventBus system for publish and subscribe to events within an application
- [spring-events](https://github.com/Ninja-Squad/spring-events)

Annotate a singleton bean method to be notified of the event only when the transaction has been committed

```java
 @Component
 private class InvoiceArchiver {
     @Observes(when = EventMoment.AFTER_COMMIT)
     @Async
     public void archiveInvoice(InvoiceCreated event) {
         ...
     }
 }
```

### java-uuid-generator

Java Uuid Generator (JUG) is a library for generating all (3) types of UUIDs on Java.

https://github.com/cowtowncoder/java-uuid-generator

### Tablesaw

[Tablesaw](https://github.com/jtablesaw/tablesaw) - is a Java dataframe similar to Pandas in Python. That is why I notice it.

| SQL      | Tableasw Example                                                                        |
| -------- | --------------------------------------------------------------------------------------- |
| WHERE    | Table result = t.where(nc1.isGreaterThan(4));                                           |
| ORDER BY | Table sorted = table.sort("foo", "bar", "bam");                                         |
| GROUP BY | Table summary = table.summarize("sales", mean, sum, min, max).by("province", "status"); |

### JSONB

https://twitter.com/mallim/status/1139859004660670464?ref_src=twsrc%5Etfw

### Randoop

[Randoop](https://randoop.github.io/randoop/) - Automatic unit test generation for Java. Only if you simply just want coverage for tons of Java classes which I normally just start from something small first.

### Life outside Spring Security

- [jCasbin](https://github.com/casbin/casbin) - An authorization library that supports access control models like ACL, RBAC, ABAC in Java

which reminds me of

- [OACC](http://oaccframework.org/) - Java Application Security Framework.

### Logging supplementary - Logbook

- [Logbook](https://github.com/zalando/logbook) - An extensible Java library for HTTP request and response logging. Worth taking note on this point:
  Logbook puts a big emphasis on logging the actual request/response body that was sent over the wire. The Apache HttpClient, among the following alternatives,
  is the only technology to support that.