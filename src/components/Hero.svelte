<script>
  export let title;
  export let byline;
  export let image = null;

</script>

<div
  class="relative bg-accent print:bg-transparent min-h-screen lg:h-screen-small print-reset flex items-center justify-center text-center"
>
  {#if image}
    <img
      src={image}
      alt=""
      class="z-10 h-full w-full object-cover absolute inset-0"
    />
  {/if}
  <div
    class="z-20 bg-accent max-w-3xl px-4 py-8 print:py-4 print:bg-transparent"
  >
    <h1 class="text-5xl md:text-7xl mb-8 print:text-accent">
      {title}
    </h1>
    <p class="text-secondary my-4 text-lg md:text-2xl print:text-accent">
      {byline}
    </p>
    <section class="prose mx-auto text-secondary">
      <slot />
    </section>
  </div>
</div>

<style lang="scss">
  .print-reset {
    @screen print {
      min-height: 0;
    }
  }

</style>
