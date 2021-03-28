<script context="module" lang="ts">
  export async function preload() {
    const [blogs, content] = await Promise.all([
      this.fetch('/api/blog/all'),
      this.fetch(`/api/content/blog`),
    ]);

    const { posts } = await blogs.json();
    const { page } = await content.json();

    return {
      posts: posts.map((p) => ({
        ...p,
        date: new Date(p.date),
      })),
      page,
    };
  }
</script>

<script lang="ts">
  import Hero from '../../components/Hero.svelte';
  import PostPreview from '../../components/PostPreview.svelte';
  import Meta from '../../components/Meta.svelte';

  export let posts: {
    title: string;
    excerpt: string;
  }[] = [];
  export let page;
</script>

<Meta title={page.title} description={page.byline} />

<Hero title={page.title} byline={page.byline} />

<section class="mx-auto container p-8">
  <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1.5">
    {#each posts as post}
      <PostPreview {...post} />
    {/each}
  </div>
</section>

<style>
</style>
