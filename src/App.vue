<template>
  <v-app>
    <v-app-bar color="primary" dark dense fixed :value="showBar">
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn to="/" icon v-on="on">
              <v-icon dark>{{ mdiHome }}</v-icon>
            </v-btn>
          </template>
          <span>Home</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn to="/about" icon v-on="on">
              <v-icon>{{ mdiClipboardAccountOutline }}</v-icon>
            </v-btn>
          </template>
          <span>About</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn to="/blog" icon v-on="on">
              <v-icon>{{ mdiNewspaper }}</v-icon>
            </v-btn>
          </template>
          <span>Blog</span>
        </v-tooltip>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              href="https://github.com/np-matt"
              target="_blank"
              role="button"
              ariaLabel="GitHub"
              rel="noopener"
              v-on="on"
            >
              <v-icon>{{ mdiGithub }}</v-icon>
            </v-btn>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              href="https://twitter.com/Northern_Pariah"
              target="_blank"
              role="button"
              ariaLabel="Twitter"
              rel="noopener"
              v-on="on"
            >
              <v-icon>{{ mdiTwitter }}</v-icon>
            </v-btn>
          </template>
          <span>Twitter</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              href="https://www.linkedin.com/in/mattlawdev"
              target="_blank"
              role="button"
              ariaLabel="LinkedIn"
              rel="noopener"
              v-on="on"
            >
              <v-icon>{{ mdiLinkedin }}</v-icon>
            </v-btn>
          </template>
          <span>LinkedIn</span>
        </v-tooltip>
      </v-toolbar-items>
    </v-app-bar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <v-btn fab fixed bottom right v-if="isDev">
      {{ $vuetify.breakpoint.name }}
    </v-btn>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import {
  mdiHome,
  mdiTwitter,
  mdiGithub,
  mdiLinkedin,
  mdiClipboardAccountOutline,
  mdiNewspaper,
  mdiCodeJson,
} from '@mdi/js';
import { watch, ref } from '@vue/composition-api';

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
  setup(
    _,
    {
      root: { $route },
    }
  ) {
    const showBar = ref($route.name !== 'home');

    watch('$route.name', newVal => {
      showBar.value = newVal !== 'home';
    });

    return {
      mdiHome,
      mdiTwitter,
      mdiGithub,
      mdiLinkedin,
      mdiClipboardAccountOutline,
      mdiNewspaper,
      mdiCodeJson,
      showBar,
      isDev: process.env.NODE_ENV !== 'production',
    };
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
