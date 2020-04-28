<template>
  <v-card class="zoom" :to="'post/' + blog.slug">
    <v-card-title class="d-block">
      <p class="headline">{{ blog.name }}</p>
      <v-chip label color="primary" class="ma-1">
        {{ blog.date | date }}
      </v-chip>
    </v-card-title>
    <div class="overview">
      <g-image :src="blog.hero.url" :alt="blog.hero.name" />
      <div class="d-flex" :class="{ hoverable: $vuetify.breakpoint.mdAndUp }">
        <p class="text-center mb-0 pa-lg-4">
          {{ blog.description }}
        </p>
      </div>
    </div>
    <v-card-text class="tags">
      <v-chip label v-for="{ name } of blog.tags" :key="name" class="ma-1">
        #{{ name }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.headline {
  word-break: break-word;
  display: block;
  height: 2em;
}

.zoom {
  transition: 0.2s;

  .overview {
    position: relative;
    overflow: hidden;

    > div {
      transition: 0.2s;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 5px 10px;
      height: 100%;
      width: 100%;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      top: 0;

      &.hoverable {
        top: 100%;
      }
    }
  }

  &:hover {
    cursor: pointer;
    z-index: 99;
    transform: scale(1.05);

    .overview > div {
      top: 0;
    }
  }
}
</style>
