<script>
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
  import 'prismjs/plugins/command-line/prism-command-line.css';
  import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

  import 'prismjs/themes/prism.css';
  import 'prismjs/themes/prism-okaidia.css';
  import Prism from 'svelte-prismjs';
  import 'prismjs/components/prism-csharp.js';
  export let code;
  export let language;
</script>

<div>
  <Prism showLineNumber={true} {language} {code} showLineNumbers={true} />
</div>
