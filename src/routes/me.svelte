<script context="module" lang="ts">
  export async function preload({ params }) {
    const resp = await this.fetch(`/api/content/me`);

    const { page } = await resp.json();

    return {
      page,
    };
  }
</script>

<script>
  import BlockContent from '@movingbrands/svelte-portable-text';
  import { urlFor, serializers } from '../components/serializers/';
  export let page;
</script>

<svelte:head>
  <title>
    mattlaw.dev | Software engineer, technical leader, agile enthusiast
  </title>
</svelte:head>

<div
  class="bg-accent h-screen lg:h-screen-small flex items-center justify-center text-center"
>
  <div class="max-w-3xl p-4">
    <h1 class="text-9xl my-4">
      .{page.title}
    </h1>
    <p class="text-secondary my-4 text-4xl">
      {page.subtitle}
    </p>
    <p class="text-secondary my-4 text-2xl">
      {page.byline}
    </p>
    <section class="bio">
      <BlockContent blocks={page.excerptRaw} {serializers} />
    </section>
  </div>
</div>

<div class="excerpt">
  {#each page.content as content, i}
    <div
      class="flex flex-wrap max-w-screen-md mx-auto py-8"
      class:flex-row-reverse={i % 2}
    >
      <img
        class="w-full md:w-1/2 px-4"
        src={urlFor(content.image).width(600).url()}
        alt=""
      />
      <div
        class="w-full md:w-1/2 prose-lg text-center flex flex-col justify-center p-4"
      >
        <h2>{content.title}</h2>
        <BlockContent blocks={content.contentRaw} {serializers} />
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .lg\:h-screen-small {
    @screen lg {
      height: 65vh;
    }
  }
  .md\:h-screen-small {
    @screen md {
      height: 65vh;
    }
  }

  .bio :global(p) {
    @apply my-4;
    @apply text-secondary;
  }

  .excerpt :global(h2) {
    @apply text-accent;
  }
</style>
