<template>
  <Layout>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <h1>Recent Blogs</h1>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="12" md="4" lg="3" v-for="blog in blogs" :key="blog.slug">
          <BlogPreview
            :title="blog.title"
            :description="blog.description"
            :publishedAt="blog.publishedAt"
            :tags="blog.tags"
            :slug="blog.slug"
            :hero="blog.hero"
          />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import BlogPreview from '../components/BlogPreview.vue';

export default Vue.extend({
  components: { BlogPreview },
  setup() {
    return {
      blogs: [
        {
          slug: 'some-title',
          title: "Some title isn't she lovely",
          publishedAt: new Date(),
          hero: {
            url: '~/assets/img/hucknall.jpg',
            description: 'Lorem ipsum',
          },
          description:
            "Lorem ipsum dolor sit amet, why isn't this easier to test? Honestly let' look in to it",
          tags: ['csharp', 'dev', 'agile'],
        },
        {
          slug: 'some-title-two',
          title: 'Some title',
          publishedAt: new Date(),
          hero: {
            url: '~/assets/img/hucknall.jpg',
            description: 'Lorem ipsum',
          },
          description:
            "Lorem ipsum dolor sit amet, why isn't this easier to test? Honestly let' look in to it",
          tags: ['csharp', 'dev', 'agile'],
        },
        {
          slug: 'some-title-three',
          title: "Some title isn't she lovely",
          publishedAt: new Date(),
          hero: {
            url: '~/assets/img/hucknall.jpg',
            description: 'Lorem ipsum',
          },
          description:
            "Lorem ipsum dolor sit amet, why isn't this easier to test? Honestly let' look in to it",
          tags: ['csharp', 'dev', 'agile'],
        },
        {
          slug: 'some-title-four',
          title: 'Some title',
          publishedAt: new Date(),
          hero: {
            url: '~/assets/img/hucknall.jpg',
            description: 'Lorem ipsum',
          },
          description:
            "Lorem ipsum dolor sit amet, why isn't this easier to test? Honestly let' look in to it",
          tags: ['csharp', 'dev', 'agile'],
        },
      ],
    };
  },
});
</script>
