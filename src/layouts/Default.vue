<template>
  <v-app>
    <toolbar />
    <slot />
    <client-only>
      <cookie-consent />
    </client-only>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/Footer.vue';
import CookieConsent from '../components/CookieConsent.vue';
import Toolbar from '../components/Toolbar.vue';

export default {
  components: {
    AppFooter,
    CookieConsent,
    Toolbar,
  },
};
</script>

<style scoped>
.title {
  font-size: 2em !important;
}

#app {
  background: none;
}
</style>
