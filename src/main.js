// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased font-serif" };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo"
  });
}
