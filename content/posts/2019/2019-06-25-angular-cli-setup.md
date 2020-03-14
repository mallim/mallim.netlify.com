---
title: "Angular cli working log"
excerpt: "Angular 8 + Tailwindcss (without ng eject)"
date: 2019-06-26 23:33:00
author: mallim
tags:
  - angular
  - tailwindcss
---

## Instructions below are based on the following:

- Angular 9 CLI (version 9.0.5)
- Tailwindcss 1.0.4

For the impatient, you may check [Github](https://github.com/mallim/angular9-starter-template)

## Install the Angular CLI

```shell
yarn global add @angular/cli
```

## Create a workspace and initial application (scss)

```shell
ng new angular9-starter-template --style=scss
```

## Installing and configuring tailwindcss

```shell
cd angular9-starter-template

yarn add tailwindcss

npx tailwind init
```

## Install dependencies for Angular custom webpacking

```shell
yarn add @angular-builders/custom-webpack
```

## Look for src\styles.scss

```scss
@tailwind base;

@tailwind components;

@tailwind utilities;
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
        "path": "./extra-webpack.config.js"
      },
      "outputPath": "dist/angular-tailwind",
      ...
    },
  }
},
"serve":{
  "builder": "@angular-builders/custom-webpack:dev-server"
}
```

## Add extra-webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("tailwindcss")("./tailwind.config.js")]
            }
          }
        ]
      }
    ]
  }
};
```

## References

- [Angular 7 + TailwindCSS](https://medium.com/@brittonkdeets/angular-7-tailwindcss-32ef63f30466)
- [Using Tailwind with Angular](https://www.jerriepelser.com/blog/using-tailwindcss-with-angular/)
- [Angular CLI: Custom webpack Config](https://alligator.io/angular/custom-webpack-config/)
- [Customizing Angular CLI build — an alternative to ng eject](https://codeburst.io/customizing-angular-cli-6-build-an-alternative-to-ng-eject-a48304cd3b21)
