module.exports = {
  siteName: 'MattLaw.dev',
  siteUrl: 'https://www.mattlaw.dev',
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
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
      externalLinksRel: ['noopener'],
      autolinkHeadings: false
    },
  },
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:title',
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/img');
    config.resolve.alias.set('@blogs', '@/../content/blog');
  },
};
