<template>
  <layout>
    <thing-content title="Web Development">
      <template>
        <p>
          My current role is that of Web Developer for a company called
          Solutions for Retail Brands.
        </p>
      </template>
    </thing-content>
  </layout>
</template>

<script>
import ThingContent from '../components/Content.vue';
import { setMetadata } from '../setMetadata';

export default {
  components: { ThingContent },
  metaInfo() {
    console.log(this);
    return setMetadata(
      'Web Development',
      'An overview of my experience in Web Development',
      '/web-development'
    );
  },
};
</script>
