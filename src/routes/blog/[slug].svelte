<script context="module" lang="ts">
  export async function preload({ params }) {
    const resp = await this.fetch(`/api/blog/${params.slug}`);

    const { post } = await resp.json();

    return {
      post: {
        ...post,
        date: new Date(post.publishedAt),
      },
    };
  }
</script>

<script>
  import BlockContent from '@movingbrands/svelte-portable-text';
  import Hero from '../../components/Hero.svelte';
  import { serializers } from '../../components/serializers/';
  import Meta from '../../components/Meta.svelte';
  export let post;

  const date = new Date(post.publishedAt).toLocaleDateString();
  const byline = post.categories.reduce(
    (acc, cur) => `${acc} | ${cur}`,
    `${date}`
  );
</script>

<Meta
  title={post.title}
  description={post.excerpt}
  image={post.mainImage.asset.url}
  type="article"
  tags={post.categories}
/>

<Hero title={post.title} {byline} image={post.mainImage.asset.url}>
  {post.excerpt}
</Hero>

<article class="p-8">
  <div class="prose mx-auto prose-lg">
    <BlockContent blocks={post.bodyRaw} {serializers} />
  </div>
</article>

<style lang="scss">
  article :global(h2) {
    @apply text-secondary;
    @apply bg-accent;
    @apply py-4;
    margin-left: -2000px;
    padding-left: 2000px;
  }

  article :global(h3) {
    @apply text-secondary;
    @apply bg-accent;
    @apply py-4;
    margin-left: -2000px;
    padding-left: 2000px;
  }

  article :global(code) {
    &:before,
    &:after {
      content: '';
    }
  }
</style>
