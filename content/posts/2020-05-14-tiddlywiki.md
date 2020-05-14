---
title: "TiddlyWiki npm based"
excerpt: "My hands-on experience running Tiddlywiki on windows via npm"
date: 2020-05-14 17:20:00
author: mallim
tags:
  - tiddlywiki
---

## TiddlyWiki5

https://github.com/Jermolene/TiddlyWiki5#readme

## Installation

```shell
yarn global add tiddlywiki
```

## Verify it is installed

```shell
tiddlywiki --version
```

## Initialisation

 Create a folder for a new wiki that includes server-related components

```shell
tiddlywiki [EMPTY_FOLDER_ON_WINDOWS] --init server
```

## Starting

```shell
tiddlywiki [EMPTY_FOLDER_ON_WINDOWS] --listen
```

Let the [EMPTY_FOLDER_ON_WINDOWS] be [WIKI_REPO]

## Alias in cmder

Under CMDER_HOME\config\user_aliases.cmd

```batch
wiki=tiddlywiki [WIKI_REPO] --listen
```

## Enable Markdown plugin

Modify [WIKI_REPO]tiddlywiki.info

Add "tiddlywiki/markdown"

```json
    "plugins": [
        "tiddlywiki/tiddlyweb",
        "tiddlywiki/filesystem",
        "tiddlywiki/highlight",
        "tiddlywiki/markdown"
    ],
```