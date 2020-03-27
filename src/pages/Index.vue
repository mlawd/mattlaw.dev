<template>
  <home-layout>
    <v-container id="jumbotron" grid-list-lg fluid>
      <jumbotron />
    </v-container>
    <v-container id="intro" fluid>
      <intro />
    </v-container>
    <v-container grid-list-md>
      <v-row wrap justify="center">
        <v-col md="10">
          <h2>Recent Blogs</h2>
        </v-col>
        <v-row justify="center" align="center">
          <v-col
            md="4"
            v-for="(post, i) of $page.Prismic.allBlogposts.edges"
            :key="post.node._meta.uid"
          >
            <blog-preview :blog="post.node" />
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </home-layout>
</template>

<page-query>
query {
  Prismic {
    allBlogposts(first: 3, sortBy: meta_lastPublicationDate_DESC) {
      edges {
        node {
          title
					hero
					description
          _meta {
						tags
						uid
            lastPublicationDate
          }
        }
      }
    }
  }
}
</page-query>

<script scoped>
import Jumbotron from '../components/Jumbotron.vue';
import Intro from '../components/Intro.vue';
import BlogPreview from '../components/VertBlogPreview.vue';
import HomeLayout from '../layouts/Home.vue';

export default {
  components: { Jumbotron, Intro, BlogPreview, HomeLayout },
  metaInfo: {
    title: 'Welcome',
  },
};
</script>
