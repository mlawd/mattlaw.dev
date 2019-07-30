<template>
  <layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>{{ $page.post.title }}</h1>
          <v-chip>
            Time to read: {{ $page.post.timeToRead }}
            {{ $page.post.timeToRead > 1 ? 'minutes' : 'minute' }}
          </v-chip>
          <v-btn
            outline
            round
            v-for="tag of $page.post.tags"
            :key="tag.id"
            :to="tag.path"
          >
            #{{ tag.id }}
          </v-btn>
        </v-flex>
        <v-flex xs12>
          <v-img :src="$page.post.headlineImage" />
        </v-flex>
        <v-flex lg8>
          <div
            id="content"
            v-html="$page.post.content"
            :class="{ padded: $vuetify.breakpoint.lgAndUp }"
          ></div>
        </v-flex>
        <v-flex lg4>
          <v-layout column>
            <v-flex
              v-for="(post, i) of $page.posts.edges"
              :key="post.node.title"
              xs12
            >
              <blog-preview
                :reverse="!!(i % 2)"
                :blog="post.node"
                no-description
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
		description
    content
		headlineImage
		timeToRead
		path	
		tags {
			id
			path
		}
  }
	posts: allPost (
		limit: 5
		filter: {
			path: { ne: $path }
		}
		sort: {
			by: "published"
		}
	) {
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

<script>
import BlogPreview from '../components/BlogPreview.vue';

export default {
  components: { BlogPreview },
  metaInfo() {
    const { post } = this.$page;
    return {
      title: post.title,
      meta: [
        { vmid: 'description', name: 'description', content: post.description },
        { vmid: 'og:title', name: 'og:title', content: post.title },
        {
          vmid: 'og:description',
          name: 'og:description',
          content: post.description,
        },
        {
          vmid: 'og:image',
          name: 'og:image',
          content: `https://www.mattlaw.dev${post.headlineImage}`,
        },
        {
          vmid: 'og:url',
          name: 'og:url',
          content: `https://www.mattlaw.dev${post.path}`,
        },
        {
          vmid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  padding-bottom: 20px;
}

#content.padded {
  padding-right: 3rem;
}

#content >>> p {
  font-size: 1.5em !important;
  line-height: 1.7em;
  font-weight: 200;
}

#content >>> blockquote {
  border-left: 5px solid cadetblue;
  padding-left: 10px;
  font-style: italic;
  color: grey;
}

#content >>> h2 a {
  text-decoration: none;
  color: black;
}

#content >>> h2 {
  position: relative;
}

#content >>> h2:hover::before {
  content: '#';
  position: absolute;
  left: -50px;
  color: cadetblue;
}

#content >>> figcaption {
  text-align: center;
  margin-bottom: 2rem;
}

.v-btn {
  text-transform: none;
}

.flex {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
