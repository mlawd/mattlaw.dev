<script lang="ts">
	import FlyTransition from '$lib/FlyTransition.svelte';
	import type { PageData } from './$types';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import Pill from '$lib/Pill.svelte';

	export let data: PageData;
	let transition = 0;

	onMount(() => {
		transition++;
	});

	const unsub = page.subscribe(() => {
		transition++;
	});

	onDestroy(() => {
		unsub();
	});
</script>

{#key transition}
	<FlyTransition>
		<div class="prose">
			<a href="/">Home</a>
			<FlyTransition delay={300}>
				<h1 class="text-primary text-5xl my-4 text-right">{data.post.title}</h1>
			</FlyTransition>

			<FlyTransition delay={450}>
				<p class="text-right text-2xl">
					{data.post.subtitle}
				</p>
				<p class="my-6 text-right italic">
					{new Date(data.post.date).toLocaleDateString()}
					{#each data.post.tags as tag}
						<Pill>{tag}</Pill>
					{/each}
				</p>
				{@html data.post.body}
			</FlyTransition>
		</div>
	</FlyTransition>
{/key}
