<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import PortableTextLink from '$lib/components/PortableTextLink.svelte';
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const formatDate = (value: string) =>
		new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		}).format(new Date(value));

	const portableTextComponents = {
		marks: {
			link: PortableTextLink
		}
	};
</script>

<svelte:head>
	<title>{data.post.title} — Matt Law</title>
	<meta
		name="description"
		content={data.post.excerpt ?? `A post by Matt Law: ${data.post.title}`}
	/>
</svelte:head>

<SectionLayout class="post-layout" ariaLabelledby="post-title">
	{#snippet label()}
		<h2>Writing</h2>
		<span>{formatDate(data.post.publishedAt)}</span>
		{#if data.post.categories.length}
			<span>{data.post.categories.map((category) => category.title).join(', ')}</span>
		{/if}
	{/snippet}
	<article>
		<h1 id="post-title">{data.post.title}</h1>
		{#if data.post.excerpt}
			<p class="dek">{data.post.excerpt}</p>
		{/if}
		<div class="body">
			<PortableText
				value={data.post.body}
				components={portableTextComponents}
				onMissingComponent={false}
			/>
		</div>
		<p class="back"><a href={resolve('/blog')}>← Back to writing</a></p>
	</article>
</SectionLayout>

<style>
	h1,
	p {
		margin-top: 0;
	}

	h1 {
		max-width: 720px;
		margin-bottom: 16px;
		font-size: clamp(38px, 4.6vw, 62px);
		font-weight: 500;
		letter-spacing: -0.065em;
		line-height: 1;
	}

	.dek {
		max-width: 680px;
		margin-bottom: 39px;
		color: #c9cad2;
		font-size: 19px;
		line-height: 1.58;
	}

	.body {
		max-width: 720px;
		color: #d5d5da;
	}

	.body :global(h1),
	.body :global(h2),
	.body :global(h3),
	.body :global(h4) {
		margin: 45px 0 14px;
		color: #edece4;
		font-weight: 500;
		letter-spacing: -0.04em;
		line-height: 1.2;
	}

	.body :global(h1) {
		font-size: clamp(30px, 3.5vw, 42px);
	}

	.body :global(h2) {
		font-size: clamp(25px, 3vw, 34px);
	}

	.body :global(h3) {
		font-size: 22px;
	}

	.body :global(h4) {
		font-size: 18px;
	}

	.body :global(p),
	.body :global(li) {
		font-size: 17px;
	}

	.body :global(p) {
		margin: 0 0 20px;
	}

	.body :global(a) {
		border-bottom: 1px solid rgba(237, 236, 228, 0.45);
	}

	.body :global(a:hover) {
		border-color: #edece4;
	}

	.body :global(ul) {
		margin: 0 0 20px;
		padding-left: 1.2em;
	}

	.body :global(blockquote) {
		margin: 30px 0;
		padding-left: 22px;
		border-left: 2px solid rgba(237, 236, 228, 0.35);
		color: #c3c4ce;
		font-style: italic;
	}

	.body :global(code) {
		padding: 0.1em 0.3em;
		background: rgba(237, 236, 228, 0.1);
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.85em;
	}

	.back {
		margin: 52px 0 0;
		font-size: 14px;
	}

	.back a {
		border-bottom: 1px solid rgba(237, 236, 228, 0.35);
	}

	.back a:hover {
		border-color: #edece4;
	}

	@media (max-width: 680px) {
		h1 {
			font-size: clamp(38px, 13vw, 58px);
		}
	}
</style>
