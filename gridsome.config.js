// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  siteName: 'MattLaw.Dev',
  titleTemplate: '%s - MattLaw.dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: ['@gridsome/remark-prismjs'],
        },
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
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
        contentTypeName: 'Post',
        feedOptions: {
          title: 'MattLaw.Dev',
          feed_url: 'https://mattlaw.dev/rss.xml',
          site_url: 'https://mattlaw.dev',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mattlaw.dev' + node.path,
          author: 'Matthew Law',
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: 'gridsome-source-graphql-prismic',
      options: {
        url: 'https://mlblog.prismic.io',
        fieldName: 'Prismic',
        typeName: 'Prismic',
        useMasterRef: true,
      },
    },
  ],
  templates: {
    Post: '/post/:title',
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
