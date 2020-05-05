<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" xl="6" class="article">
          <article>
            <h1>{{ $page.post.title }}</h1>
            <figure class="mb-8">
              <g-image
                :src="require(`!!assets-loader!@blogs/${$page.post.heroUrl}`)"
                :alt="title"
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
    tags {
      id
    }
  }
}
</page-query>

<style lang="scss" scoped>
.article {
  img {
    width: 100%;
  }

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
