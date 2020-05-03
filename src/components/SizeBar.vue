<template>
  <div class="side-bar">
    <g-link to="/me">
      <Icon :path="meIcon" color="white" />
      <span>
        Me
      </span>
    </g-link>
    <g-link to="/blog">
      <Icon :path="blogIcon" color="white" />
      <span>
        Blog
      </span>
    </g-link>
    <g-link to="/projects">
      <Icon :path="projectsIcon" color="white" />
      <span>
        Projects
      </span>
    </g-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mdiClipboardAccountOutline, mdiNewspaper, mdiCodeJson } from '@mdi/js';
import Icon from './Icon.vue';

export default Vue.extend({
  components: { Icon },
  data() {
    return {
      meIcon: mdiClipboardAccountOutline,
      blogIcon: mdiNewspaper,
      projectsIcon: mdiCodeJson,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.side-bar {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s;
  overflow: hidden;

  &:hover {
    width: 200px;
  }

  a {
    display: flex;
    align-content: center;
    align-items: center;
    padding: 7px;
    width: 200px;
    color: white;
    font-family: $body-font;
    text-decoration: none;
    font-size: 20px;
    transition: 0.5s;
    background-color: $primary;

    &:hover {
      background-color: $accent;
    }

    span {
      padding: 7px;
    }
  }
}
</style>
