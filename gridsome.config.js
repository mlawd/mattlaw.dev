// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const BlogPostContentItem = require('./src/custom-types/BlogPostContentItem');

module.exports = {
  siteName: 'MattLaw.Dev',
  titleTemplate: '%s - MattLaw.dev',
  runtimeCompiler: true,
  plugins: [
    {
      use: '@np-matt/gridsome-source-kentico-kontent',
      options: {
        deliveryClientConfig: {
          projectId: process.env.KENTICO_KONTENT_PROJECT_ID,
        },
        contentItemConfig: {
          contentItems: {
            blog_post: BlogPostContentItem,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-142705115-2',
        beforeFirstHit() {
          Vue.$ga.set('anonymizeIp', true);
        },
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'MattLaw.Dev',
          feed_url: 'https://mattlaw.dev/rss.xml',
          site_url: 'https://mattlaw.dev',
        },
        feedItemOptions: node => ({
          title: node.name,
          description: node.description,
          url: 'https://mattlaw.dev/post/' + node.slug,
          author: 'Matthew Law',
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
  ],
  templates: {
    BlogPost: [
      {
        path: '/post/:slug',
        component: './src/templates/Post.vue',
      },
    ],
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(
        nodeExternals({
          whitelist: [/^vuetify/, /\.css$/, /\?vue&type=style/],
        })
      );
    }
  },
};
