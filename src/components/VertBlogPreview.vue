<template>
  <v-card class="zoom" :to="'post/' + blog._meta.uid">
    <v-card-title>
      <p class="headline">{{ blog.title[0].text }}</p>
    </v-card-title>
    <g-image :src="blog.hero.url" :alt="blog.title.text" />
    <v-card-text>
      <p>
        <v-chip v-for="tag of blog._meta.tags" :key="tag" class="ma-1">
          #{{ tag }}
        </v-chip>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    reverse: { type: Boolean },
    blog: { type: Object },
    noDescription: { type: Boolean },
    simple: { type: Boolean },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.headline {
  word-break: break-word;
}

.zoom:hover {
  cursor: pointer;
  z-index: 99;
}

.zoom:hover {
  transform: scale(1.05);
}

.zoom {
  transition: transform 0.2s;
}
</style>
