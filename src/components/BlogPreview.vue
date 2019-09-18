<template>
  <v-card class="zoom ma-1" :to="blog.path">
    <v-layout row wrap :reverse="reverse">
      <v-flex md4 xs12>
        <g-image :src="blog.headlineImage" :alt="blog.title" />
      </v-flex>
      <v-flex md8 xs12>
        <v-card-title>
          <h4 class="display-1">{{ blog.title }}</h4>
        </v-card-title>
        <v-card-text>
          <p v-if="!noDescription">
            {{ blog.description }}
          </p>
          <p>
            <v-chip light>
              Time to read: {{ blog.timeToRead }}
              {{ blog.timeToRead > 1 ? 'minutes' : 'minute' }}
            </v-chip>
          </p>
          <p>
            <v-chip v-for="tag of blog.tags" :key="tag.id">
              #{{ tag.id }}
            </v-chip>
          </p>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    reverse: { type: Boolean },
    blog: { type: Object },
    noDescription: { type: Boolean },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
}

.zoom:hover {
  cursor: pointer;
}

img {
  width: 100%;
}

.zoom:hover img {
  transform: scale(1.3);
}

.zoom img {
  transition: transform 0.2s;
}
</style>
