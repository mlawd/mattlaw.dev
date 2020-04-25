<template>
  <h1>Hello world {{ uid }}</h1>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    console.log('hello world');
  },
  setup(
    _,
    {
      root: { $route },
    }
  ) {
    return {
      uid: $route.params.uid,
    };
  },
});
</script>
