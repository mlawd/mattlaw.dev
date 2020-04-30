<template>
  <v-lazy-image
    :srcset="srcset"
    :alt="node.description"
    sizes="(min-width: 1904px) 1166px, (min-width: 1262px) 766px, (min-width: 960px) 726px, 100vw"
    :src="node.url"
  />
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    srcset() {
      return `${this.node.url_400} 400w, ${this.node.url_800} 800w, ${
        this.node.url
      } 1200w`;
    },
  },
};
</script>
