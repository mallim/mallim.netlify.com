---
title: "CHANGELOG.md"
excerpt: CHANGELOG.md for mallim.netlify.com
date: 2019-06-22 20:37:00
author: mallim
tags:
  - blog
  - changelog
  - dependabot
  - gridsome-plugin-remark-youtube
  - readme-md-generator
  - vue-disqus
  - gridsome/remark-prismjs
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Changes as of 2019-06-22

- Added html required by PInterest
- Added robots.txt based on the article here - https://twitter.com/mallim/status/1142410279067607040

## Changes as of 2019-06-16

- Added a brand new README.md by using [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
- Upgrade to tailwindcss 1.0.4.
- Remove gridsome-plugin-remark-shiki, add in @gridsome/remark-prismjs. prismjs' theme looks better.
- Added vue-disqus to support comments in Post.
- Removed gridsome-plugin-remark-twitter which cannot work with shiki nor prismjs.
- Reverted back gridsome-plugin-remark-twitter. Solved the problem danvega/gridsome-plugin-remark-twitter#3 and EldoranDev/gridsome-plugin-remark-shiki#8.

## Changes as of 2019-06-11

- Added [Gridsome Remark Twitter](https://gridsome.org/plugins/gridsome-plugin-remark-twitter)
- Removed [gridsome-plugin-remark-youtube](https://github.com/markhoney/gridsome-plugin-remark-youtube) because it is in conflict with [Gridsome Remark Twitter](https://gridsome.org/plugins/gridsome-plugin-remark-twitter). Anyway embed option of Youtube's share button works.

## Changes as of 2019-06-10

- Added [Dependabot](https://dependabot.com/) to monitor the site
- Added [gridsome-plugin-remark-youtube](https://github.com/markhoney/gridsome-plugin-remark-youtube) to display youtube. Take note that there are two backticks!!!
- Changed footer with inspiration from [DAN VEGA Blog](https://www.danvega.dev/)
