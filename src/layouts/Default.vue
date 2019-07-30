<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn class="title-btn" to="/" flat>Matt Law [.dev]</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <slot />
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
nav {
  background: none !important;
  box-shadow: none !important;
}

.title {
  font-size: 2em !important;
}

#app {
  background: none;
}

.title-btn {
  text-transform: none;
  font-weight: 100;
  font-size: 2em;
}
</style>

<script>
export default {
  methods: {
    mounted() {
      console.log('hello world');
    },
  },
};
</script>
