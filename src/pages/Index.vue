<template>
  <home-layout>
    <v-container id="jumbotron" grid-list-lg fluid dark>
      <jumbotron />
    </v-container>
    <v-container id="intro" fluid>
      <intro />
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md10 offset-md1>
          <h2>Recent Blogs</h2>
          <v-layout column>
            <blog-preview
              v-for="(post, i) of $page.posts.edges"
              :key="post.node.title"
              :reverse="!!(i % 2)"
              :blog="post.node"
            />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </home-layout>
</template>

<page-query>
query {
	posts: allPost (limit: 5, sort: { by: "published" }) {
		edges {
			node {
				title
				description
				path
				timeToRead
				headlineImage
				tags {
					id
				}
			}
		}
  }
}
</page-query>

<script scoped>
import Jumbotron from '../components/Jumbotron.vue';
import Intro from '../components/Intro.vue';
import BlogPreview from '../components/BlogPreview.vue';
import HomeLayout from '../layouts/Home.vue';

export default {
  components: { Jumbotron, Intro, BlogPreview, HomeLayout },
  metaInfo: {
    title: 'Welcome',
  },
};
</script>
