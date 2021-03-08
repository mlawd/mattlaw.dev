<script lang="ts" context="module">
  import type { Preload } from '@sapper/common';

  export const preload: Preload = async function ({ path }) {
    return {
      isHome: path === '/',
    };
  };
</script>

<script lang="ts">
  import Tailwindcss from '../components/Tailwindcss.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';

  export let isHome: boolean;
</script>

<Tailwindcss />

{#if !isHome}
  <span class="absolute top-8 right-8">
    <Menu size="24px" />
  </span>
{/if}
<main class="h-screen">
  <slot />
</main>

<style global>
  :root {
    --font: 'Raleway', sans-serif;
  }

  *,
  html,
  body {
    font-family: var(--font);
  }

  h1 {
    @apply text-primary;
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
  }

  h2 {
    @apply text-secondary;
    font-size: 24px;
    font-weight: 700;
  }
</style>
