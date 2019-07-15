---
title: My Java Stack 2019
excerpt: My preferred java working stack
slug: my-java-stack
date: 2019-07-15 22:36:00
author: mallim
tags:
  - java
  - working-stack
---

## Table of Contents

## Introduction

List of java libraries which I had used over the years. Especially those which are unable to make it to <a href="/skill">Skill</a>

## Web Frameworks

- Spring Boot - which I have been a loyal follower since version 1.2.1
- VueJS or Angular

## Authentication Framework

- [Spring Security](https://spring.io/projects/spring-security)
- [Apache Shiro](https://shiro.apache.org/) - easier to extend for fine grained ACLs
- Love to try : [OACC](http://oaccframework.org/) - one of the most extensive java security framework I ever come across

## ETL Libraries

- [Pentaho Data Integration - Kettle](https://community.hitachivantara.com/docs/DOC-1009855)
- [Apache Camel](https://camel.apache.org/)

## Maven Plugins

- [eclipselink-maven-plugin](https://github.com/ethlo/eclipselink-maven-plugin) - Eclipselink static weaving and canonical model generation made simple
- [Git-Flow Maven Plugin](https://aleksandr-m.github.io/gitflow-maven-plugin/) - one of the nice tools to use if you want to practise GitFlow in the Jenkins setup

## Relational Data Persistence

- [Spring Data JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/) with Hibernate/Eclipselink
- [Mybatis](http://www.mybatis.org) - in a way it can support multiple databases...
- [Mybatis-PageHelper](https://github.com/pagehelper/Mybatis-PageHelper) - mybatis plugin for pagination

<p class="text-white text-bold bg-red-700">Spring Data JPA and Mybatis can actually coexists together.</p>

## Testing Libraries

- [Junit 5](https://junit.org/junit5/docs/current/user-guide/) - my current default choice
- [Spock Framework](http://spockframework.org/) - my default choice before [JUnit 5](https://junit.org/junit5/docs/current/user-guide/)
- [Spring JUnit 5 Testing Support](https://github.com/sbrannen/spring-test-junit5) - JUnit Jupiter testing support in conjunction with Spring Framework 4.3.x

https://twitter.com/mallim/status/1146421042610499584

## Utilities Libraries

- [Commons Collections](http://commons.apache.org/proper/commons-collections/)
- [Commons Lang 2/3](http://commons.apache.org/proper/commons-lang/)
- [Commons IO](https://commons.apache.org/proper/commons-io/)
- [Guava](https://github.com/google/guava)
-

## Supplementary Libraries

- _CORS for those without Spring_: [CORS Filter](http://software.dzhuvinov.com/cors-filter.html) - @Cors alternative
- _Cron expression parser_: [cron-utils](https://github.com/jmrozanec/cron-utils) - Cron utils for parsing, validations and human readable descriptions as well as date/time interoperability. http://cron-utils.com
- _Database source control_: [Liquibase](http://www.liquibase.org/)
- _DDD, CQRS_: [AxonFramework](https://axoniq.io/) allows you to do @Command, CQRS, EventStore
- _Embedded monitoring_: [Java Melody](https://github.com/javamelody/javamelody) - for embedded monitoring
- _Filter Support for Spring MVC & Spring Data JPA_: [specification-arg-resolver](https://github.com/tkaczmarzyk/specification-arg-resolver)
- _Generate dynamic Sql based on hibernate session_: [NativeCriteria](https://blog.przemeknowak.com/NativeCriteria/)
- _Java Bean Mapping_: [MapStruct](http://mapstruct.org/), [Orika](http://orika-mapper.github.io/orika-docs/)
- _Templating_: [JMustache](https://github.com/samskivert/jmustache) preferred over [Apache Velocity](https://velocity.apache.org/) and [Handlebars.java](http://jknack.github.io/handlebars.java/)
- _Parser_: [univocity-parser](https://github.com/uniVocity/univocity-parsers) one of the best java based CSV parser around, if you cannot use an ETL tool. Able to work with CSV, TSV, fixed width columns
- _Fake data generator_: [java-faker](https://github.com/DiUS/java-faker) - quite a nice test data generator
- _XPath equivalent for JSON_: [JsonPath](https://github.com/json-path/JsonPath)

## Noteworthy Libraries

- [datasource-proxy](https://github.com/ttddyy/datasource-proxy) provide proxy classes for JDBC API to intercept executing queries and methods.
- [database-rider](https://database-rider.github.io/database-rider/) integrates DBUnit and JUnit in order to make database testing a breeze! Can work with Spring Boot !
- [Easy Batch](https://github.com/j-easy/easy-batch/wiki) can try if really dun want to use [Apache Camel](https://camel.apache.org/) or [Pentaho Data Integration - Kettle](https://community.hitachivantara.com/docs/DOC-1009855)
- [Eclipse Collections](https://www.eclipse.org/collections/) looks interesting to have a dab with it one day
- [JOOQ](http://www.jooq.org/) - interested to try iff targetted db is kept to open source

## Reference

- [A curated list of awesome Java frameworks, libraries and software](http://developerthing.blogspot.com/2017/09/a-curated-list-of-awesome-java_13.html)
- [Random Data Generators for API Testing in Java](https://techblog.dotdash.com/random-data-generators-for-api-testing-in-java-369c99075208)