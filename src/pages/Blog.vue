<template>
  <Layout>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <h1>Recent Blogs</h1>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="{ node: blog } in $page.allPost.edges"
          :key="blog.path"
        >
          <BlogPreview
            :title="blog.title"
            :description="blog.description"
            :publishedAt="new Date(blog.published)"
            :tags="blog.tags.map(t => t.title)"
            :slug="blog.path"
            :hero="blog.headlineImage"
          />
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
        headlineImage
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

export default Vue.extend({
  components: { BlogPreview },
  setup() {
    return {
      blogs: [
        {
          slug: 'some-title',
          title: "Some title isn't she lovely, need this to go on to two lines",
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
