// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "A blog of a Software Craftsman",
  siteUrl: "https://mallim.netlify.com",
  siteDescription:
    "Mallim's Site is a collections of thoughts, stories, and ideas of a Software Craftsman who is 20++ years in software development",
  titleTemplate: `%s | Mallim's Site`,
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [
        // ["@gridsome/remark-prismjs"],
        [
          "gridsome-plugin-remark-shiki",
          {
            // Can be any of
            // https://github.com/octref/shiki/tree/master/packages/themes
            // and will default to 'nord'
            theme: "nord",
            skipInline: true
          }
        ],
        ["gridsome-plugin-remark-twitter"],
        ["remark-toc"],
        ["remark-slug"],
        ["remark-emoji"]
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          },
          author: {
            typeName: "Author",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-141753100-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Mallim, a blog of a Software Craftsman",
          feed_url: "https://mallim.netlify.com/feed.xml",
          site_url: "https://mallim.netlify.com"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: "https://mallim.netlify.com" + node.path,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "feed.xml"
        }
      }
    }
  ],

  templates: {
    Post: "/:title",
    Tag: "/tag/:id",
    Author: "/author/:id"
  },

  chainWebpack: config => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap(options => {
        options.plugins.unshift(
          ...[
            require("postcss-import"),
            require("postcss-nested"),
            require("tailwindcss")
          ]
        );

        if (process.env.NODE_ENV === "production") {
          options.plugins.push(
            ...[
              require("@fullhuman/postcss-purgecss")({
                content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
                defaultExtractor: content =>
                  content.match(/[\w-/:%]+(?<!:)/g) || [],
                whitelistPatterns: [/shiki/]
              })
            ]
          );
        }

        return options;
      });
  }
};
