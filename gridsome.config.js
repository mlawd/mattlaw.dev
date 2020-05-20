module.exports = {
  siteName: 'MattLaw.dev',
  siteUrl: 'https://mattlaw.dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
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
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
          },
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
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
      externalLinksRel: ['noopener'],
      autolinkHeadings: false,
    },
  },
  templates: {
    Post: '/blog/:title',
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/img');
    config.resolve.alias.set('@blogs', '@/../content/blog');
  },
};
