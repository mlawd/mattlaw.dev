---
title: Structuring VueJS apps with the Composition API
heroUrl: composition-api-structure/adi-goldstein-LSIz8c8mg6M-unsplash.jpg
heroCaption:
  <span>Photo by <a
  href="https://unsplash.com/@adigold1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Adi
  Goldstein</a> on <a
  href="https://unsplash.com/s/photos/compose?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
description:
  Vue 3 introduces us to the Composition API, something aimed at addressing code
  reuse and maintainability in VueJS apps. Here's a quick overview and some
  advice on how to structure your code.
published: 2020-10-03
tags:
  - vuejs
  - javascript
  - dev
---

[Vue 3](https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com)
is here! And with it comes the much-talked-about
[Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)
which aims to address the current difficulties with code reuse in VueJS
applications.

I say "code" reuse specifically, as opposed to "component" reuse, as component
reuse has always been possible with entirely self-contained components. The
Composition API, however, gives developers the ability to separate code
(functionality) from the components themselves (presentation).

Of course, we've always been able to create some level of separation between
functionality and presentation with the use of [Vuex](https://vuex.vuejs.org/).
However, Vuex requires us to keep the functionality close to where the main
store is defined and is often, in my opinion, abused.

Vuex is primarily a state store, yet developers use it as a quick way of sharing
state and actions that is only required by one or two components and therefore
do not need to be global.

React developers will be familiar with this concept, as the Composition API is
similar to React Hooks in what it tries to achieve (although I'm taking the word
of other developers on this, as I have little to no experience with React
Hooks).

## The Old Way

Let's look at some code.

```html
<template>
  <h1>Counter</h1>
  <p>Count {{ count }}</p>
  <button @click="add">Add</button>
  <button @click="take">Take</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      add() {
        this.count++;
      },
      take() {
        this.count--;
      },
    },
  };
</script>
```

Starting with something I'm sure you've never seen before; this code sets up a
count variable with a couple of buttons that add or take from the value.

At this point, life is simple. A quick read of the code gives the developer all
the information they need to work with it. But imagine we had computed values,
store interactions and events hanging around everywhere.

Because of the way you are required to split code across the component's
definition (methods/computed/data etc.) as opposed to its functionality
(counting, data retrieval etc.), things quickly become a mess and much harder to
read.

## The new way

Now let's see the same component but using the Composition API.

```html
<template>
  <h1>Counter</h1>
  <p>Count {{ count }}</p>
  <button @click="add">Add</button>
  <button @click="take">Take</button>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const count = ref(0);

      function add() {
        count.value++;
      }

      function take() {
        count.value--;
      }

      return {
        count,
        add,
        take,
      };
    },
  };
</script>
```

First off, we are now calling the "setup" function as opposed to "data", where
we create a new variable called "count" using the "ref" function to initialise
it to 0.

Because we're initialising and using the variable all within the same scope
(that of the "setup" function) we can access it directly, as opposed to needing
"this" (which won't work in the setup function anyway).

We then create the same two functions as before, but now they're declared next
to the count variable. This means that we can group code together by
functionality, making life for the maintaining developers a whole lot easier.

Finally, we return the things we've created so that they're available in the
component scope.

So we've managed to separate the functionality logically within the code. But
now imagine another component wishes to use the add & take functions; or needs
access to the value of count. "Traditionally" (if you can say that about VueJS)
this is where you would introduce Vuex.

There is nothing inherently wrong with Vuex, and it serves a purpose. However,
because of the way the state & stores are organised, you again end up with
functionality that is key to your component, miles away from the component
itself.

Moreover, you are now fully tied to Vuex; the component cannot live without it.
Should you ever want to reuse that component in another project, you have to
take the portion of the Vuex store with you.

## Creating useful separation

Here is where the real life-changer of the Composition API lives.

We can separate the functionality into separate files and import them into any
components we wish to use.

For instance:

```javascript
import { ref } from 'vue';

export const count = ref(0);

export function add() {
  count.value++;
}

export function take() {
  count.value--;
}
```

```html
<template>
  <h1>Counter</h1>
  <p>Count {{ count }}</p>
  <button @click="add">Add</button>
  <button @click="take">Take</button>
</template>

<script>
  import { count, add, take } from './counter';

  export default {
    setup() {
      return {
        count,
        add,
        take,
      };
    },
  };
</script>
```

It's the same code, except now `count`, `add` and `take` are available to our
entire code-base. The functionality is easily portable, and the component
becomes easier to move as well (although still dependant on the `counter.js`
file, it does not need Vuex to come with it).

## Structuring your APIs

Previously, I have written about
[structuring VueJS components for reuse](/blog/structuring-vue-components-for-reuse/).
That post was focussed on how I try to create components that are reusable
across the entire application (indeed across multiple applications) through
separating the retrieval and presentation of data.

The Composition API adds another layer to this: where do I put my non-component
code? My `.js` and `.ts` files?

I've seen various suggestions, some people create a "composables" or "hooks"
folder in the root src directory and store all the functionality there.

However, I feel this leaves us in a similar situation (although not as severe)
as Vuex. You still have to take multiple files from multiple directories should
you wish to reuse code across projects.

For something such as the counter, which is highly generic, this makes sense.
You might want the code without the component and vice versa.

But if we were to consider something more complex (such as a generic "Contact
us" form or authentication) I find that storing the code alongside the component
itself to be a much cleaner way of organising my files.

Take the contact us form as an example. I would create the following folder
structure:

`src/components/contact`

With two files inside `ContactForm.vue` and `index.ts` (yes `.ts`, TypeScript is
incredibly powerful with the Composition API).

Then, should I need to access the data within the contact form elsewhere in the
application (such as confirmation component or some such) I can
`import { data } from './src/components/contact'` and get immediate access to
the data therein.

Also, should I want to use the same contact form on another project, I can copy
& paste the entire folder over to my new project and, hey presto, we're good to
go!

I'm going to explore this in further detail by creating an Authentication
"library" as such using the Composition API and Firebase Authentication, so stay
tuned for that!

But for now, I hope you can see how the Composition API can further help create
functionality that is not only more reusable but also a lot more maintainable.

A single component can import functionality from many locations and use them to
_compose_ its own behaviour. This allows you to create a clear separation
between logical concerns, lowering the maintenance burned when one of those
concerns has a bug.

Libraries are already starting to pop up (see
[vue-composable](https://pikax.me/vue-composable/) and
[vue-use](https://github.com/antfu/vueuse)) that provide common utility
functions such as mouse interactions, local storage and native API interaction.

For those that haven't already, give it a go! And start moving over, future you
will be thankful!
