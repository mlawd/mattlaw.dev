<script lang="ts">
	import { fly } from 'svelte/transition';

	export let duration = 250;
	export let reverse = false;
	export let delay = duration;
	export let vertical = false;
	const distance = -50;

	let x = vertical ? 0 : distance * (reverse ? -1 : 1);
	let y = vertical ? distance * (reverse ? -1 : 1) : 0;
</script>

<div in:fly={{ x, y, duration, delay }} out:fly={{ x, y, duration }}>
	<slot />
</div>
