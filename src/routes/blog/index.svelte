<script context="module" lang="ts">
  export async function preload() {
    const resp = await this.fetch('/api/blog/all');

    const { posts } = await resp.json();

    return {
      posts: posts.map((p) => ({
        ...p,
        date: new Date(p.date),
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

  <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1.5">
    {#each posts as post}
      <PostPreview {...post} />
    {/each}
  </div>
</section>

<style>
</style>
