<script context="module" lang="ts">
  export async function preload({ params }) {
    const resp = await this.fetch(`/api/blog/${params.slug}`);

    const { post } = await resp.json();

    return {
      post: {
        ...post,
        date: new Date(post.publishedAt),
      },
    };
  }
</script>

<script>
  import BlockContent from '@movingbrands/svelte-portable-text';
  import Hero from '../../components/Hero.svelte';
  import { serializers } from '../../components/serializers/';
  export let post;

  const date = new Date(post.publishedAt).toLocaleDateString();
  const byline = post.categories.reduce(
    (acc, cur) => `${acc} | ${cur}`,
    `${date}`
  );
</script>

<svelte:head>
  <title>mattlaw.dev | {post.title}</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<Hero title={post.title} {byline} image={post.mainImage.asset.url}>
  {post.excerpt}
</Hero>

<article class="p-8">
  <div class="prose mx-auto prose-lg">
    <BlockContent blocks={post.bodyRaw} {serializers} />
  </div>
</article>

<style lang="scss">
  .article-hero {
    height: 65vh;
    position: relative;

    .article-hero-content {
      margin-left: -1000px;
      padding-left: 1000px;
    }
  }

  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  article :global(h2) {
    @apply text-secondary;
    @apply bg-accent;
    @apply py-4;
    margin-left: -2000px;
    padding-left: 2000px;
  }

  article :global(h3) {
    @apply text-secondary;
    @apply bg-accent;
    @apply py-4;
    margin-right: -2000px;
  }
</style>
