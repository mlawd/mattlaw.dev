<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteNav from '$lib/components/SiteNav.svelte';

	let { children } = $props();
</script>

<SiteNav />

<a class="skip-link" href="#main">Skip to content</a>

{@render children()}

<footer class="site-footer">
	<a href={resolve('/')}>mattlaw.dev</a>
	<p>© {new Date().getFullYear()} Matt Law • built with opencode + neovim</p>
</footer>

<style>
	.site-footer {
		display: flex;
		width: min(100% - 48px, 1080px);
		margin: 0 auto;
		justify-content: space-between;
		padding: 21px 0 31px;
		border-top: 1px solid rgba(237, 236, 228, 0.12);
		color: #c3c4ce;
		font-size: 11px;
	}

	.site-footer a {
		transition: color 160ms ease;
	}

	.site-footer a:hover {
		color: #ffffff;
	}

	.site-footer p {
		margin: 0;
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
		.site-footer {
			width: min(100% - 36px, 540px);
			gap: 16px;
			padding-bottom: 24px;
		}

		.site-footer p {
			text-align: right;
		}
	}

	@media print {
		.skip-link,
		.site-footer {
			display: none;
		}
	}
</style>
