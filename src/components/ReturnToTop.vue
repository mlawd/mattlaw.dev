<template>
  <div v-scroll="onScroll">
    <v-btn
      fab
      fixed
      bottom
      right
      depressed
      v-if="show"
      @click="$vuetify.goTo(0)"
    >
      <i class="fas fa-angle-double-up"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: window.scrollY > 0,
    };
  },
  methods: {
    onScroll(evt) {
      this.show = window.scrollY > 0;
    },
  },
};
</script>
