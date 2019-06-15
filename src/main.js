// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/css/prism-dracula.css";

import DefaultLayout from "~/layouts/Default.vue";
import VueDisqus from "vue-disqus";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueDisqus);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased font-serif" };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo"
  });
}
