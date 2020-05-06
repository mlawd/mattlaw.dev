<template>
  <Layout>
    <v-container>
      <article class="article">
        <v-row>
          <v-col cols="12" md="10" xl="8">
            <h1 class="mb-2">{{ $page.post.title }}</h1>
            <v-chip label color="accent">
              {{ new Date($page.post.published).toLocaleDateString() }}
            </v-chip>
            <v-chip
              label
              v-for="tag of $page.post.tags.map(t => t.id)"
              :key="tag"
            >
              #{{ tag }}
            </v-chip>
          </v-col>
          <v-col cols="12" md="10" xl="7">
            <figure>
              <g-image
                :src="require(`!!assets-loader!@blogs/${$page.post.heroUrl}`)"
                :alt="$page.post.title"
              />
              <figcaption
                v-html="$page.post.heroCaption"
                class="text-center"
              ></figcaption>
            </figure>
          </v-col>
          <v-col cols="12" md="10" xl="5">
            <v-chip label color="accent" class="mb-4">
              Time to read: {{ $page.post.timeToRead }} minutes
            </v-chip>
            <div v-html="$page.post.content"></div>
          </v-col>
        </v-row>
      </article>
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
      id
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    const { post } = this.$page;
    return {
      title: post.title,
      meta: [
        { vmid: 'description', name: 'description', content: post.description },
        { vmid: 'og:title', property: 'og:title', content: post.title },
        { vmid: 'author', name: 'author', content: 'Matt Law' },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: post.tags.reduce((acc, cur) => {
            acc += acc === '' ? cur.id : `, ${cur.id}`;
            return acc;
          }, ''),
        },
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
          content: `https://www.mattlaw.dev/assets/static/content/blog/${
            post.heroUrl
          }`,
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `https://www.mattlaw.dev${post.path}`,
        },
        {
          vmid: 'twitter:card',
          name: 'twitter:card',
          content: post.description,
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

    a {
      color: black;
    }

    p {
      color: black;
    }

    blockquote {
      font-style: italic;
      border-left: 5px solid var(--v-primary-base);
      padding-left: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
