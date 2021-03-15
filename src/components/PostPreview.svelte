<script lang="ts">
  export let title: string;
  export let slug: string;
  export let categories: string[];
  export let image: {
    fileName: string;
    url: string;
  };
</script>

<a class="shadow-md hover:shadow-lg transition-all my-2" href={slug}>
  <img src={image.url} alt={image.fileName} class="border-accent border-b-8" />
  <div class="p-4">
    <p>
      {#each categories as cat, i}
        {#if i > 0}
          <span class="mx-1">|</span>
        {/if}
        <span class="text-sm">{cat}</span>
      {/each}
    </p>
    <p class="text-lg">{title}</p>
  </div>
</a>
