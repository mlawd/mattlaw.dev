<template>
  <v-card :to="slug">
    <v-row>
      <v-col cols="12" sm="4" class="pt-0 pb-0 rel">
        <g-image
          :src="require(`!!assets-loader!@blogs/${hero}`)"
          :alt="title"
        />
      </v-col>
      <v-col cols="12" sm="8">
        <v-card-title>
          <span>{{ title }}</span>
        </v-card-title>
        <v-card-text class="pt-4">
          <p class="subtitle-1">{{ description }}</p>
          <v-chip label color="primary" dark>
            {{ publishedAt.toLocaleDateString() }}
          </v-chip>
          <v-chip label color="secondary" dark>
            {{ timeToRead }} minutes
          </v-chip>
          <v-chip label v-for="tag of tags" :key="tag.title" outlined>
            {{ tag.title }}
          </v-chip>
        </v-card-text>
      </v-col>
    </v-row>
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
    timeToRead: { type: Number, required: true },
  },
});
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.v-card {
  transition: 0.2s;
  position: relative;
  overflow: hidden;

  .rel {
    position: relative;
  }

  img {
    width: 100%;

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }
  }

  .v-card__title {
    position: relative;
    transition: 0.2s;

    span {
      position: relative;

      &:before {
        z-index: -1;
        bottom: 5px;
        left: 0;
        width: 0%;
        position: absolute;
        height: 10px;
        content: ' ';
        background-color: var(--v-secondary-base);
        transition: width 0.2s;
      }
    }
  }

  &:hover {
    .v-card__title {
      span {
        &:before {
          width: 100%;
        }
      }
    }
  }

  .v-card__title {
    transition: 0.5s;
    z-index: 99;

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

  .v-chip {
    margin-right: 5px;
    margin-top: 5px;
  }
}
</style>
