<template>
  <v-app>
    <v-app-bar color="primary" dense fixed :value="showBar">
      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn to="/" icon v-on="on">
              <v-icon>{{ mdiHome }}</v-icon>
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
    <transition name="fade" appear>
      <v-content>
        <slot />
      </v-content>
    </transition>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  mdiHome,
  mdiTwitter,
  mdiGithub,
  mdiLinkedin,
  mdiClipboardAccountOutline,
  mdiNewspaper,
  mdiCodeJson,
} from '@mdi/js';

export default Vue.extend({
  setup(_, { root: { $route } }) {
    return {
      mdiHome,
      mdiTwitter,
      mdiGithub,
      mdiLinkedin,
      mdiClipboardAccountOutline,
      mdiNewspaper,
      mdiCodeJson,
      showBar: $route.name !== 'home',
    };
  },
});
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>
