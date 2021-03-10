<script context="module" lang="ts">
  export async function preload() {
    const resp = await this.fetch('/graphcms', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
          posts {
            title
            excerpt
            coverImage {
              fileName
              url
            }
          }
        }
        `,
      }),
    });

    const { data } = await resp.json();

    return data;
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

<h1>.blog</h1>

{#each posts as post}
  <PostPreview {...post} />
{/each}

<style>
</style>
