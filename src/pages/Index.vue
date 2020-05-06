<template>
  <Layout>
    <v-container fill-height>
      <v-row class="ma-0" justify="center">
        <v-col cols="12" xl="8" class="text-right">
          <g-image src="~/assets/img/avatar.png" width="200" height="200" />
          <h1 class="pa-2 fade-slide wait-2">Matt Law</h1>
          <h2 class="pb-2 pr-2 pb-md-4 fade-slide wait-4">.dev</h2>
          <Icon :path="meIcon" to="/about" class="fade-in wait-3">About</Icon>
          <Icon :path="blogIcon" to="/blog" class="fade-in wait-4">Blog</Icon>
          <Icon
            :path="mdiGithub"
            to="https://github.com/np-matt"
            target="_blank"
            role="button"
            ariaLabel="GitHub"
            rel="noopener" class="fade-in wait-5"
          >
            GitHub
          </Icon>
          <Icon
            :path="mdiTwitter"
            to="https://twitter.com/Northern_Pariah"
            target="_blank"
            role="button"
            ariaLabel="Twitter"
            rel="noopener" class="fade-in wait-6"
          >
            Twitter
          </Icon>
          <Icon
            :path="mdiLinkedin"
            to="https://www.linkedin.com/in/mattlawdev"
            target="_blank"
            role="button"
            aria-label="LinkedIn"
            rel="noopener" class="fade-in wait-7"
          >
            LinkedIn
          </Icon>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  mdiTwitter,
  mdiGithub,
  mdiLinkedin,
  mdiClipboardAccountOutline,
  mdiNewspaper,
  mdiCodeJson,
} from '@mdi/js';
import Icon from '../components/Icon.vue';

export default Vue.extend({
  components: { Icon },
  setup() {
    return {
      mdiTwitter,
      mdiGithub,
      mdiLinkedin,
      meIcon: mdiClipboardAccountOutline,
      blogIcon: mdiNewspaper,
      projectsIcon: mdiCodeJson,
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  border-radius: 200px;
  width: 150px;
  border: 5px solid var(--v-primary-base);
}

h1,
h2 {
  margin: 0;
}

@keyframes slideY {
  100% {
    transform: translateY(0);
  }
}

@keyframes fadein {
  100% {
    opacity: 1;
  }
}

.slide-down{
  animation: slideY 0.5s forwards;
  transform: translateY(-20px);
}

.fade-in {
  animation: fadein 0.5s forwards;
  opacity: 0;
}

.fade-slide{
  opacity: 0;
  transform: translateY(-20px);
  animation: fadein 0.5s forwards, slideY 0.5s forwards;
}

@for $i from 1 through 10 {
  .wait-#{$i} {
    animation-delay: $i * 0.1s;
  }
}
</style>
