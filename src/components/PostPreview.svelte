<script lang="ts">
  export let title: string;
  export let slug: string;
  export let excerpt: string;
  export let categories: string[];
  export let date: Date;
  export let image: {
    fileName: string;
    url: string;
  };
</script>

<a class="shadow-md flex flex-col" href={`${slug.trimRight('/')}/`}>
  <div>
    <img
      src={image.url}
      alt={image.fileName}
      class="object-cover min-w-full min-h-full"
    />
    <div class="bar" />
  </div>
  <div class="p-4 flex flex-col flex-1">
    <p class="text-gray-500">
      {#each categories as cat, i}
        {#if i > 0}
          <span class="mx-1">&nbsp;|</span>
        {/if}
        <span class="text-sm">{cat}</span>
      {/each}
    </p>
    <p class="text-lg my-2 font-bold">{title}</p>
    <p class="flex-1">{excerpt}</p>
    <p class="mt-2 text-gray-500">{date.toLocaleDateString()}</p>
  </div>
</a>

<style lang="scss">
  a {
    div {
      position: relative;
    }

    .bar {
      @apply bg-primary;
      height: 10px;
      position: relative;
      top: -10px;

      &:before {
        content: ' ';
        position: absolute;
        top: 0px;
        left: 50%;
        height: 100%;
        width: 0%;
        @apply bg-accent;

        transition: all 0.2s;
      }
    }

    &:hover {
      .bar {
        &:before {
          left: 0;
          width: 100%;
        }
      }
    }
  }
</style>
