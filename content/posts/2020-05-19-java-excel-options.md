---
title: "Java POJO <-> Excel @ 2020"
excerpt: "Besides Apache POI, What are the other options in Year 2020?"
date: 2020-05-19 21:48:00
author: mallim
tags:
  - java
  - excel
---

## Introduction

I like to work on Excel as much as possible using annotations. 

So what are the libraries which you can come across at Year 2020?

## poiji

Homepage https://github.com/ozlerhakan/poiji

 A tiny library converting excel rows to a list of Java objects based on Apache POI.
 **Take note that it only supports Excel -> Java only.**

Currently using this library to read Excel. Feature 8: @ExcelUnknownCells looks like a pretty interesting feature. It will parse all entries, which are not mapped in any other way (for example by index or by name).

## easypoi

Homepage https://opensource.afterturn.cn/

Its documentation is in Chinese. But this is one of the most powerful library you can find for a simpler Java <-> Excel operations built 
on top of Apache POI.

| Currently, using this.

 ## poi-object-mapper

 Homepage https://github.com/millij/poi-object-mapper

 [poi-object-mapper](https://github.com/millij/poi-object-mapper) is a wrapper java library for Apache POI (Apache POI provides java API to read Microsoft Office Formats). POI APIs are very low level giving acess to all the internals of the file formats.

 | Not considering this. Project looks like not active.

 ## Back to POI approach

This is one of the best resource I can find which teaches you how to use solely Apache POI to read/write Excel

https://github.com/callicoder/java-read-write-excel-file-using-apache-poi

This Medium article also explains it very cleary:

https://medium.com/@ssaurel/generating-microsoft-excel-xlsx-files-in-java-9508d1b521d9

 ## References

 * [Java Excel/POJO Mapping in POI](https://stackoverflow.com/questions/58981017/java-excel-pojo-mapping-in-poi)
