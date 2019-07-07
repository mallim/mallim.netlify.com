---
title: "vue cli 3 working log"
excerpt: "VueJS + Tailwindcss + PurgeCSS"
date: 2019-07-06 19:42:00
author: mallim
tags:
  - vue cli
  - tailwindcss
---

## Instructions below are based on the following:

- vue cli 3.9.3
- Tailwindcss 1.0.4

## Install the vue CLI

```shell
yarn global add @vue/cli
```

check vue is load and ready

```shell
vue --version
```

## vue create project

```shell
vue create vue-starter-template
```

- Please pick a preset: Manually select features
- Check the features needed for your project: Babel, CSS Pre-processors
- Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
- Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files

## Run and check

```shell
cd vue-starter-template
yarn serve
```

## Installing and configuring tailwindcss

```shell
yarn add tailwindcss

npx tailwind init
```

## Create src\main.scss

```scss
@tailwind base;

@tailwind components;

@tailwind utilities;
```

## Include main.scss in main.js

```javascript
import "./main.css";
```

## Install for PurgeCSS

```shell
yarn add purgecss @fullhuman/postcss-purgecss
```

## Edit postcss.config.js

```javascript
const purgecss = require("@fullhuman/postcss-purgecss");

const autoprefixer = require("autoprefixer");

const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("tailwind.config.js"),
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.vue"]
    }),
    autoprefixer()
  ]
};
```

## References

- [Setting up a vue-cli 3 app with tailwindcss and purgecss](https://medium.com/@andreaminato95/setting-up-a-vue-cli-3-app-with-tailwindcss-and-purgecss-286688dcd8c1)
