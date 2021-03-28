<script>
  export let href;
</script>

<a {href} class="transition-all hover:text-cta">
  <slot />
</a>

<style lang="scss">
  /*
  a {
    position: relative;
    &:before {
      content: ' ';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 30%;
      @apply bg-primary;
      z-index: -1;

      transition: all 0.2s;
    }

    &:hover {
      &:before {
        @apply bg-cta;
      }
    }
  }
   */
</style>
