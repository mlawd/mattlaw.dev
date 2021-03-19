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

<article class="max-w-screen-md mx-auto prose-lg">
  <h1>{post.title}</h1>
  <BlockContent blocks={post.bodyRaw} {serializers} />
</article>

<style lang="scss">
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
