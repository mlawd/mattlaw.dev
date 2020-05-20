<template>
  <Layout>
    <v-container fluid class="mb-8">
      <v-row class="mb-8">
        <v-col sm="2" offset-lg="1" class="pt-6 text-right">
          <Social
            :url="`https://mattlaw.dev${$page.post.path}`"
            :collapse="$vuetify.breakpoint.xsOnly"
            :title="$page.post.title"
            :description="$page.post.description"
            :tags="$page.post.tags.map(t => t.title)"
          />
        </v-col>
        <v-col cols="12" sm="10" md="8" lg="6">
          <article class="article">
            <h1 class="mb-8">{{ $page.post.title }}</h1>
            <div class="mb-3 mt-3">
              <v-chip label color="primary" dark>
                {{ new Date($page.post.published).toLocaleDateString() }}
              </v-chip>
              <v-chip label>
                Time to read: {{ $page.post.timeToRead }} minutes
              </v-chip>
              <br v-if="$vuetify.breakpoint.xsOnly" />
              <v-chip
                label
                v-for="tag of $page.post.tags"
                :key="tag.title"
                :to="tag.path"
                outlined
              >
                {{ tag.title }}
              </v-chip>
            </div>
            <p>{{ $page.post.description }}</p>
            <figure class="mb-8">
              <g-image
                :src="require(`!!assets-loader!@blogs/${$page.post.heroUrl}`)"
                :alt="$page.post.title"
              />
              <figcaption
                v-html="$page.post.heroCaption"
                class="text-center"
              ></figcaption>
            </figure>
            <div v-html="$page.post.content"></div>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    description
    content
		heroUrl
		heroCaption
    timeToRead
    path  
    published
    timeToRead
    tags {
			title
			path
    }
  }
}
</page-query>

<script>
import Social from '../components/Social.vue';
import { setMeta } from '@/set-meta';

export default {
  components: { Social },
  metaInfo() {
    const { post } = this.$page;
    return setMeta(
      post.title,
      post.description,
      post.tags,
      post.path,
      post.heroUrl
    );
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.v-chip {
  margin-right: 5px;
  margin-top: 5px;
}

.article {
  ::v-deep {
    h2,
    h3,
    h4 {
      position: relative;

      &:hover {
        &::before {
          position: absolute;
          left: -50px;
          content: '#';
          color: var(--v-primary-base);
        }
      }
    }

    ol,
    ul {
      margin-left: 20px;
    }

    li {
      font-size: 24px;
    }

    blockquote {
      font-style: italic;
      border-left: 5px solid var(--v-primary-base);
      padding-left: 10px;
      margin-bottom: 20px;
    }

    pre {
      background-color: transparent;

      code {
        width: 100%;

        &::before {
          content: '';
        }
      }
    }
  }
}
</style>
