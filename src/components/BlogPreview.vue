<template>
  <v-card :to="'/blog/' + slug">
    <v-card-title>
      <p class="headline">
        {{ title }}
      </p>
      <v-chip label color="accent">
        {{ publishedAt.toLocaleDateString() }}
      </v-chip>
    </v-card-title>
    <div class="preview">
      <g-image
        :src="require('../assets/img/hucknall.jpg')"
        :alt="hero.description"
      />
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </div>
    <v-card-text>
      <v-chip label v-for="tag of tags" :key="tag" class="tag">
        #{{ tag }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    tags: { type: Array, required: true },
    slug: { type: String, required: true },
    hero: { type: Object, required: true },
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  transition: 0.2s;

  &:hover {
    z-index: 1;
    transform: scale(1.05);
    .preview {
      .description {
        top: 0;
      }
    }
  }

  .headline {
    word-break: break-word;
    width: 100%;
    height: 64px;
  }

  .preview {
    position: relative;
    overflow: hidden;

    .description {
      transition: 0.2s;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 100%;
      left: 0;
      height: 100%;
      padding: 5px;
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }

  img {
    width: 100%;
  }

  .v-chip {
    margin-right: 5px;
  }
}
</style>
