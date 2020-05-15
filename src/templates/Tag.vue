<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" xl="8">
          <h1>{{ tag }}</h1>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="({ node: blog }, i) in posts"
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
query ($id: ID!) {
  allTag(filter: { id: { eq: $id } }){
	  edges {
			node {
		    title
			  belongsTo {
			    edges {
			      node {
			        ... on Post {
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
			}
		}
	}
}
</page-query>

<script>
import BlogPreview from '../components/BlogPreview.vue';

export default {
  components: { BlogPreview },
  computed: {
    tag() {
      return this.$page.allTag.edges[0].node.title;
    },
    posts() {
      return this.$page.allTag.edges[0].node.belongsTo.edges;
    },
  },
  metaInfo() {
    return {
      title: `Blogs about ${this.tag}`,
    };
  },
};
</script>
