<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let { class: className = '', ...rest }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg {...rest} class={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
	<path d="M3.5 5.5h17v13h-17z" fill="none" stroke="currentColor" stroke-width="1.8" />
	<path d="m4 6 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" />
</svg>
