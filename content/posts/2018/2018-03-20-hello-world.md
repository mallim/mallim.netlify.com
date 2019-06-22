---
title: "Building diary for mallim.github.io"
date: 2018-03-20 17:54:43
author: mallim
tags:
  - static-site
  - jekyll
---

### Introduction

This post records my actvities on this github blog pages :-)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  

- [Introduction](#Introduction)
  - [Update 30-May-2018](#Update-30-May-2018)
  - [Version Info](#Version-Info)
  - [Update Another Theme...](#Update-Another-Theme)
- [Changelog](#Changelog)
  - [Update 09-May-2018](#Update-09-May-2018)
  - [Update 10-Apr-2018: Add jekyll-seo-tag](#Update-10-Apr-2018-Add-jekyll-seo-tag)
  - [Update 12-Apr-2018: Upgrade to Bootstrap 4.1 with scss](#Update-12-Apr-2018-Upgrade-to-Bootstrap-41-with-scss)
  - [Update 07-Apr-2018: Added Contact Form](#Update-07-Apr-2018-Added-Contact-Form)
  - [Treat this as Hello World](#Treat-this-as-Hello-World)
  - [Update 24-Mar-2018: Added Webanalytics for Jekyll, Sitemap](#Update-24-Mar-2018-Added-Webanalytics-for-Jekyll-Sitemap)
  - [Update before 24-Mar-2018: Disqus is a challenging story](#Update-before-24-Mar-2018-Disqus-is-a-challenging-story)
- [Lastly...](#Lastly)
  - [Acknowledgements](#Acknowledgements)
  - [What's next?](#Whats-next)
  - [Useful but not so related resources](#Useful-but-not-so-related-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

#### Update 30-May-2018

* Added social sharing buttons based on this article - [Social Media Share Bar for Jekyll blog/website](https://mycyberuniverse.com/web/social-media-share-bar-jekyll-blog-website.html)

#### Version Info

This is updated to this point - 11-MAR-2018 : [Tidied up tag opening/closing and interaction with URL, which Fixes #6](https://github.com/sfreytag/friday-theme/commit/c599819c1fa40cb0a3145c62aeb94f8015054d5d)

#### Update Another Theme...

* [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)

### Changelog

#### Update 09-May-2018

* Experiment with [DocToc](https://github.com/thlorenz/doctoc) to generate Table of Content

#### Update 10-Apr-2018: Add jekyll-seo-tag

* Added  [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) but seems like quite a number of things to do to get it right ...
* Revised own introduction, inspired by [Carlos Alexandro Becker's About page](https://carlosbecker.com/about/)

#### Update 12-Apr-2018: Upgrade to Bootstrap 4.1 with scss

* Failed attempt in upgrading to Bootstrap 4.1
* Followed the instruction in [Creating a Jekyll Blog with Bootstrap 4 and Sass - Part 1](https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-1/index.html)
* I follow [How to use Sass with Jekyll (Bootstrap and Font Awesome example)](https://dalanzg.github.io/tips-tutorials/posts/2016/03/25/how-to-use-sass-with-jekyll-bootstrap-and-font-awesome-example/) to do the file structuring

Need to add the following in _config.yml:

```
sass:
  sass_dir: _scss
  style: :compressed
```

#### Update 07-Apr-2018: Added Contact Form

* I attended a talk and he said that a website should at least have a basic contact form. So I make one. Using [99inbound](https://www.99inbound.com/) for now

#### Treat this as Hello World 

But is actually like a changelog

Neat thing about it - powered by [Jekyll](http://jekyllrb.com) and I can use Markdown to author my posts. 
It actually is a lot easier than I thought it was going to be.

#### Update 24-Mar-2018: Added Webanalytics for Jekyll, Sitemap

* This one does not automatically generate the Google Analytics script - [Jekyll::analytics](https://github.com/hendrikschneider/jekyll-analytics). Instead followed the instructions in here - 
[Google Analytics for Jekyll](https://desiredpersona.com/google-analytics-jekyll/)
* [Google Search Console](https://www.google.com/webmasters/tools/home) - added site to Google Search Console
* [Generate Jekyll XML Sitemap Manually Without Using Plugin](https://www.goyllo.com/jekyll-xml-sitemap/) - followed instruction here to add sitemap.xml 

#### Update before 24-Mar-2018: Disqus is a challenging story

Disqus website itself too generic to be helpful.

* Inspired by [Setup up a jekyll blog using github pages and disqus comments](http://vdaubry.github.io/2014/10/19/setup-a-jekyll-blog/)
* Done by using the instructions here [Disqus comments setup for Jekyll](https://desiredpersona.com/disqus-comments-jekyll/)

### Lastly...

#### Acknowledgements

This site is made possible by the amazing people in the internet, special thanks to :

* [Creating and Hosting a Personal Site on GitHub](http://jmcglone.com/guides/github-pages/) for the inspiration
* [John Smith's The Friday theme](https://sfreytag.github.io/friday-theme/index.html) for the theme
* [Setup up a jekyll blog using github pages and disqus comments](http://vdaubry.github.io/2014/10/19/setup-a-jekyll-blog/) 
[Jekyllthemes](http://jekyllthemes.org), [stock-up](https://www.sitebuilderreport.com/stock-up), for the idea on [Disqus](https://disqus.com/), contact form
* [Simple Contact Form On Jekyll](https://gohkhoonhiang.github.io/2016/05/simple-contact-form-on-jekyll/) - thanks for the decent form layout and trying out [99inbound](https://www.99inbound.com/)

#### What's next?

* [The Complete Github Personal Website Guide](https://blog.ronakshah.net/The-Complete-Github-Personal-Website-Guide/#initial-setup) 
setting up free SSL (https), custom domain, email 
* [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) idea from 
[Add social sharing buttons to your Jekyll blog](http://vdaubry.github.io/2014/10/20/add-social-sharing-buttons-with-jekyll/)
* [5 Steps To Add Bootstrap 4 To Jekyll The Right Way](https://simpleit.rocks/how-to-add-bootstrap-4-to-jekyll-the-right-way/) upgrade to Bootstrap 4 (latest version) and use SASS instead
* [minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/) - looks good
* [Jekyll From Scratch - Extending Jekyll](http://pixelcog.com/blog/2013/jekyll-from-scratch-extending-jekyll/) - got qutie a few idea in here

#### Useful but not so related resources
* [The ultimate list of services for static websites](https://cloudcannon.com/tips/2014/12/12/the-ultimate-list-of-services-for-static-websites.html) - very comprehensive and make me want to bookmark it here
