<template>
  <v-app>
    <v-app-bar elevation="0">
      <v-toolbar-items>
        <v-btn text large class="title-btn" to="/">Matt Law [.dev]</v-btn>
      </v-toolbar-items>
    </v-app-bar>
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
  mounted() {
    this.$vuetify.theme.dark = false;
  },
};
</script>

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
}
</style>
