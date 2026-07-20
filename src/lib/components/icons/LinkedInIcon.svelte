<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let { class: className = '', ...rest }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg {...rest} class={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
	<path
		d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.44 18H5.56V9h2.88v9ZM7 7.77A1.67 1.67 0 1 1 7 4.43a1.67 1.67 0 0 1 0 3.34ZM18.5 18h-2.87v-4.38c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V18H9.64V9h2.75v1.23h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.4V18Z"
	/>
</svg>
