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
        title: p.title,
        excerpt: p.excerpt,
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
  export let post;
</script>

<svelte:head>
  <title>mattlaw.dev | {post.title}</title>
</svelte:head>

<article>
  <div>
    <img src={post.image.url} />
    <div class="title">
      {post.title}
    </div>
  </div>
</article>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
