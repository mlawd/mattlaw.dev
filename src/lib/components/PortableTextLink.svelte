<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type LinkMark = {
		href?: string;
	};

	interface Props {
		portableText: MarkComponentProps<LinkMark>;
		children?: Snippet;
	}

	let { portableText, children }: Props = $props();
	let href = $derived(portableText.value?.href);
</script>

{#if href}
	<a {href} rel="external">{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
