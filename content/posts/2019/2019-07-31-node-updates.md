---
title: "Update your dependencies on a regular basis"
date: 2019-07-31 22:00:00
author: mallim
tags:
  - nodejs
---

One of the most comprehensive sets of commands I have come across:
https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3


```
# List security breaches
npm audit

# Upgrade of minor and patch version following your version ranges in package.json
yarn outdated
yarn update

# Interactive upgrade of minor and patch version following your version ranges in package.json
yarn upgrade-interactive

# List outdated dependencies including major version
yarn upgrade-interactive --latest

# Same with npm
npm outdated
npm update

# Tool for upgrading to major versions (with potential breaking changes)
npm install -g npm-check-updates
ncu
```
