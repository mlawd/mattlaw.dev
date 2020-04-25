<template>
  <g-image :src="node.url" :alt="node.description" />
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
};
</script>
