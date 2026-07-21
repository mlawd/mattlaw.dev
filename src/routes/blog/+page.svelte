<script lang="ts">
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	import PostListItem from '$lib/components/PostListItem.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Writing — Matt Law</title>
	<meta name="description" content="Notes on software engineering, systems, and building things." />
</svelte:head>

<SectionLayout class="writing" ariaLabelledby="writing-heading">
	{#snippet label()}
		<h2>Writing</h2>
	{/snippet}
	<div>
		<h1 id="writing-heading">Writing</h1>
		<p class="intro">Notes on software engineering, systems, and building things.</p>

		{#if data.posts.length}
			<ul class="post-list">
				{#each data.posts as post (post.slug)}
					<PostListItem {post} />
				{/each}
			</ul>
		{:else}
			<p class="empty">Nothing published here yet.</p>
		{/if}
	</div>
</SectionLayout>

<style>
	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 10px;
		font-size: clamp(48px, 5.3vw, 72px);
		font-weight: 500;
		letter-spacing: -0.07em;
		line-height: 0.98;
	}

	.intro {
		max-width: 510px;
		margin-bottom: 39px;
		color: #c3c4ce;
		font-size: 18px;
	}

	.post-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid rgba(237, 236, 228, 0.12);
		list-style: none;
	}

	h2 {
		margin-bottom: 7px;
		font-size: clamp(20px, 2vw, 25px);
		font-weight: 500;
		letter-spacing: -0.04em;
		line-height: 1.2;
	}

	.empty {
		max-width: 680px;
		margin-bottom: 0;
		color: #c3c4ce;
	}

	@media (max-width: 680px) {
		h1 {
			font-size: clamp(48px, 16vw, 67px);
		}
	}
</style>
