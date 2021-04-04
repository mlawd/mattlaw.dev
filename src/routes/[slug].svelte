<script context="module" lang="ts">
  export async function preload({ params }) {
    const resp = await this.fetch(`/api/content/${params.slug}`);

    const { page } = await resp.json();

    return {
      page,
    };
  }
</script>

<script>
  import BlockContent from '@movingbrands/svelte-portable-text';
  import { urlFor, serializers } from '../components/serializers/';
  import Hero from '../components/Hero.svelte';
  import Meta from '../components/Meta.svelte';
  export let page;
</script>

<Meta title={page.title} description={page.byline} />

<Hero title={page.title} byline={page.byline}>
  {#if page.excerptRaw}
    <BlockContent blocks={page.excerptRaw} {serializers} />
  {/if}
</Hero>

<div class="excerpt">
  {#each page.content || [] as content, i}
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
        {#if content.contentRaw}
          <BlockContent blocks={content.contentRaw} {serializers} />
        {/if}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .excerpt :global(h2) {
    @apply text-accent;
  }
</style>
