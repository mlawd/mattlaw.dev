<template>
  <v-card :to="slug">
    <g-image :src="require(`!!assets-loader!@blogs/${hero}`)" :alt="title" />
    <v-card-title>
      <div class="preview-title">
        <span class="preview-title__bg">&nbsp;</span>
        <p class="headline mb-0">{{ title }}</p>
      </div>
    </v-card-title>
    <v-card-text class="pt-4">
      <p class="subtitle-1">{{ description }}</p>
      <v-chip label color="primary" dark>
        {{ publishedAt.toLocaleDateString() }}
      </v-chip>
      <v-chip label v-for="tag of tags" :key="tag.title" outlined>
        {{ tag.title }}
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
    hero: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  transition: 0.2s;
  position: relative;

  &:hover {
    .v-card__title {
      color: black;

      .preview-title {
        &__bg {
          width: 100%;
        }
      }
    }
  }

  .v-card__title {
    position: absolute;
    top: 0;
    transition: 0.5s;
    background-color: var(--v-primary-base);
    color: white;

    .preview-title {
      &__bg {
        transition: 0.2s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: white;
      }
    }
  }

  .subtitle-1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .headline {
    width: 100%;
    position: relative;
    word-break: break-word;
  }

  img {
    width: 100%;
    display: block;
  }

  .v-chip {
    margin-right: 5px;
    margin-top: 5px;
  }
}
</style>
