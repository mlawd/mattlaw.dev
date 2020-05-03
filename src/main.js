import Layout from './layouts/Default.vue';
import VueCompositionApi from '@vue/composition-api';

export default function(Vue, { head }) {
  Vue.component('Layout', Layout);
  Vue.use(VueCompositionApi);

  head.meta.push({
    name: 'description',
    content:
      'Personal portfolio website for Matthew Law, a web & software developer living in Nottingham',
  });

  require('./assets/styles.scss');
}
