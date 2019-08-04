<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn class="title-btn" to="/" flat>Matt Law [.dev]</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
