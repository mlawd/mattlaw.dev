<template>
  <v-card class="zoom ma-2" :to="'post/' + blog.slug">
    <v-row row wrap :class="{ 'flex-row-reverse': reverse }">
      <v-col
        class="pt-0 pb-0"
        md="4"
        v-show="!simple && $vuetify.breakpoint.mdAndUp"
      >
        <div
          class="fill"
          :style="{
            backgroundImage: 'url(\'' + blog.hero.url + '\')',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }"
        ></div>
      </v-col>
      <v-col
        class="pt-0 pb-0"
        cols="12"
        v-show="simple || $vuetify.breakpoint.smAndDown"
      >
        <g-image :src="blog.hero.url" :alt="blog.name" />
      </v-col>
      <v-col :class="{ md8: !simple }">
        <v-card-title>
          <h4 class="display-1">{{ blog.title }}</h4>
        </v-card-title>
        <v-card-text>
          <p>
            {{ blog.description }}
          </p>
          <p v-if="!simple">
            <v-chip
              label
              v-for="{ name } of blog.tags"
              :key="name"
              class="ma-1"
            >
              #{{ name }}
            </v-chip>
          </p>
        </v-card-text>
      </v-col>
    </v-row>
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
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
}

.fill {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
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

h4 {
  word-break: break-word;
}
</style>
