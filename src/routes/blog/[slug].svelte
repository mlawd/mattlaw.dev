<script context="module" lang="ts">
  export async function preload({ params }) {
    const resp = await this.fetch('/graphcms', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
query {
  allPost (where:{slug:{current:{eq:"${params.slug}"}}}){
    title
    excerpt
    publishedAt
    bodyRaw
    slug {
      current
    }
    categories {
      title
    }
    mainImage {
      asset {
        originalFilename
        url
      }
    }
  }
}`,
      }),
    });

    const { allPost } = await resp.json();

    const p = allPost[0];

    return {
      post: {
        ...p,
        categories: p.categories.map((c) => c.title),
        date: new Date(p.publishedAt),
        image: {
          url: p.mainImage.asset.url,
          filename: p.mainImage.asset.fileName,
        },
      },
    };
  }
</script>

<script lang="ts">
  import BlockContent from '@movingbrands/svelte-portable-text';
  import { serializers } from '../../components/serializers/';
  export let post;
</script>

<svelte:head>
  <title>mattlaw.dev | {post.title}</title>
</svelte:head>

<article>
  <div class="article-hero -m-8 mb-16 flex flex-col justify-end items-center">
    <div class="z-10 w-full max-w-screen-md mx-auto mb-8">
      <div class="article-hero-content inline-block bg-accent p-8">
        <h1 class="pl-8">{post.title}</h1>
        <span class="text-secondary pl-8">
          {new Date(post.publishedAt).toLocaleDateString()}
        </span>
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
    height: 75vh;
    position: relative;

    .article-hero-content {
      margin-left: -1000px;
      padding-left: 1000px;
    }
  }
  /*
  .article-hero {
    @apply bg-accent;
    @apply flex;
    @apply flex-col;
    @apply justify-center;
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
