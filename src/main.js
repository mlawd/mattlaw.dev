import Layout from './layouts/Default.vue';
import VueCompositionApi from '@vue/composition-api';
import Vuetify from 'vuetify/lib/framework';
import 'prismjs/themes/prism-coy.css';

export default function(Vue, { head, appOptions }) {
  Vue.component('Layout', Layout);
  Vue.use(VueCompositionApi);

  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#224f51',
          secondary: '#c45931',
          accent: '#f60d55',
        },
      },
    },
  });

  require('./assets/styles.scss');
}
