// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MattLaw.Dev',
	titleTemplate: '%s - MattLaw.dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        route: '/post/:slug',
				remark: {
					plugins: [
            '@gridsome/remark-prismjs'
					],
				},
				refs: {
					tags: {
						typeName: 'Tag',
						route: '/tag/:id',
						create: true,
					}
				}
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-142705115-2'
      }
    }
	]
}
