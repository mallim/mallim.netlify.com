---
title: "ParcelJS with VueJS Work Log"
excerpt: "ParcelJS + VueJS + Tailwindcss"
date: 2019-07-20 00:42:00
author: mallim
tags:
  - parcel
  - tailwindcss
  - vuejs
---

## Install Parcel

```shell
yarn global add parcel-bundler

yarn init -y

yarn add sass

yarn add postcss-modules autoprefixer

yarn add tailwindcss
```

## package.json

```js
  "scripts": {
    "dev": "parcel <your entry file>",
    "build": "parcel build <your entry file>"
  }
```

## .postcssrc

```
{
  "plugins": {
    "tailwindcss":{},
    "autoprefixer": {}
  }
}
```

## index.js

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.scss";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```

## index.scss

```scss
@tailwind base;

@tailwind components;

@tailwind utilities;
```

## App.vue

```
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
```

## Reference

- [Building Vue.js Apps with Parcel](https://alligator.io/vuejs/vue-parceljs/) - ignore parcel-plugin-vue
