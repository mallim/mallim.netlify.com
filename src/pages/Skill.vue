<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">My Crafts</h1>
        <!--
        <p class="text-grey-dark text-lg sm:text-3xl">Mallim</p>
        -->
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link
          to="/"
          class="text-gray-900 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity"
        >&larr; Home</g-link>
      </nav>
      <article
        class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16"
      >
        <div class="px-2">
          <div class="flex -mx-2">
            <div class="w-1/3 px-2">
              <div class="h-12">
                <h2 class="font-bold">Frontend</h2>
              </div>
              <div class="flex h-12">
                <img
                  alt="JavaScript"
                  src="/images/logo/javascript.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Javascript</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Angular"
                  src="/images/logo/angular.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Angular</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="JavaScript"
                  src="/images/logo/vue.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Vue</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="TailWind CSS"
                  src="/images/logo/tailwind.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">TailWind CSS</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="SASS"
                  src="/images/logo/node-sass.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">SASS</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="ParcelJS"
                  src="/images/logo/parceljs.jpg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">ParcelJS</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Webpack"
                  src="/images/logo/webpack.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Webpack</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Redux"
                  src="/images/logo/redux.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Redux</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Lodash"
                  src="/images/logo/lodash.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Lodash</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="ag-Grid"
                  src="/images/logo/ag-grid.jpg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">ag-Grid</div>
              </div>
            </div>
            <div class="w-1/3 px-2">
              <div class="h-12">
                <h3 class="font-bold">Java</h3>
              </div>
              <div class="flex h-12">
                <img
                  alt="Spring Boot"
                  src="/images/logo/spring-boot.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Spring Boot</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Spring Framework"
                  src="/images/logo/icon-spring-framework.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Spring Framework</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="MyBatis"
                  src="/images/logo/mybatis.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">MyBatis</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Spring Data JPA"
                  src="/images/logo/mybatis.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Spring Data JPA</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Spring Security"
                  src="/images/logo/spring-security.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Spring Security</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Quartz Job Scheduler"
                  src="/images/logo/quartz.jpg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Quartz Job Scheduler</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Project Reactor"
                  src="/images/logo/reactor.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Project Reactor</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Apache Camel"
                  src="/images/logo/apache-camel.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Apache Camel</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Univocity Parser"
                  src="/images/logo/univocity-parser.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Univocity Parser</div>
              </div>
            </div>
            <div class="w-1/3 px-2">
              <div class="h-12">
                <h3 class="font-bold">Other</h3>
              </div>
              <div class="flex h-12">
                <img
                  alt="SQL"
                  src="/images/logo/sql-file-format-symbol-svgrepo-com.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">SQL</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="NodeJS"
                  src="/images/logo/nodejs.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">NodeJS</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Pentaho Data Integration (Kettle)"
                  src="/images/logo/kettle.jpg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Pentaho Data Integration (Kettle)</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Jenkins"
                  src="/images/logo/jenkins.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Jenkins</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Intellij"
                  src="/images/logo/intellij.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Intellij</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Gitbucket"
                  src="/images/logo/gitbucket.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Gitbucket</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Liquibase"
                  src="/images/logo/liquibase.jpg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Liquibase</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Git"
                  src="/images/logo/git.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Git</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="SVN"
                  src="/images/logo/svn.png?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">SVN</div>
              </div>
              <div class="flex h-12">
                <img
                  alt="Postman"
                  src="/images/logo/postman.svg?nf_resize=fit&amp;w=40"
                  class="flex-grow-0 flex-shrink-0 object-contain self-start w-6 mr-2"
                >
                <div class="flex-1">Postman</div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10"/>
    </main>
  </Layout>
</template>
<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";

export default {
  components: {
    SiteFooter
  },
  metaInfo() {
    return {
      title: "My Crafts",
      meta: [
        {
          key: "description",
          name: "description",
          content: "A blog of a Software Craftsman."
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: "About" },
        {
          property: "og:description",
          content: "A blog of a Software Craftsman."
        },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: "/images/mallim-card.png" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About" },
        {
          name: "twitter:description",
          content: "A blog of a Software Craftsman."
        },
        { name: "twitter:site", content: "@mallim" },
        { name: "twitter:creator", content: "@mallim" },
        { name: "twitter:image", content: "/images/mallim-card.png" }
      ]
    };
  },
  computed: {
    config() {
      return config;
    }
  }
};
</script>
