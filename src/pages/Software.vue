<template>
  <layout>
    <thing-content title="Software Development">
      <template>
        <p>
          Before working as a Web Developer, I was a Senior Engineer &amp;
          Technical Lead working on simulation &amp; traning systems.
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
