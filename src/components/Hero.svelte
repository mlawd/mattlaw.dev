<script>
  export let title;
  export let byline;
  export let image = null;
</script>

<div
  class="relative bg-accent h-screen lg:h-screen-small flex items-center justify-center text-center"
>
  {#if image}
    <img
      src={image}
      alt=""
      class="z-10 h-full w-full object-cover absolute inset-0"
    />
  {/if}
  <div class="z-20 bg-accent max-w-3xl px-4 py-8">
    <h1 class="text-4xl md:text-9xl mb-4">
      {title}
    </h1>
    <p class="text-secondary my-4 text-lg md:text-2xl">
      {byline}
    </p>
    <section class="prose mx-auto text-secondary">
      <slot />
    </section>
  </div>
</div>
