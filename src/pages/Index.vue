<template>
  <Layout>
    <div class="container fill">
      <div class="row row--align-items-center">
        <div class="col text-center">
          <g-image src="~/assets/img/avatar.png" width="200" height="200" />
          <h1 class="pa-2">Matt Law</h1>
          <h2 class="pb-2 pb-md-4">.dev</h2>
          <div class="row row--justify-content-center">
            <Icon :path="meIcon" to="/me"> Me</Icon>
            <Icon :path="blogIcon" to="/blog"> Blog </Icon>
            <Icon :path="projectsIcon" to="/projects"> Projects</Icon>
            <Icon
              :path="mdiGithub"
              to="https://github.com/np-matt"
              target="_blank"
              role="button"
              ariaLabel="GitHub"
              rel="noopener"
            >
              GitHub
            </Icon>
            <Icon
              :path="mdiTwitter"
              to="https://twitter.com/Northern_Pariah"
              target="_blank"
              role="button"
              ariaLabel="Twitter"
              rel="noopener"
            >
              Twitter
            </Icon>
            <Icon
              :path="mdiLinkedin"
              to="https://www.linkedin.com/in/mattlawdev"
              target="_blank"
              role="button"
              aria-label="LinkedIn"
              rel="noopener"
            >
              LinkedIn
            </Icon>
          </div>
        </div>
      </div>
    </div>
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
@import '~/assets/variables.scss';

img {
  border-radius: 200px;
  width: 150px;
  border: 5px solid $primary;

  @media (min-width: $md) {
    width: 200px;
  }
}

.fill {
  height: 100vh;
}

.spacer {
  width: 20px;
  display: inline-block;
}

.link {
  display: inline-block;
  font-size: 24px;
  color: black;
  text-decoration: none;
  width: 80px;
  flex-grow: 1;

  &--right {
    text-align: left;
  }

  &--left {
    text-align: right;
  }
}
</style>
