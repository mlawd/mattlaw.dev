---
title: Structuring Vue components for reuse
heroUrl: vue-component-reuse/yancy-min-842ofHC6MaI-unsplash.jpg
heroCaption:
  <span>Photo by <a
  href="https://unsplash.com/@yancymin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Yancy
  Min</a> on <a
  href="https://unsplash.com/s/photos/vue?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
description:
  VueJS is an ultra-flexible front-end JavaScript framework for Single Page
  Applications, below is a small suggestion for how to structure pieces of your
  app to make them a little more manageable.
published: 2020-07-26T00:00:00Z
tags:
  - vuejs
  - dev
  - programming
---

VueJS is pretty lenient regarding how you structure your application, especially
compared to Angular which has relatively strict guidelines for creating your
application with modules & components.

VueJS, on the other hand, doesn't care. Out of the box, the Vue CLI (with router
options) creates a very basic folder structure for you to get started with. It
adds a src folder with sub-folders for views and components (amongst other
things).

Components that exist in either folder are the same in structure and how they
work. The two folders purely exist as a guideline on how best to separate your
components.

## Data components

Stored in `src/views/`

Here are your routed components. Components that are imported into your router
file and used as entry points should all be placed within here.

Components in here should access data, whether it lives in your Vuex store or
via direct access to your APIs.

I tend to have these components add structure to the page layout. They set up
various containers, rows, columns & general layout. They then import the
presentation components and pass all the gathered data down into them.

These components are often the ones used for handling interaction as well. Any
changes to data (such as form submissions) will get passed back up to these
components which then interact with any APIs or the store.

```html
/* src/views/User.vue */

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Profile :user="user" />
      </div>
      <div class="col">
        <CreatePost @submit="createPost" />
      </div>
    </div>
  </div>
</template>

<script>
  import Profile from "@/components/Profile.vue";
  import CreatePost from "@/components/CreatePost.vue";

  export default {
    computed: {
      ...mapState({
        user: state => state.user
      });
    },
    methods: {
      createPost(data) {
        // do something with the data
      }
    }
  }
</script>
```

## Presentation components

Stored in `src/components/`

These are as dumb as a bag of hammers! They know not where the data comes from
nor what they do with the data. All they do is receive data via props and emit
results via events.

Right here is where your reuse comes from. Because these components should be
completely devoid of access to the state, they become ultra-portable, not only
between data sources but also between applications.

Frameworks such as Vuetify are great examples of purely presentational
components. They accept data via props and emit when events such as click or
search occur, for you to then handle within your application.

```html
/* src/components/Profile.vue */
<template>
  <div>
    <p>Hello {{ user.name }}</p>
  </div>
</template>

<script>
  export default {
    props: ['User'],
  };
</script>
```

```html
/* src/components/CreatePost.vue */
<template>
  <div>
    <input v-model="post" />
    <button @click="submit" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: '',
      };
    },
    methods: {
      submit() {
        // Do some validation
        this.$emit('submit', this.post);
      },
    },
  };
</script>
```

In an ideal world, everything would eventually boil down to a presentational
component.

`App.vue` would set up the initial layout and create a router-view...

`views/SomePage.vue` would retrieve the data it needs and pass it to the
`SomeTable.vue`...

`components/SomeTable.vue` would display the data and pass events back up when
the sorting is changed...

![Bellisimo](./mwah.gif)

Want to reuse `SomeTable.vue` in another project? Go ahead! It's completely
decoupled from the first project's data!
