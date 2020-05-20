<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" xl="8">
          <h1>Recent Blogs</h1>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col
          cols="12"
          sm="6"
          lg="4"
          xl="3"
          v-for="({ node: blog }, i) in $page.allPost.edges"
          :key="blog.path"
        >
          <div
            class="fade-in"
            :style="{ 'animation-delay': `calc(0.3s * ${i}` }"
          >
            <BlogPreview
              :title="blog.title"
              :description="blog.description"
              :publishedAt="new Date(blog.published)"
              :tags="blog.tags"
              :slug="blog.path"
              :hero="blog.heroUrl"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allPost(sortBy:"published", order:DESC) {
    edges {
      node {
        title
        path
				heroUrl
				heroCaption
        description
        timeToRead
        tags {
          title
        }
        published
      }
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';
import BlogPreview from '../components/BlogPreview.vue';
import { setMeta } from '../set-meta';

export default Vue.extend({
  components: { BlogPreview },
  metaInfo() {
    const keywords = Array.from(
      this.$page.allPost.edges.reduce((acc, { node }) => {
        node.tags.forEach(t => acc.add(t.title));
        return acc;
      }, new Set(['software developer', 'web developer', 'developer', 'vuejs', 'dotnet', '.net', 'javascript', 'blog', 'portfolio']))
    );
    return setMeta(
      'Recent Blogs about Software Development',
      "My name is Matt Law and I'm a Software Developing in Nottingham specialising in all things web. Particularly JavaScript, VueJS, C#, .NET and all things process driven. Here is a place for my blog and portfolio where you can view examples of my work and thoughts as I navigate daily development practices.",
      keywords,
      '/blog'
    );
  },
});
</script>

<style lang="scss" scoped>
@keyframes fadein {
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fadein 0.5s forwards;
  opacity: 0;
}
</style>
