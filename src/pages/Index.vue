<template>
  <home-layout>
    <v-container id="jumbotron" :fluid="$vuetify.breakpoint.mdAndUp">
      <jumbotron />
    </v-container>
    <v-container id="intro">
      <intro />
    </v-container>
    <v-container grid-list-md>
      <v-row wrap justify="center">
        <v-col cols="12" md="10" xl="8">
          <h2>Recent Blogs</h2>
        </v-col>
        <v-col cols="12" xl="10">
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(blog, i) of blogs.slice(0, numPreviews)"
              :key="blog.slug"
            >
              <blog-preview :blog="blog" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="blogs.length > numPreviews">
        <v-col cols="12" lg="10">
          <v-list>
            <v-list-item
              v-for="(blog, i) of blogs.slice(numPreviews)"
              :key="blog.slug"
              :to="'/post/' + blog.slug"
            >
              <v-list-item-avatar size="100">
                <g-image :src="blog.hero.url" :alt="blog.hero.name" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ blog.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip color="primary" label class="ma-1">
                    {{ blog.date | date }}
                  </v-chip>
                  <v-chip
                    label
                    v-for="{ name } of blog.tags"
                    :key="name"
                    class="ma-1"
                  >
                    #{{ name }}
                  </v-chip>
                </v-list-item-subtitle>
                <v-list-item-content>
                  {{ blog.description }}
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </home-layout>
</template>

<static-query>
query {
  allBlogPost(sort:{by: "date", order:DESC}) {
    edges {
      node {
				slug
				description
        name
        date
        tags {
          name
        }
        hero {
          url(width:500)
          name
        }
			}
    }
  }
}
</static-query>

<script>
import { computed } from '@vue/composition-api';
import Jumbotron from '../components/Jumbotron.vue';
import Intro from '../components/Intro.vue';
import BlogPreview from '../components/VertBlogPreview.vue';
import HomeLayout from '../layouts/Home.vue';

export default {
  components: { Jumbotron, Intro, BlogPreview, HomeLayout },
  metaInfo: {
    title: 'Welcome',
  },
  data() {
    return {
      numPreviews: 3,
    };
  },
  computed: {
    blogs() {
      return this.$static.allBlogPost.edges.map(({ node }) => {
        node.hero = node.hero[0] || node.hero;
        node.date = new Date(node.date);
        return node;
      });
    },
  },
};
</script>
