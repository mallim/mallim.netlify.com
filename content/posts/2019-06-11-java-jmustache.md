---
title: "JMustache versus Handlebars"
date: 2019-06-11 00:00:01
author: mallim
tags:
  - java
  - jmustache
  - handlebars-java
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">More user friend ly API compared to handlebars java <a href="https://t.co/O8ypcBQERG">https://t.co/O8ypcBQERG</a></p>&mdash; Ian Lim (@mallim) <a href="https://twitter.com/mallim/status/1134117951718608896?ref_src=twsrc%5Etfw">May 30, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Usage experience between [JMustache](https://github.com/samskivert/jmustache) versus [Handlebars.java](http://jknack.github.io/handlebars.java/)
* Both offer the same mustache syntax
* JMustache has no checked exceptions to catch. So the flow is smoother than Handlebars.java
* JMustache supports a fluent API to call methods like execute and compile. 
* JMustache has an easier way to default null value e.g.

````java
Mustache.compiler().defaultValue("")
````