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
    <div class="grid md:grid-cols-2 max-w-screen-md mx-auto py-8 gap-4">
      {#if i % 2 === 0}
        <img src={urlFor(content.image).width(600).url()} alt="" />
      {/if}
      <div class="prose-lg text-center flex flex-col justify-center">
        <h2>{content.title}</h2>
        <BlockContent blocks={content.contentRaw} {serializers} />
      </div>
      {#if i % 2 === 1}
        <img src={urlFor(content.image).width(600).url()} alt="" />
      {/if}
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
