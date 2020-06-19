---
title: "Spring MongoDb Query"
excerpt: "Where are the best references?"
date: 2020-05-25 12:59:00
author: mallim
tags:
  - java
  - spring
  - mongodb
---

## About @Query

I learnt exists keyword from here

https://www.concretepage.com/spring-5/spring-data-mongodb-query

## Using $positional projection

https://stackoverflow.com/questions/43326515/how-to-retrieve-matching-element-in-array-in-spring-mongodb

```java
Query query = new Query();
query.addCriteria(Criteria.where("id").is(new ObjectId("58e8da206ca4f710bab6ef74")).and("courses.id").is(new ObjectId("58d65541495c851c1703c57f")));
query.fields().include("name").position("courses", 1);
List<Course> courses = mongoTemplate.find(query, Course.class);
```

## Using $elemMatch projection

https://stackoverflow.com/questions/43326515/how-to-retrieve-matching-element-in-array-in-spring-mongodb

```java
Query query = new Query();
query.addCriteria(Criteria.where("id").is(new ObjectId("58e8da206ca4f710bab6ef74")));
query.fields().include("name").elemMatch("courses", Criteria.where("_id").is(new ObjectId("58d65541495c851c1703c57f") ) );
List<Course> Course = mongoTemplate.find(query, Course.class);
```