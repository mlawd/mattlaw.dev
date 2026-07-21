<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		class?: string;
		variant?: 'cv' | 'writing';
		ariaLabelledby?: string;
		label: Snippet;
		children: Snippet;
	}

	let { id, class: className = '', variant, ariaLabelledby, label, children }: Props = $props();
</script>

<section
	{id}
	class={`section-layout ${className} ${variant ?? ''}`}
	aria-labelledby={ariaLabelledby}
>
	<div class="section-label">{@render label()}</div>
	<div class="section-content">{@render children()}</div>
</section>

<style>
	.section-layout {
		display: grid;
		grid-template-columns: minmax(130px, 0.2fr) minmax(0, 1.8fr);
		gap: clamp(46px, 7vw, 145px);
		padding: 52px 0;
		border-top: 1px solid rgba(237, 236, 228, 0.12);
	}

	.section-label :global(p),
	.section-label :global(h2) {
		margin: 0;
		color: #c3c4ce;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.section-label :global(h2) {
		color: #edece4;
		font-size: 16px;
		letter-spacing: 0.12em;
		line-height: 1.2;
	}

	.section-label :global(span) {
		display: block;
		margin-top: 3px;
		color: #aeb1c1;
		font-size: 11px;
		line-height: 1.4;
	}

	.section-content {
		min-width: 0;
	}

	@media (max-width: 680px) {
		.section-layout {
			grid-template-columns: 1fr;
			gap: 25px;
			padding: 43px 0;
		}

		.section-layout.writing {
			grid-template-columns: minmax(64px, auto) minmax(0, 1fr);
		}
	}

	@media print {
		.section-layout.cv {
			display: block;
			padding: 11px 0 10px;
			border-color: #b5bac3;
			break-inside: auto;
		}

		.section-layout.cv .section-label {
			margin-bottom: 5px;
		}

		.section-layout.cv .section-label :global(p),
		.section-layout.cv .section-label :global(h2) {
			color: #3d405b;
			font-size: 7.5pt;
			line-height: 1.2;
		}
	}
</style>
