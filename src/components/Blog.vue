<template>
  <article>
    <h1>{{ title }}</h1>
    <v-btn outlined rounded v-for="tag of tags" :key="tag" class="ma-1">
      #{{ tag }}
    </v-btn>
    <p class="display-1 text-center font-italic">
      {{ description }}
    </p>
    <g-image v-if="hero" :src="hero.url" :alt="hero.alt" id="hero" />
    <div v-for="(part, i) of body" :key="i" id="content">
      <prismic-rich-text
        v-if="(part.slice_type || part.type) === 'text'"
        :field="part.primary.text"
      />
      <Quote
        v-else-if="(part.slice_type || part.type) === 'quote'"
        :quote="part"
      />
      <pre v-else-if="part.primary.code">
				<code>
{{ part.primary.code[0].text }}
				</code>
			</pre>
    </div>
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
import Quote from './Quote.vue';

export default Vue.extend({
  components: { BlogPreview, Social, ReturnToTop, Quote },
  props: ['title', 'description', 'hero', 'path', 'body', 'tags', 'uid'],
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
      });
    });
  },
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

#content >>> p {
  font-size: 1.5em !important;
  line-height: 1.7em;
  font-weight: 300;
}

#content >>> blockquote {
  border-left: 5px solid cadetblue;
  padding-left: 10px;
  margin-bottom: 20px;
  color: grey;
  font-size: 1.3em !important;
  line-height: 1.5em;
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

img {
  max-width: 100%;
}
</style>
