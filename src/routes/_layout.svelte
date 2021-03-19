<script lang="ts">
  import Tailwindcss from '../components/Tailwindcss.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';

  const { page } = stores();

  $: isHome = $page.path === '/';
  $: title = $page.path === '/' ? 'dev' : $page.path.split('/')[1];

  let open = false;

  function toggleMenu() {
    open = !open;
  }

  function closeMenu() {
    open = false;
  }
</script>

<Tailwindcss />

{#if !isHome}
  <span
    class="absolute top-6 right-6 z-50 hover:cursor-pointer"
    on:click={toggleMenu}
  >
    {#if open}
      <Close size="24px" />
    {:else}
      <Menu size="24px" />
    {/if}
  </span>
  <main class="mx-auto p-8">
    <slot />
  </main>
{/if}

{#if isHome || open}
  <div
    class="h-screen hero sm:bg-cover fixed top-0 left w-full"
    out:fade={{ duration: 200 }}
    in:fade={{ duration: 200 }}
  >
    <div class="hero__text">
      <h1 class="mb-0 fade-right wait-2">mattlaw.{title}</h1>
      <h2 class="mt-0 fade-left wait-2 leading-7">software.engineer</h2>
      <h2 class="mt-0 fade-left wait-3 leading-7">technical.lead</h2>
      <h2 class="mt-0 fade-left wait-4 leading-7">agile.fanatic</h2>

      <ul class="pl-0 text-secondary font-bold">
        <li>
          <a href="/projects" class="fade-down wait-6" on:click={closeMenu}>
            .projects
          </a>
        </li>
        <li>
          <a href="/blog" class="fade-down wait-7" on:click={closeMenu}>.blog</a
          >
        </li>
        <li>
          <a href="/me" class="fade-down wait-8" on:click={closeMenu}>.me</a>
        </li>
      </ul>
    </div>
  </div>
{/if}

<style global lang="scss">
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

  .hero {
    background-image: linear-gradient(
        90deg,
        rgba(61, 64, 91, 0.7) 0%,
        rgba(61, 64, 91, 0.3) 100%
      ),
      url('/img/me.jpeg');

    background-position: 60% 40%;
  }

  .hero__text {
    margin: auto;
    padding-top: 88px;
    max-width: 300px;
  }

  @screen sm {
    .hero__text {
      max-width: 400px;
    }
  }

  @screen md {
    .hero__text {
      max-width: 600px;
    }
  }

  @keyframes fadein {
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  .fade-down {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateY(-20px);
  }

  .fade-left {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateX(20px);
  }

  .fade-right {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateX(-20px);
  }

  @for $i from 1 through 10 {
    .wait-#{$i} {
      animation-delay: $i * 0.1s;
    }
  }

  ul {
    margin: 0 -5px;
    li {
      position: relative;
      display: table;
      margin: 0 5px;

      &:after {
        content: ' ';
        background-color: #3d405b;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0px;
        z-index: 0;
        transition: height 0.2s;
      }

      &:hover {
        &:after {
          height: 10px;
        }
      }

      a {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
