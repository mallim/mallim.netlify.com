---
title: "Redmine in a war"
date: 2013-06-03 19:27:00
author: mallim
tags:
  - jruby
  - redmine
---

## Steps Taken To Re-Install Redmine with the Recompiled JRuby and to a war file

Hope this will help someone else :

* Perform gem install rmagick4j
* Perform gem install jruby-openssl
* Check through Redmine's Generic Installation Guide (http://www.redmine.org/projects/redmine/wiki/RedmineInstall)
* Perform gem install jruby-rack
* Perform gem install rake
* Perform gem install warbler

I happened to spot someone wrote the scripts on this :
https://github.com/kkkon/redmine-war (without rmagic4j)