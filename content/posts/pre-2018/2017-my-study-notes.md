---
title: "My study notes"
date: 2017-01-01 20:16:00
author: mallim
tags:
  - angularjs
  - nodejs
---

During my course of development on SBAngular, I come across alot of useful idea from various resources. I have jot them here for references

## AngularJS Form Processing
Form processings in Angularjs

http://www.lullabot.com/blog/article/processing-forms-angularjs

## AngularJS Authentication Ideas

Authentication in Single Page Applications With Angular.js (user roles, access levels)

http://www.frederiknakstad.com/2013/01/21/authentication-in-single-page-applications-with-angular-js/

SitePoints article which illustrates sessionStorage

http://www.sitepoint.com/implementing-authentication-angular-applications

Role based authentication in Angular

https://github.com/artgon/angularjs-role-based-auth

Another authetnication …

https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

## Angular Sample Applications

Angular+Express+Node+MongoDb

http://sahatyalkabov.com/create-a-tv-show-tracker-using-angularjs-nodejs-and-mongodb

## Angular Testings

Angular.js Unit Test with Custom Service Example (quite clear, but not working!!!???)

http://mylifeandcode.blogspot.sg/2014/01/angularjs-unit-test-with-custom-service.html

Angular JS - Unit Testing - Services

http://www.benlesh.com/2013/06/angular-js-unit-testing-services.html

## Nodes Objects and Examples

Objects and classes by example

http://book.mixu.net/node/ch6.html

3 Ways to define javascript class

http://www.phpied.com/3-ways-to-define-a-javascript-class/

```javascript
// in class.js:
var Class = function() { … }
Class.prototype.funcname = function() {...}
module.exports = Class;
// in another file:
var Class = require(‘./class.js’);
var object = new Class(); // create new instance
Both controller methods are exported using browserify’s node like syntax using the “exports” function and can now be imported into other javascript files using the “require” function.

exports.MyCtrl1 = function($scope) {  
  $scope.message = 'controller 1';
  console.log('controller 1')
};

exports.MyCtrl2 = function($scope) {  
  $scope.message = 'controller 2';
  console.log('controller 2')
};
var controllers = require('./controllers');
app.controller('MyCtrl1', ['$scope', controllers.MyCtrl1]);  
app.controller('MyCtrl2', ['$scope', controllers.MyCtrl2]);
```