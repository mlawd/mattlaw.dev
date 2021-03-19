<script>
  import Prism from 'svelte-prismjs';
  export let code = 'code';
  export let language = 'html';
</script>

<div>
  <Prism showLineNumber={true} {language} {code} />
</div>

<style lang="scss">
  div :global(pre) {
    @apply px-0;

    &:before,
    &:after {
      display: none;
    }
  }
</style>
