<template>
  <layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ $page.post.title }}</h1>
          <v-chip class="ma-1">
            Time to read: {{ $page.post.timeToRead }}
            {{ $page.post.timeToRead > 1 ? 'minutes' : 'minute' }}
          </v-chip>
          <v-btn
            outlined
            rounded
            v-for="tag of $page.post.tags"
            :key="tag.id"
            :to="tag.path"
            class="ma-1"
          >
            #{{ tag.id }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p class="display-1 text-center font-italic">
            {{ $page.post.description }}
          </p>
        </v-col>
        <v-col cols="12">
          <g-image :src="$page.post.headlineImage" :alt="$page.post.title" />
        </v-col>
        <v-col lg="8" cols="12">
          <div
            id="content"
            v-html="$page.post.content"
            :class="{ padded: $vuetify.breakpoint.lgAndUp }"
          ></div>
          <ClientOnly>
            <social />
          </ClientOnly>
          <vue-disqus shortname="mattlaw-dev" :identifier="$page.post.title" />
        </v-col>
        <v-col cols="12" lg="4">
          <v-row>
            <v-col
              v-for="(post, i) of $page.posts.edges"
              :key="post.node.title"
              cols="12"
            >
              <blog-preview :reverse="!!(i % 2)" :blog="post.node" simple />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <client-only>
      <return-to-top />
    </client-only>
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
import Social from '../components/Social.vue';
import ReturnToTop from '../components/ReturnToTop.vue';

export default {
  components: { BlogPreview, Social, ReturnToTop },
  metaInfo() {
    const { post } = this.$page;
    return {
      title: post.title,
      meta: [
        { vmid: 'description', name: 'description', content: post.description },
        { vmid: 'og:title', property: 'og:title', content: post.title },
        {
          vmid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: post.description,
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: `https://www.mattlaw.dev${post.headlineImage}`,
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `https://www.mattlaw.dev${post.path}`,
        },
        {
          vmid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://www.mattlaw.dev${post.path}`,
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
  font-weight: 300;
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

#content >>> pre code::before {
  content: '';
}

#content >>> code.language-text {
  color: #ccc;
  line-height: 1.7em;
}

.v-btn {
  text-transform: none;
}

.flex {
  margin-top: 10px;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
}
</style>
