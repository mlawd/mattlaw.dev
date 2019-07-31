// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';
import 'prismjs/themes/prism-tomorrow.css';

import './assets/styles.css';

export default function (Vue, { router, head, isClient }) {
  head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Darker+Grotesque|PT+Sans+Narrow:700&display=swap',
	});

	head.link.push({
		rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
    integrity: 'sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E',
		crossorigin: 'anonymous',
	});

	head.meta.push({
		name: 'description',
		content: 'A person site for a Software developer currently working as a Web Developer in Nottingham',
	});

	head.script.push({
		async: true,
		defer: true,
		src: 'https://connect.facebook.net/en_US/sdk.js'
	});

  Vue.use(Vuetify, {
    theme: {
      primary: '#5f9ea0',
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
    },
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}