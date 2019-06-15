---
title: "The Changelog"
date: 2019-06-16 01:35:00
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

## Changes as of 2019-06-16

- Added a brand new README.md by using [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
- Upgrade to tailwindcss 1.0.4.
- Remove gridsome-plugin-remark-shiki, add in @gridsome/remark-prismjs. prismjs' theme looks better.
- Added vue-disqus to support comments in Post.
- Removed gridsome-plugin-remark-twitter which cannot work with shiki nor prismjs.

## Changes as of 2019-06-11

- Added [Gridsome Remark Twitter](https://gridsome.org/plugins/gridsome-plugin-remark-twitter)
- Removed [gridsome-plugin-remark-youtube](https://github.com/markhoney/gridsome-plugin-remark-youtube) because it is in conflict with [Gridsome Remark Twitter](https://gridsome.org/plugins/gridsome-plugin-remark-twitter). Anyway embed option of Youtube's share button works.

## Changes as of 2019-06-10

- Added [Dependabot](https://dependabot.com/) to monitor the site
- Added [gridsome-plugin-remark-youtube](https://github.com/markhoney/gridsome-plugin-remark-youtube) to display youtube. Take note that there are two backticks!!!
- Changed footer with inspiration from [DAN VEGA Blog](https://www.danvega.dev/)
