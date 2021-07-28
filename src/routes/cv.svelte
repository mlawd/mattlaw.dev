<script context="module" lang="ts">
  export async function preload() {
    const resp = await this.fetch(`/api/cv/`);

    const { page } = await resp.json();

    return {
      page,
    };
  }

</script>

<script>
  import BlockContent from '@movingbrands/svelte-portable-text';
  import { urlFor, serializers } from '../components/serializers/';
  import Hero from '../components/Hero.svelte';
  import Meta from '../components/Meta.svelte';
  import Github from 'svelte-material-icons/GithubFace.svelte';
  import Linkedin from 'svelte-material-icons/Linkedin.svelte';
  import Twitter from 'svelte-material-icons/Twitter.svelte';
  import Email from 'svelte-material-icons/EmailOutline.svelte';
  import { skillIcons } from '../lib/skill-icons';
  export let page;

  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  function formatDate(dateStr) {
    if (dateStr) {
      const date = new Date(dateStr);
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    } else return 'Present';
  }

  const contactDetails = [
    {
      icon: Linkedin,
      link: 'https://linkedin.com/in/mattlawdev',
      label: 'Linkedin',
    },
    {
      icon: Twitter,
      link: 'https://twitter.com/mattlawdev',
      label: 'Twitter',
    },
    {
      icon: Github,
      link: 'https://github.com/mlawd',
      label: 'Github',
    },
    {
      icon: Email,
      link: 'mailto://me@mattlaw.dev',
      label: 'Email',
      title: 'me@mattlaw.dev',
    },
  ];

</script>

<Meta title={page.title} description={page.byline} />

<Hero title={page.title} byline={page.byline}>
  {#if page.excerptRaw}
    <span class="print:hidden">
      <BlockContent blocks={page.excerptRaw} {serializers} />
    </span>
  {/if}
</Hero>

<div
  class="w-full p-8 text-center flex justify-center print:py-0 my-8 print:mt-0"
>
  {#each contactDetails as contact}
    <a
      role="button"
      href={contact.link}
      aria-label={contact.label}
      rel="noopener"
      target="_blank"
      class="flex flex-col items-center px-4 print:px-2 text-accent"
      title={contact.title ?? contact.link}
    >
      <svelte:component this={contact.icon} size="36px" />
      <span class="hidden print:block text-xs">
        {contact.title ?? contact.link}
      </span>
    </a>
  {/each}
</div>

<div class="prose print:prose-sm max-w-screen-lg mx-auto">
  <!-- excerpt -->
  <section class="px-8 hidden print:block">
    <BlockContent blocks={page.excerptRaw} {serializers} />
  </section>

  <!-- Education -->
  <h2 class="text-center">Education</h2>
  <p class="text-center">
    <span class="font-bold">
      1<sup>st</sup> Class (Hons) BSc Computer Science
    </span>
    | <span class="font-light">Newcastle University</span>
  </p>

  <!-- skills -->
  <h2 class="text-center">Skills</h2>
  <div
    class="w-full sm:w-1/2 md:w-1/3 print:w-full mx-auto flex justify-center flex-wrap px-2"
  >
    {#each skillIcons as skill}
      <span class="m-3 print:m-2 text-accent">
        <svelte:component this={skill} size="36px" />
      </span>
    {/each}
  </div>

  <!-- experience -->
  {#each page.experience || [] as content}
    <div class="flex flex-wrap my-6">
      <div class="w-full md:w-1/3 px-4">
        <p class="job-title">{content.title}</p>
        <p class="job-company">{content.subtitle}</p>
        <p class="job-company">
          {formatDate(content.dateFrom)} - {formatDate(content.dateTo)}
        </p>
      </div>
      <div class="w-full md:w-2/3 print:w-full px-8 py-2">
        {#if content.contentRaw}
          <BlockContent blocks={content.contentRaw} {serializers} />
        {/if}
      </div>
    </div>
  {/each}
  <div class="w-full md:w-2/3 mx-auto px-4 py-2">
    <h2 style="margin-top: 0">Hobbies</h2>

    <BlockContent blocks={page.hobbiesRaw} {serializers} />
  </div>
</div>

<style lang="scss">
  h2,
  h3 {
    @apply text-accent;
  }

  :global(h2) {
    @apply text-accent;
  }

  .job-title {
    @apply text-accent;
    font-weight: bold;
    margin-bottom: 0;

    @screen print {
      display: inline;

      &:after {
        content: ' | ';
      }
    }
  }

  .job-company {
    margin: 0;

    @screen print {
      display: inline;

      &:last-of-type {
        float: right;
      }
    }
  }

</style>
