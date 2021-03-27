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
  import { serializers } from '../../components/serializers/';
  export let post;
</script>

<svelte:head>
  <title>mattlaw.dev | {post.title}</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<article class="p-8">
  <div class="article-hero -m-8 mb-16 flex flex-col justify-end items-center">
    <div class="z-10 w-full max-w-screen-md mx-auto mb-8">
      <div class="article-hero-content inline-block bg-accent p-8">
        <h1 class="pl-8 md:pl-0">{post.title}</h1>
        <div class="pl-8 mt-4 md:pl-0 flex flex-wrap">
          <span class="m-2 ml-0 rounded-lg text-secondary">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
          {#each post.categories as cat}
            <span class="m-2 ml-0 text-secondary"> | </span>
            <span class="m-2 ml-0 text-secondary">
              {cat}
            </span>
          {/each}
        </div>
      </div>
    </div>
    <img
      src={post.mainImage.asset.url}
      alt=""
      class="h-full w-full object-cover absolute inset-0"
    />
  </div>
  <div class="max-w-screen-md mx-auto prose-lg">
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
    @apply bg-accent;
    @apply py-4;
    margin-left: -2000px;
    padding-left: 2000px;
  }

  article :global(h3) {
    @apply bg-accent;
    @apply py-4;
    margin-right: -2000px;
  }
</style>
