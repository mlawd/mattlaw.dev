<template>
  <Prism :language="lang" :code="snippet" />
</template>

<script>
import Prism from 'vue-prismjs';
import 'prismjs/themes/prism-coy.css';

export default {
  components: { Prism },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lang() {
      return this.node.language[0].codename;
    },
    snippet() {
      return this.node.snippet;
    },
  },
};
</script>
