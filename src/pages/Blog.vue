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
          md="6"
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
					path
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

export default Vue.extend({
  components: { BlogPreview },
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
