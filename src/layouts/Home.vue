<template>
  <v-app dark>
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

export default {
  components: {
    AppFooter,
    CookieConsent,
  },
};
</script>

<style scoped>
#app {
  background: url('/img/prism.webp') repeat;
}
</style>
