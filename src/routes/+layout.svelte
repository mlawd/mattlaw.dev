<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';

	$: isHome = $page.route.id === '/';
</script>

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
