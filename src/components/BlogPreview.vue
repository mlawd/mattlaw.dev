<template>
  <v-card class="zoom ma-1" :to="blog.path">
    <v-layout row wrap :reverse="reverse">
      <v-flex md4 v-show="!simple && $vuetify.breakpoint.mdAndUp">
        <div
          class="fill"
          :style="{
            backgroundImage: 'url(\'' + blog.headlineImage + '\')',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }"
        ></div>
      </v-flex>
      <v-flex xs12 v-show="simple || $vuetify.breakpoint.smAndDown">
        <g-image :src="blog.headlineImage" :alt="blog.title" />
      </v-flex>
      <v-flex :class="{ md8: !simple }">
        <v-card-title>
          <h4 class="display-1">{{ blog.title }}</h4>
        </v-card-title>
        <v-card-text v-if="simple">
          <p>
            {{ blog.description }}
          </p>
        </v-card-text>
        <v-card-text v-else>
          <p>
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
</style>
