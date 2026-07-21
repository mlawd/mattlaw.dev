<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const links = [
		{ path: '/', label: 'home' },
		{ path: '/blog', label: 'writing' },
		{ path: '/cv', label: 'cv' }
	] as const;

	function isCurrent(path: (typeof links)[number]['path']) {
		const href = resolve(path);

		return (
			page.url.pathname === href ||
			(href === resolve('/blog') && page.url.pathname.startsWith(`${href}/`))
		);
	}
</script>

<header class="site-header">
	<a class="wordmark" href={resolve('/')}>mattlaw.dev</a>
	<nav aria-label="Primary navigation">
		{#each links as link (link.path)}
			<a href={resolve(link.path)} aria-current={isCurrent(link.path) ? 'page' : undefined}
				>{link.label}</a
			>
		{/each}
	</nav>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		width: min(100% - 48px, 1080px);
		margin: 0 auto;
		align-items: center;
		justify-content: space-between;
		padding: 21px 0;
		background: #3d405b;
		color: rgba(237, 236, 228, 0.8);
		font-size: 12px;
	}

	.wordmark {
		font-weight: 600;
	}

	nav {
		display: flex;
		gap: 25px;
		font-size: 14px;
	}

	nav a,
	.wordmark {
		transition: color 160ms ease;
	}

	nav a {
		position: relative;
		padding: 6px 0;
		margin: -6px 0;
	}

	nav a[aria-current='page']::after {
		position: absolute;
		right: 0;
		bottom: -3px;
		left: 0;
		height: 1px;
		background: currentColor;
		content: '';
	}

	nav a:hover,
	.wordmark:hover {
		color: #ffffff;
	}

	@media (max-width: 680px) {
		.site-header {
			width: min(100% - 36px, 540px);
			align-items: flex-start;
			gap: 20px;
		}

		nav {
			flex-wrap: wrap;
			justify-content: flex-end;
			gap: 8px 16px;
		}
	}

	@media print {
		.site-header {
			display: none;
		}
	}
</style>
