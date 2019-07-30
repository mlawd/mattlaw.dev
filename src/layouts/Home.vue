<template>
  <v-app dark>
    <slot />
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
#app {
  background: url('/img/prism.png') repeat;
}
</style>
