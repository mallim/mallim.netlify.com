---
title: "Angular cli working log"
excerpt: "Angular 8 + Tailwindcss (without ng eject)"
date: 2019-06-25 21:45:00
author: mallim
tags:
  - angular-8
  - tailwindcss
---

<p class="text-white text-bold bg-red-700">Take note that this is still work in progress...</p>

Instructions below are based on the following:

- Angular 8 CLI
- Tailwindcss 1.0.4

## Install the Angular CLI

```shell
yarn global add @angular/cli
```

## Create a workspace and initial application (scss)

```shell
ng new angular-tailwind --style=scss
```

## Installing and configuring Tailwind

```shell
cd angular-tailwind

yarn add tailwindcss
```

## Locate src\styles.scss

```scss
@tailwind base;

@tailwind components;

@tailwind utilities;
```

## Install dependencies for Angular custom webpacking

```shell
yarn add @angular-builders/custom-webpack
```

## Revise angular.json

- @angular-builders/custom-webpack:browser
- path to a webpack.config.js

```json
"architect": {
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "./extra.webpack.config.js"
      },
      "outputPath": "dist/angular-tailwind",
      ...
    },
  }
}
```

## References

- [Angular 7 + TailwindCSS](https://medium.com/@brittonkdeets/angular-7-tailwindcss-32ef63f30466)
- [Using Tailwind with Angular](https://www.jerriepelser.com/blog/using-tailwindcss-with-angular/)
- [Angular CLI: Custom webpack Config](https://alligator.io/angular/custom-webpack-config/)

<div class="text-center mt-8">
  <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
    Button
  </button>
</div>
