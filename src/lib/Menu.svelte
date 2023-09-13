<script lang="ts">
	import Github from 'svelte-icons/fa/FaGithub.svelte';
	import Linkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import Email from 'svelte-icons/md/MdEmail.svelte';
</script>

<div class="menu__text">
	<h1 class="mb-0 fade-right wait-2 text-primary">mattlaw.dev</h1>
	<h2 class="text-secondary mt-0 fade-left wait-2 leading-7">software.engineer</h2>
	<h2 class="text-secondary mt-0 fade-left wait-3 leading-7">tech.lead</h2>
	<h2 class="text-secondary mt-0 fade-left wait-4 leading-7">father</h2>

	<ul class="socials pl-0 mt-5 text-secondary">
		<li class="fade-down wait-5 w-5">
			<a
				role="button"
				href="https://github.com/mlawd"
				aria-label="Github"
				rel="noopener"
				target="_blank"
			>
				<Github />
			</a>
		</li>
		<li class="fade-down wait-6 w-5 ml-2">
			<a
				role="button"
				href="https://www.linkedin.com/in/mattlawdev"
				aria-label="Linkedin"
				rel="noopener"
				target="_blank"
			>
				<Linkedin />
			</a>
		</li>
		<li class="fade-down wait-6 w-5 ml-2">
			<a
				role="button"
				href="mailto://me@mattlaw.dev"
				aria-label="Mail"
				rel="noopener"
				target="_blank"
			>
				<Email />
			</a>
		</li>
	</ul>
</div>

<style global lang="scss">
	.socials {
		li {
			display: inline-block;
			transition: all 0.4s;

			a {
				svg {
					display: inline-block;
				}
			}
		}
	}

	.menu__text {
		margin: auto;
		max-width: 1920px;
	}

	@screen md {
		.menu__text {
			// padding: 100px;
		}
	}

	@keyframes fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			transform: translateY(0) translateX(0);
		}
	}

	.fade-down {
		animation: fadein 0.5s forwards;
		opacity: 0;
		transform: translateY(-20px);
	}

	.fade-left {
		animation: fadein 0.5s forwards;
		opacity: 0;
		transform: translateX(20px);
	}

	.fade-right {
		animation: fadein 0.5s forwards;
		opacity: 0;
		transform: translateX(-20px);
	}

	@for $i from 1 through 11 {
		.wait-#{$i} {
			animation-delay: $i * 0.1s;
		}
	}
</style>
