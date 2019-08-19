---
title: "vue cli 3 working log v2"
excerpt: "VueJS + Tailwindcss + Fontawesome + Bulma"
date: 2019-08-19 22:21:00
author: mallim
tags:
  - vue cli
  - tailwindcss
---

## Instructions below are based on the following:

- vue cli 3.10.0
- Tailwindcss 1.0.4

## Install the vue CLI

```shell
yarn global add @vue/cli
```

## Check vue is load and ready

```shell
vue --version
```

## vue create project

- frontend for vuejs, backend for Spring Boot

```shell
vue create <project_name>\frontend
```

- Please pick a preset: Manually select features
- Check the features needed for your project: Babel, CSS Pre-processors
- Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
- Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files

## Run and check

```shell
cd <project_name>\frontend
yarn serve
```

## Installing and configuring tailwindcss

- by [vue-cli-plugin-tailwind](https://github.com/ky-is/vue-cli-plugin-tailwind)

```shell
$ vue add @ky-is/tailwind
```

### Post tailwindcss plugin

- Rename @/assets/styles/tailwind.postcss to @/assets/styles/tailwind.scss
- Add tw- prefix

### Add tw prefix to tailwind.config.js

```javascript
module.exports = {
  prefix: "tw-",
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
```

## Install fontawesome by plugin

```
$ vue add fontawesome
```

## Install buefy by plugin

by [vue-cli-plugin-buefy](https://github.com/buefy/vue-cli-plugin-buefy)

```
$ vue add buefy
```

### Modify main.js

```
Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultIconComponent: "font-awesome-icon"
});
```

## References

- [Setting up a vue-cli 3 app with tailwindcss and purgecss](https://medium.com/@andreaminato95/setting-up-a-vue-cli-3-app-with-tailwindcss-and-purgecss-286688dcd8c1)
