<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';

	$: isHome = $page.route.id === '/';

	$: title = `mattlaw.dev | ${$page.data?.post?.title ?? 'Home'}`;
	$: description =
		$page.data?.post?.subtitle ??
		'Just some rambling thoughts of a Lead Engineer';

	$: type = $page.data?.post ? 'article' : '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={type} />
	<meta property="og:description" content={description} />
	{#if type === 'article'}
		{#each $page.data?.post?.tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
</svelte:head>

<main class="p-8 w-full" class:light={!isHome}>
	<div class="content">
		<slot />
	</div>
</main>

<style lang="scss">
	main {
		background-color: var(--bg-color);
		min-height: 100vh;
		.content {
			max-width: 1500px;
			margin: auto;
		}

		transition: all 0.5s ease-in;

		&.light {
			background-color: var(--bg-color-light);
		}
	}
</style>
