---
title: "Create a backup or a bundle of your git repository"
excerpt: "SOP for git bundle/unbundle"
date: 2019-08-10 07:53:00
author: mallim
tags:
  - git
  - bundle
---

## Create a bundle

```sh
git bundle create ../myrepo.bundle master
```

## Verify the bundle

```sh
git bundle verify ../myrepo.bundle
```

## Deploy the bundle

- This is the important part

```sh
mkdir newrepo
cd newrepo
git init
git bundle unbundle ../myrepo.bundle
git merge f7243b 
```

where f7243b is the COMMIT ref showing beside HEAD

## Reference

https://twitter.com/mallim/status/1155749205425545217
