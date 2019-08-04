<template>
  <v-snackbar v-model="show" :timeout="0" multi-line color="info">
    <span>
      We use cookies to track and improve user experience on this site. For more
      information visit our <a href="/privacy-policy">Privacy Policy</a>
    </span>
    <v-btn @click.prevent="acceptCookies" dark>
      Accept all cookies
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: !!!window.localStorage.getItem('cookie-consent'),
    };
  },
  methods: {
    acceptCookies() {
      window.localStorage.setItem('cookie-consent', 'true');
      this.show = false;
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
</style>
