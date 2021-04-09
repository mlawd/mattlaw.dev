<script context="module">
  export function preload(_, session) {
    return {
      gaId: session.gaId,
    };
  }
</script>

<script lang="ts">
  import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte';
  import Tailwindcss from '../components/Tailwindcss.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import Github from 'svelte-material-icons/GithubFace.svelte';
  import Linkedin from 'svelte-material-icons/Linkedin.svelte';
  import Twitter from 'svelte-material-icons/Twitter.svelte';
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';
  import GithubBox from 'svelte-material-icons/GithubBox.svelte';

  const { page } = stores();

  $: isHome = $page.path === '/';
  $: pageTitle = $page.path === '/' ? 'dev' : $page.path.split('/')[1];

  let open = false;

  function toggleMenu() {
    open = !open;
  }

  function closeMenu() {}

  page.subscribe(() => {
    open = false;
  });

  export let gaId: string;
</script>

{#if gaId}
  <GoogleAnalytics {stores} id={gaId} />
{/if}

<Tailwindcss />

{#if !isHome}
  <span
    class="fixed top-6 right-6 z-50 hover:cursor-pointer"
    on:click={toggleMenu}
  >
    {#if open}
      <Close size="24px" />
    {:else}
      <Menu size="24px" />
    {/if}
  </span>
{/if}

{#if isHome || open}
  <div
    class="h-screen menu sm:bg-cover fixed top-0 left w-full z-40"
    out:fade={{ duration: 200 }}
    in:fade={{ duration: 200 }}
  >
    <div class="menu__text">
      <h1 class="mb-0 fade-right wait-2">mattlaw.{pageTitle}</h1>
      <h2 class="text-secondary mt-0 fade-left wait-2 leading-7">
        software.engineer
      </h2>
      <h2 class="text-secondary mt-0 fade-left wait-3 leading-7">
        technical.lead
      </h2>
      <h2 class="text-secondary mt-0 fade-left wait-4 leading-7">
        agile.fanatic
      </h2>

      <div class="sub-menu mt-2">
        <p class="text-secondary font-bold">
          <a href="/blog/" class="fade-down wait-7" on:click={closeMenu}>
            <span>.blog</span>
          </a>
        </p>
        <p class="text-secondary font-bold">
          <a href="/me/" class="fade-down wait-8" on:click={closeMenu}>
            <span>.me</span>
          </a>
        </p>
      </div>

      <ul class="socials pl-0 mt-2">
        <li class="fade-down wait-9">
          <a
            role="button"
            href="https://github.com/mlawd"
            aria-label="Github"
            rel="noopener"
            target="_blank"
          >
            <Github size="1.5em" />
          </a>
        </li>
        <li class="fade-down wait-10">
          <a
            role="button"
            href="https://twitter.com/mattlawdev"
            aria-label="Twitter"
            rel="noopener"
            target="_blank"
          >
            <Twitter size="1.5em" />
          </a>
        </li>
        <li class="fade-down wait-11">
          <a
            role="button"
            href="https://www.linkedin.com/in/mattlawdev"
            aria-label="Linkedin"
            rel="noopener"
            target="_blank"
          >
            <Linkedin size="1.5em" />
          </a>
        </li>
      </ul>
    </div>
  </div>
{/if}

<main>
  <slot />
</main>

<style global lang="scss">
  :root {
    --font: 'Raleway', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol {
    font-family: var(--font);
  }

  h1 {
    @apply text-primary;
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .socials {
    li {
      display: inline-block;
      @apply text-secondary;
      transition: all 0.4s;

      &:hover {
        @apply text-accent;
      }

      a {
        @apply p-2;
        svg {
          display: inline-block;
          @apply fill-current;
        }
      }
    }
  }

  .lg\:h-screen-small {
    @screen lg {
      height: 65vh;
    }
  }

  .menu {
    background-image: linear-gradient(
        90deg,
        rgba(61, 64, 91, 0.7) 0%,
        rgba(61, 64, 91, 0.3) 100%
      ),
      url('/img/me.jpeg');

    background-position: 60% 40%;
  }

  .menu__text {
    margin: auto;
    padding-top: 88px;
    max-width: 300px;
  }

  @screen sm {
    .menu__text {
      max-width: 400px;
    }
  }

  @screen md {
    .menu__text {
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

  @for $i from 1 through 11 {
    .wait-#{$i} {
      animation-delay: $i * 0.1s;
    }
  }

  .sub-menu {
    a {
      position: relative;
      @apply p-1;
      display: inline-block;

      span {
        position: relative;
        z-index: 2;
      }

      &:before {
        content: ' ';
        background-color: #3d405b;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0px;
        transition: height 0.2s;
        z-index: 1;
      }

      &:hover {
        &:before {
          height: 50%;
        }
      }
    }
  }
</style>
