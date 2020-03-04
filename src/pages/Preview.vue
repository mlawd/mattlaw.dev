<template>
  <h1>Hello Preview</h1>
</template>

<script>
export default {
  beforeCreate() {
    const { token } = this.$route.query;

    this.$prismic.client
      .previewSession(token, this.$prismic.linkResolver, '/')
      .then(url => {
        this.$router.push(url);
      });
  },
};
</script>
