---
title: "Maven + Spring Boot 2 + Junit 5 + Groovy"
excerpt: "The usual setup will not run tests..."
date: 2019-09-28 13:00:00
author: mallim
tags:
  - java
  - maven
  - junit5
  - groovy
------

## Groovy 2.5.X in Maven

```xml
<dependency>
   <groupId>org.codehaus.groovy</groupId>
   <artifactId>groovy-all</artifactId>
   <version>2.5.8</version>
   <type>pom</type>
</dependency>
```

The type=pom is important here or else you will get download error.

## TestNg instead of Junit5

With Groovy in pom.xml, surefire-plugin detects TestNG instead of Junit5.
This ended up no tests are being executed.

### Solution

```xml
<plugin>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.22.0</version>
    <dependencies>
        <dependency>
            <groupId>org.junit.platform</groupId>
            <artifactId>junit-platform-surefire-provider</artifactId>
            <version>1.3.2</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>${junit.jupiter.version}</version>
        </dependency>
    </dependencies>
</plugin>
```

## Final pom.xml structure

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>SPRING_BOOT_VERSION</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>YOUR_GROUP_ID</groupId>
    <artifactId>YOUR_ARTIFACT</artifactId>
    <version>YOUR_VERSION</version>
    <packaging>YOUR_PACKAGING</packaging>
    <properties>
        <java.version>1.8</java.version>
        <junit.jupiter.version>5.5.2</junit.jupiter.version>
        <maven-surefire-plugin.version>2.22.0</maven-surefire-plugin.version>
    </properties>
    <dependencies>
        <!-- Usual dependancies are omitted -->
        <dependency>
            <groupId>org.codehaus.groovy</groupId>
            <artifactId>groovy-all</artifactId>
            <version>2.5.8</version>
            <type>pom</type>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                </exclusion>
            </exclusions>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>${junit.jupiter.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>${junit.jupiter.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-params</artifactId>
            <version>${junit.jupiter.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.0</version>
                <dependencies>
                    <dependency>
                        <groupId>org.junit.platform</groupId>
                        <artifactId>junit-platform-surefire-provider</artifactId>
                        <version>1.3.2</version>
                    </dependency>
                    <dependency>
                        <groupId>org.junit.jupiter</groupId>
                        <artifactId>junit-jupiter-engine</artifactId>
                        <version>${junit.jupiter.version}</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>

```

Notes

* surefire-plugin version 2.22.0 is important here. This setup does not work with version > 2.22.0.