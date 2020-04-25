<template>
  <article>
    <h1>{{ title }}</h1>
    <v-chip color="primary" label class="ma-1">
      {{ date | date }}
    </v-chip>
    <v-chip label v-for="tag of tags" :key="tag" class="ma-1">
      #{{ tag }}
    </v-chip>
    <p class="display-1 text-center font-italic">
      {{ description }}
    </p>
    <g-image v-if="hero" :src="hero.url" :alt="hero.alt" id="hero" />
    <RichText :html="body" />
    <ClientOnly>
      <social />
    </ClientOnly>
  </article>
</template>

<script>
import Vue from 'vue';
import BlogPreview from './BlogPreview.vue';
import Social from './Social.vue';
import ReturnToTop from './ReturnToTop.vue';
import RichText from './RichText.vue';

export default Vue.extend({
  components: { BlogPreview, Social, ReturnToTop, RichText },
  props: [
    'title',
    'description',
    'hero',
    'path',
    'body',
    'tags',
    'uid',
    'date',
  ],
});
</script>

<style scoped>
h1 {
  padding-bottom: 20px;
}

img {
  margin-bottom: 20px;
}

#content.padded {
  padding-right: 3rem;
}

#content >>> p,
#content >>> li {
  font-size: 1.5em !important;
  line-height: 1.7em;
  font-weight: 300;
}

#content >>> ul {
  margin-bottom: 20px;
  margin-left: 20px;
}

#content >>> blockquote {
  border-left: 5px solid cadetblue;
  padding-left: 10px;
  margin-bottom: 20px;
  color: grey;
}

#content >>> h2 a {
  text-decoration: none;
  color: black;
}

#content >>> h2 {
  position: relative;
}

#content >>> h2:hover::before {
  content: '#';
  position: absolute;
  left: -50px;
  color: cadetblue;
}

#content >>> figcaption {
  text-align: center;
  margin-bottom: 2rem;
}

#content >>> pre code::before {
  content: '';
}

#content >>> p > code {
  background-color: var(--v-primary-base);
  color: black;
  font-weight: 400;
}

#content >>> code.language-text {
  color: #ccc;
  line-height: 1.7em;
}

.v-btn {
  text-transform: none;
}

.flex {
  margin-top: 10px;
  margin-bottom: 10px;
}

#content >>> img,
img {
  max-width: 100%;
}
</style>
