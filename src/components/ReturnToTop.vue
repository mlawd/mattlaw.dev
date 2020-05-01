<template>
  <div v-scroll="onScroll">
    <v-btn fab fixed bottom right v-if="show" @click="$vuetify.goTo(0)">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiChevronDoubleUp } from '@mdi/js';

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
  setup() {
    return {
      icon: mdiChevronDoubleUp 
    }
  }
};
</script>
