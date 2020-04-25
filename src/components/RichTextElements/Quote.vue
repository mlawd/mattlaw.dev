<template>
  <blockquote v-html="node.quote"></blockquote>
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

<style>
blockquote {
  border-left: 5px solid cadetblue;
  padding-left: 10px;
  margin-bottom: 20px;
  color: grey;
}
</style>
