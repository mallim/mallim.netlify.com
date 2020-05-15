---
title: "Trying out Embedded MongoDB"
excerpt: "Is it possible to run a fake embedded MongoDB for Spring Boot 2 testing?"
date: 2020-05-15 22:56:00
author: mallim
tags:
  - mongodb
  - java
  - spring
---

## Answer

Yes ! It is possible and there are to choices:

Refer to https://github.com/mallim/mongo-spring-test-demo for the source code

## Option 1 - mongo-java-server

[mongo-java-server](https://github.com/bwaldvogel/mongo-java-server) is a 
fake implementation of MongoDB in Java that speaks the wire protocol.

Take note this one has limited features.

```xml
<dependency>
    <groupId>de.bwaldvogel</groupId>
	<artifactId>mongo-java-server</artifactId>
	<version>1.28.0</version>
	<scope>test</scope>
</dependency>
```

## Option 2 - Flapdoodle Embedded MongoDB

[Flapdoodle Embedded MongoDB](https://github.com/flapdoodle-oss/de.flapdoodle.embed.mongo) provides a platform neutral way for running mongodb in unittests. 

```xml
<dependency>
	<groupId>de.flapdoodle.embed</groupId>
	<artifactId>de.flapdoodle.embed.mongo</artifactId>
	<version>2.2.0</version>
	<scope>test</scope>
</dependency>
```

## Failed Option - Fongo

[fongo](https://github.com/fakemongo/fongo) is a faked out in-memory mongo for Java.

It has example of working with Spring Boot 1. 

But keep getting errors when trying out with Spring Boot 2.

### Related github issues

* [When Fongo 2.2.* will be released?](https://github.com/fakemongo/fongo/issues/364)
* [Fongo v2.2.0-RC2 incompatibility with mongodb driver v3.9.1](https://github.com/fakemongo/fongo/issues/367)
* [Support for java mongodb driver 3.6.4](https://github.com/fakemongo/fongo/issues/357)

