// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: "A blog of a Software Craftsman",
  siteUrl: "https://mallim.netlify.com",
  titleTemplate: `%s | Mallim`,
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [
        [
          "@gridsome/remark-prismjs"
        ],
        [
          "gridsome-plugin-remark-twitter"
        ]
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/:slug",
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          },
          author: {
            typeName: "Author",
            route: "/author/:id",
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
          url: "https://mallim.netlify.com/" + node.slug,
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
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ["css", "vue", "js"]
                  }
                ],
                whitelistPatterns: [/shiki/]
              })
            ]
          );
        }

        return options;
      });
  }
};
