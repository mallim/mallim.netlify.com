---
title: "What am I doing? Vuepress"
excerpt: "My Vuepress Journey - a failed experiment"
date: 2020-03-17 23:26:00
author: mallim
tags:
  - vuepress
  - tailwindcss
---

## 1. Installing Vuepress

```shell
# install globally
yarn global add vuepress # OR npm install -g vuepress
```

## 2. Use a base

```shell
git clone https://github.com/newsbielt703/vuepress-blog-template.git
```

reference : [Intro to VuePress blog theme and plugin](https://billyyyyy3320.com/en/2020/01/25/intro-to-vuepress-blog-theme-and-plugin/)

## 3. Put in tailwindcss

```shell
yarn add @silvanite/vuepress-plugin-tailwind

yarn add -D sass-loader node-sass
```

reference : [vuepress-plugin-tailwind](https://github.com/Silvanite/vuepress-plugin-tailwind) is from [(vuepress-plugin-tailwind)](https://github.com/Silvanite/vuepress-plugin-tailwind)

## Create src/.vuepress/config.js

```json
module.exports = {
  title: "Default Title",
  description: "Default Description",
  plugins: ["@silvanite/tailwind"]
};
```

## Create src/.vuepress/styles/index.scss

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Create src/.vuepress/themes/layouts

### Layout.vue

```vue
<template>
  <div class="theme-container">
    <Content />
  </div>
</template>
```

### 404.vue

```vue
<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
```
