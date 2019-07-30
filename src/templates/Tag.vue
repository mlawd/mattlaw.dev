<template>
  <layout>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex>
            <h1 class="text-capitalize">{{ $page.tag.id }}</h1>
            <blog-preview
              v-for="(post, i) of $page.tag.belongsTo.edges"
              :key="post.node.title"
              :reverse="!!(i % 2)"
              :blog="post.node"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </layout>
</template>

<page-query>
query Tag ($path: String) {
  tag: tag (path: $path) {
		id
		belongsTo {
			totalCount
			edges {
				node {
					...on Post {
						title
						timeToRead
						headlineImage
						description
						published
						path
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
};
</script>
