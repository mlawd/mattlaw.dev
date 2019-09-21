<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>{{ title }}</h1>
        </v-flex>
        <v-flex lg8 offset-lg2>
          <div id="content" :class="{ padded: $vuetify.breakpoint.lgAndUp }">
            <slot></slot>
          </div>
        </v-flex>
        <v-flex lg12>
          <ClientOnly>
            <social />
          </ClientOnly>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Social from '../components/Social.vue';

export default {
  components: { Social },
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
h1 {
  padding-bottom: 20px;
}

#content.padded {
  padding-right: 3rem;
}

#content >>> p {
  font-size: 1.5em !important;
  line-height: 1.7em;
  font-weight: 200;
}

#content >>> blockquote {
  border-left: 5px solid cadetblue;
  padding-left: 10px;
  font-style: italic;
  color: grey;
}

#content >>> h2 a {
  text-decoration: none;
  color: black;
}

#content >>> h2 {
  position: relative;
}

#content >>> h2:hover::before {
  content: '#';
  position: absolute;
  left: -50px;
  color: cadetblue;
}

#content >>> figcaption {
  text-align: center;
  margin-bottom: 2rem;
}

.v-btn {
  text-transform: none;
}

.flex {
  margin-top: 10px;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
}
</style>
