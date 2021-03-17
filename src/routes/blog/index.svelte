<script context="module" lang="ts">
  export async function preload() {
    const resp = await this.fetch('/graphcms', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
query {
  allPost {
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

    return {
      posts: allPost.map((p) => ({
        title: p.title,
        excerpt: p.excerpt,
        slug: `blog/${p.slug.current}`,
        categories: p.categories.map((c) => c.title),
        date: new Date(p.publishedAt),
        image: {
          url: p.mainImage.asset.url,
          filename: p.mainImage.asset.fileName,
        },
      })),
    };
  }
</script>

<script lang="ts">
  import PostPreview from '../../components/PostPreview.svelte';
  export let posts: {
    title: string;
    excerpt: string;
  }[] = [];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="mx-auto container p-4">
  <h1 class="mb-4">.blog</h1>

  <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
    {#each posts as post}
      <PostPreview {...post} />
    {/each}
  </div>
</section>

<style>
</style>
