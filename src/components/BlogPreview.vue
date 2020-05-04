<template>
  <v-card :to="'/blog/' + slug">
    <g-image
      :src="require(`!!assets-loader!@images/${'hucknall.jpg'}`)"
      :alt="hero.description"
    />
    <v-card-title>
      <div class="preview-title">
        <span class="preview-title__bg">&nbsp;</span>
        <p class="headline mb-0">
          {{ title }}
        </p>
      </div>
    </v-card-title>
    <v-card-text class="pt-4">
      <p class="subtitle-1">{{ description }}</p>
      <v-chip label color="accent">
        {{ publishedAt.toLocaleDateString() }}
      </v-chip>
      <v-chip
        label
        v-for="tag of tags"
        :key="tag"
        class="tag"
        :to="'/tag/' + tag"
      >
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
    .v-card__title {
      color: white;

      .preview-title {
        &__bg {
          width: 100%;
        }
      }
    }

    .preview {
      .description.hidden {
        top: 0;
      }
    }
  }

  .v-card__title {
    position: relative;
    transition: 0.5s;

    .preview-title {
      &__bg {
        transition: 0.2s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        /*
        background-color: rgba(95, 158, 160, 0.5);
				*/
        background-color: var(--v-primary-base);
      }
    }
  }

  .headline {
    word-break: break-word;
    width: 100%;
    height: 64px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .preview {
    position: relative;
    overflow: hidden;

    .description {
      transition: 0.2s;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      color: white;
      text-align: center;
      display: flex;
      align-items: center;

      &.hidden {
        top: 100%;
      }
    }
  }

  img {
    width: 100%;
    display: block;
  }

  .v-chip {
    margin-right: 5px;
  }
}
</style>
