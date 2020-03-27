<template>
  <layout>
    <Post
      v-if="title != ''"
      :title="title"
      :description="description"
      :hero="hero"
      :path="path"
      :body="body"
      :tags="tags"
      :uid="uid"
      :similar="$context.similar"
    />
    <client-only>
      <return-to-top />
    </client-only>
  </layout>
</template>

<script>
import Post from '../../../components/Post.vue';
import ReturnToTop from '../../../components/ReturnToTop.vue';

export default {
  components: { Post, ReturnToTop },
  data() {
    return {
      title: '',
      description: '',
      hero: '',
      path: '',
      body: '',
      tags: [],
      uid: '',
    };
  },
  mounted() {
    const { uid } = this.$route.params;
    this.$prismic.client.getSingle('blogpost').then(({ data, tags }) => {
      this.title = data.title[0].text;
      this.hero = data.hero;
      this.body = data.body;
      this.tags = tags;
      this.description = data.description[0].text;
      this.uid = uid;
      this.$nextTick(() => {
        document.querySelectorAll('pre code').forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    });
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
        { vmid: 'og:title', property: 'og:title', content: this.title },
        {
          vmid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: `https://www.mattlaw.dev${this.hero.url}`,
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `https://www.mattlaw.dev/prismic/${this.path}`,
        },
        {
          vmid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://www.mattlaw.dev/prismic/${this.path}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  padding-bottom: 20px;
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
  font-style: italic;
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
