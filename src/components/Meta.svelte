<script>
  import { stores } from '@sapper/app';

  const { page } = stores();

  export let title;
  export let description;
  export let image = null;
  export let type = 'website';
  export let tags = [];

  $: url = `https://${$page.host}${$page.path}`;
</script>

<svelte:head>
  <title>mattlaw.dev | {title}</title>
  <meta name="description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:description" content={description} />
  {#if type === 'article'}
    {#each tags as tag}
      <meta propert="article:tag" content={tag} />
    {/each}
  {/if}
  {#if image}
    <meta property="og:image" content={image} />
  {/if}
</svelte:head>
