<script lang="ts">
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header id="top" class="site-header">
	<a class="wordmark" href={resolve('/')}>mattlaw.dev</a>
	<nav aria-label="Primary navigation">
		<a href={resolve('/')}>home</a>
		<a href={resolve('/blog')}>writing</a>
		<a href={resolve('/cv')}>cv</a>
	</nav>
</header>

<a class="skip-link" href="#main">Skip to content</a>

<main id="main">
	{@render children()}
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: #3d405b;
		color: #edece4;
		font-family:
			'Raleway',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.65;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(a:focus-visible) {
		outline: 2px solid #edece4;
		outline-offset: 4px;
	}

	.site-header,
	main {
		width: min(100% - 48px, 1080px);
		margin: 0 auto;
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 21px 0;
		background: #3d405b;
		font-size: 12px;
		color: rgba(237, 236, 228, 0.8);
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

	nav a:hover,
	.wordmark:hover {
		color: #ffffff;
	}

	.skip-link {
		position: fixed;
		z-index: 20;
		top: 12px;
		left: 12px;
		padding: 8px 12px;
		background: #edece4;
		color: #3d405b;
		font-size: 11px;
		transform: translateY(-160%);
		transition: transform 160ms ease;
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	@media (max-width: 680px) {
		.site-header,
		main {
			width: min(100% - 36px, 540px);
		}

		.site-header {
			align-items: flex-start;
			gap: 20px;
		}

		nav {
			flex-wrap: wrap;
			justify-content: flex-end;
			gap: 8px 16px;
		}

	}
</style>
