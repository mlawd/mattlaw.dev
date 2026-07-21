<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PostSummary } from '$lib/server/sanity';

	interface Props {
		post: PostSummary;
	}

	let { post }: Props = $props();

	const formatDate = (value: string) =>
		new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			timeZone: 'UTC'
		}).format(new Date(value));
</script>

<li>
	<article>
		<p class="writing-meta">
			<time datetime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
		</p>
		<h3>
			<a href={resolve('/blog/[slug]', { slug: post.slug })}
				>{post.title}<span aria-hidden="true"> →</span></a
			>
		</h3>
		{#if post.excerpt}
			<p class="excerpt">{post.excerpt}</p>
		{/if}
	</article>
</li>

<style>
	li {
		border-bottom: 1px solid rgba(237, 236, 228, 0.12);
	}

	article {
		padding: 20px 0 21px;
	}

	.writing-meta {
		margin-bottom: 4px;
		color: #aeb1c1;
		font-size: 12px;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 6px;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: -0.03em;
		line-height: 1.25;
	}

	h3 span {
		display: inline-block;
		margin-left: 8px;
		transition: transform 160ms ease;
	}

	h3 a:hover span {
		transform: translateX(4px);
	}

	.excerpt {
		max-width: 665px;
		margin-bottom: 0;
		color: #c3c4ce;
		font-size: 15px;
	}
</style>
