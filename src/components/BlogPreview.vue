<template>
  <v-card class="zoom ma-2" :to="'post/' + blog._meta.uid">
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
        <g-image :src="blog.hero.url" :alt="blog.title.text" />
      </v-col>
      <v-col :class="{ md8: !simple }">
        <v-card-title>
          <h4 class="display-1">{{ blog.title[0].text }}</h4>
        </v-card-title>
        <v-card-text>
          <p>
            {{ blog.description[0].text }}
          </p>
          <p v-if="!simple">
            <v-chip v-for="tag of blog._meta.tags" :key="tag" class="ma-1">
              #{{ tag }}
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
