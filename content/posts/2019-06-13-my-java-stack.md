---
title: "My Java Stack 2019"
description: "My preferred java working stack"
slug: "my-java-stack"
date: 2019-06-13 00:20:00
author: mallim
tags:
  - java
  - working-stack
---

## Introduction
List of java libraries which I had used over the years. Take note that the listing here will
be somewhat opinionated.

## Web frameworks
* Spring Boot - which I have been a loyal follower since version 1.2.1
* VueJS or Angular 

## Supporting libraries for web frameworks
* [CORS Filter](http://software.dzhuvinov.com/cors-filter.html) - if Spring is not around
* [Java Melody](https://github.com/javamelody/javamelody) - for embedded monitoring

## Relational data persistence
* [Spring Data JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/) with Hibernate/Eclipselink
* [Mybatis](http://www.mybatis.org) - in a way it can support multiple databases...
* [JOOQ](http://www.jooq.org/) - interested to try iff targetted db is kept to open source

_Notes: Spring Data JPA and Mybatis can actually coexists together_

## Authentication framework
* [Spring Security](https://spring.io/projects/spring-security)
* [Apache Shiro](https://shiro.apache.org/) - easier to extend for fine grained ACLs
* Love to try : [OACC](http://oaccframework.org/) - one of the most extensive java security framework I ever come across

## ETL libraries
* [Pentaho Data Integration - Kettle](https://community.hitachivantara.com/docs/DOC-1009855)
* [Apache Camel](https://camel.apache.org/)

## General purpose supplementary libraries
* *Continuous Integration Support*: [Jenkins](https://jenkins.io/)
* *Quick templating*: [JMustache](https://github.com/samskivert/jmustache) preferred over [Apache Velocity](https://velocity.apache.org/) and [Handlebars.java](http://jknack.github.io/handlebars.java/)
* *Parser*: [univocity-parser](https://github.com/uniVocity/univocity-parsers) one of the best java based CSV parser around, if you cannot use an ETL tool. Able to work with CSV, TSV, fixed width columns
* *DDD*: [AxonFramework](https://axoniq.io/) allows you to do @Command 
* *Database source control*: [Liquibase](http://www.liquibase.org/)
* *Scheduler* : [Quartz Scheduler](http://www.quartz-scheduler.org/)
* *Utilities*: [Commons Lang 2/3](http://commons.apache.org/proper/commons-lang/), [Commons Collections](http://commons.apache.org/proper/commons-collections/), [Guava](https://github.com/google/guava)

<hr/>

Original list is at http://mallimxf3.blogspot.com/p/my-java-stack.html

  

