<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" xl="8">
          <h1>{{ tag | capitalize }} Posts</h1>
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
				path
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
import { setMeta } from '../set-meta';

export default {
  components: { BlogPreview },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    tag() {
      return this.$page.allTag.edges[0].node.title;
    },
    path() {
      return this.$page.allTag.edges[0].node.path;
    },
    posts() {
      return this.$page.allTag.edges[0].node.belongsTo.edges;
    },
  },
  metaInfo() {
    return setMeta(
      `Blogs about ${this.tag}`,
      `Read all my thoughts about ${this.tag}`,
      [this.tag],
      this.path
    );
  },
};
</script>
