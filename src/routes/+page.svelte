<script lang="ts">
	import type { PageData } from './$types';
	import FlyTransition from '$lib/FlyTransition.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Menu from '$lib/Menu.svelte';
	import Pill from '$lib/Pill.svelte';

	export let data: PageData;

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString();
	}

	let renderList = false;

	onMount(() => {
		renderList = true;
	});
</script>

<FlyTransition>
	<Menu />
	{#if renderList}
		<ul class="blog-list">
			{#each data.posts as post, i}
				<li
					class="text-secondary my-10"
					in:fly|global={{ x: -100, duration: 100, delay: 150 * i + 750 }}
					out:fly={{ x: -100, duration: 100, delay: 150 * i }}
				>
					<a href={`/blog/${post.slug}`}>
						<span class="text-xs block">{formatDate(post.date)}</span>
						<p class="text-xl font-semibold my-2">
							{post.title}
						</p>
						<p class="text-sm">{post.subtitle}</p>
						<p class="text-xs my-2">
							{#each post.tags as tag, i}
								{tag}&nbsp;
							{/each}
						</p>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</FlyTransition>
