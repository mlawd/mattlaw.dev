<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" xl="6" class="article">
          <article>
            <h1>{{ $page.post.title }}</h1>
            <g-image
              :src="
                require(`!!assets-loader!@blogs/${$page.post.headlineImage}`)
              "
              :alt="title"
            />
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
    headlineImage
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
  // background-color: white;

  img {
    width: 100%;
  }
}
</style>
