<template>
  <div>
    <v-btn
      fab
      depressed
      dark
      color="grey"
      fixed
      bottom
      right
      v-if="collapse"
      @click.prevent="share"
    >
      <v-icon>{{ mdiShareVariant }}</v-icon>
    </v-btn>
    <div class="d-inline-flex flex-column" v-else :style="sticky" ref="icons">
      <v-btn icon x-large class="ma-1" @click.prevent="facebook">
        <v-icon x-large color="indigo">{{ mdiFacebook }}</v-icon>
      </v-btn>
      <v-btn icon x-large class="ma-1" @click.prevent="twitter">
        <v-icon x-large color="blue">{{ mdiTwitter }}</v-icon>
      </v-btn>
      <v-btn icon x-large class="ma-1" @click.prevent="linkedin">
        <v-icon x-large color="#1D73B1">{{ mdiLinkedin }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from '@vue/composition-api';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiShareVariant } from '@mdi/js';

export default {
  props: {
    collapse: { type: Boolean, default: false },
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array, required: true },
  },
  setup(props) {
    const sticky = ref({});
    const icons = ref(null);

    if (!props.collapse) {
      const threshold = 45;

      function handleScroll(e) {
        sticky.value =
          window.scrollY >= threshold
            ? {
                position: 'fixed',
                top: `${threshold}px`,
                left: `${icons.value.offsetLeft}px`,
              }
            : null;
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    }

    return {
      mdiFacebook,
      mdiTwitter,
      mdiLinkedin,
      mdiShareVariant,
      sticky,
      icons,
      share: async () => {
        await navigator.share({
          url: props.url,
          title: props.title,
        });
      },
      twitter() {
        window.open(
          `http://twitter.com/intent/tweet?url=${encodeURIComponent(
            props.url
          )}&text=${props.title}&hashtags=${props.tags
            .reduce((acc, cur) => {
              acc += `${cur},`;
              return acc;
            }, '')
            .slice(0, -1)}`,
          '',
          'left=200,top=100,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
      },
      facebook() {
        window.open(
          `https://www.facebook.com/sharer.php?u=${props.url}`,
          '',
          'left=200,top=100,width=600,height=500,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
      },
      linkedin() {
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${
            props.url
          }&title=${props.title}&summary=${
            props.description
          }&source=mattlaw.dev`,
          '',
          'left=200,top=100,width=600,height=500,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
      },
    };
  },
};
</script>
