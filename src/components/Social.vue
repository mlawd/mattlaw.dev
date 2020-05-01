<template>
  <v-row justify="center">
    <v-btn text icon class="ma-4" @click.prevent="facebook">
      <v-icon large>{{ mdiFacebook }}</v-icon>
    </v-btn>
    <v-btn text icon class="ma-4" @click.prevent="twitter">
      <v-icon large>{{ mdiTwitter }}</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { mdiFacebook, mdiTwitter } from '@mdi/js';

export default {
  mounted() {
    const interval = setInterval(() => {
      if (FB) {
        FB.init({
          appId: '339966533613489',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v4.0',
        });

        clearInterval(interval);
      }
    }, 500);
  },
  methods: {
    facebook() {
      FB.ui(
        {
          method: 'share',
          href: window.location.href,
        },
        function(response) {}
      );
    },
    twitter() {
      window.open(
        'http://twitter.com/share?url=' +
          encodeURIComponent(window.location.href),
        '',
        'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
      );
    },
  },
  setup() {
    return {
      mdiFacebook,
      mdiTwitter,
    };
  },
};
</script>

<style scoped>
.v-btn >>> i {
  font-size: 40px;
}

.flex {
  margin: auto;
}
</style>
