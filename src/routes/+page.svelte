<script lang="ts">
	import { EmailIcon, GitHubIcon, LinkedInIcon } from '$lib/components/icons';

	import type { PageProps } from './$types';

	const navigation = [
		{ label: 'about', href: '/#about' },
		{ label: 'now', href: '/#now' },
		{ label: 'cv', href: '/cv' },
		{ label: 'skills', href: '/#skills' },
		{ label: 'contact', href: '/#contact' }
	] as const;

	let { data }: PageProps = $props();

	let cv = $derived(data.cv);
</script>

<svelte:head>
	<title>Matt Law — Staff Engineer</title>
	<meta
		name="description"
		content="Matt Law is a staff engineer designing distributed, event-driven systems."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header id="top" class="site-header">
	<a class="wordmark" href="#top">mattlaw.dev</a>
	<nav aria-label="Primary navigation">
		{#each navigation as item (item.href)}
			<a href={item.href}>{item.label}</a>
		{/each}
	</nav>
</header>

<a class="skip-link" href="#main">Skip to content</a>

<main id="main">
	<section class="hero" aria-labelledby="intro-title">
		<div class="hero-copy">
			<p class="eyebrow">Staff engineer · remote, UK</p>
			<h1 id="intro-title">matt law</h1>
			<p class="roles">
				{#each cv.profile.roles as role, index (role)}
					{role}{#if index < cv.profile.roles.length - 1}<span
							aria-hidden="true"
							style="padding: 0 8px"
						>
							·
						</span>{/if}
				{/each}
			</p>
			<p class="intro">
				I build distributed, event-driven systems — from serverless microservices to the training
				simulators I cut my teeth on. Genuinely enjoy picking up new tools, and I lead best when
				there's a scrum board or a scoreboard involved.
			</p>
			<div class="actions">
				<a class="button button-primary" href="/cv">Read the CV <span aria-hidden="true">→</span></a
				>
				<a class="button" href="#contact">Get in touch</a>
			</div>
		</div>

		<aside class="glance" aria-label="At a glance">
			<h2>At a glance</h2>
			<dl>
				<div>
					<dt>role</dt>
					<dd>staff engineer, Titanbay</dd>
				</div>
				<div>
					<dt>based</dt>
					<dd>Remote, UK</dd>
				</div>
			</dl>
			{#if cv.profile.available}
				<p class="availability">
					<span class="icon" class:icon-available={cv.profile.available}>•</span> open to interesting
					problems
				</p>
			{/if}
			<div class="profile-links">
				<a href="https://github.com/mlawd" target="_blank" rel="noreferrer">
					<GitHubIcon class="link-icon" />
					github.com/mlawd
				</a>
				<a href="https://www.linkedin.com/in/mattlawdev" target="_blank" rel="noreferrer">
					<LinkedInIcon class="link-icon" />
					linkedin.com/in/mattlawdev
				</a>
				<a href="mailto:me@mattlaw.dev">
					<EmailIcon class="link-icon" />
					me@mattlaw.dev
				</a>
			</div>
		</aside>
	</section>

	<section id="about" class="section split-section" aria-labelledby="about-heading">
		<div class="section-label">
			<p>About</p>
		</div>
		<div class="section-content prose">
			<h2 id="about-heading">
				I'm Matt — an enthusiastic, hard-working software engineer with a decade-plus building
				enterprise and distributed systems, from training simulators to serverless platforms.
			</h2>
			<p>
				I'm always looking to improve, with a genuine enjoyment of learning new technologies —
				lately that's meant leaning hard into agentic coding tools alongside the usual Go,
				TypeScript and cloud infrastructure work. I've led teams both pan-European and remote, and
				I'm just as comfortable writing the architecture doc as I am pairing on the fix.
			</p>
			<p>
				I've played team sports since I was a kid, and it shows in how I work — I take leadership
				when it's needed, but I'd rather the team win than take the credit.
			</p>
		</div>
	</section>

	<section id="now" class="section split-section" aria-labelledby="now-heading">
		<div class="section-label">
			<h2 id="now-heading">Now</h2>
			<span>updated jul 2026</span>
		</div>
		<ul class="section-content update-list">
			{#each data.cv.updates as update (update)}
				<li>{update}</li>
			{/each}
		</ul>
	</section>

	<section id="cv" class="section split-section experience" aria-labelledby="experience-heading">
		<div class="section-label">
			<h2 id="experience-heading">Experience</h2>
		</div>
		<div class="section-content timeline">
			{#each data.cv.experience as role (role.period + role.title)}
				<article>
					<div class="timeline-meta">
						{role.period}
					</div>
					<div>
						<h3>{role.title}</h3>
						{#if role.description}
							<p>{role.description}</p>
						{/if}
						{#if role.skills.length}
							<ul class="tags" aria-label={`${role.title} skills`}>
								{#each role.skills as skill (skill)}
									<li>{skill}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="skills" class="section split-section" aria-labelledby="skills-heading">
		<div class="section-label">
			<h2 id="skills-heading">Stack</h2>
		</div>
		<div class="section-content stack-grid">
			{#each data.cv.stack as group (group.title)}
				<div>
					<h3>{group.title}</h3>
					<ul>
						{#each group.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<section id="contact" class="section contact" aria-labelledby="contact-heading">
		<p class="eyebrow">Contact</p>
		<h2 id="contact-heading">Let's talk shop.</h2>
		<p>Hiring, a hard systems problem, or just want to argue about databases? My inbox is open.</p>
		<div class="actions">
			<a class="button button-primary" href="mailto:me@mattlaw.dev"
				><EmailIcon class="link-icon" />
				&nbsp;me@mattlaw.dev</a
			>
			<a class="button" href="https://github.com/mlawd" target="_blank" rel="noreferrer"
				><GitHubIcon class="link-icon" />
				&nbsp;GitHub</a
			>
			<a
				class="button"
				href="https://www.linkedin.com/in/mattlawdev"
				target="_blank"
				rel="noreferrer"
				><LinkedInIcon class="link-icon" />
				&nbsp;LinkedIn</a
			>
		</div>
	</section>
</main>

<footer>
	<a href="#top">mattlaw.dev</a>
	<p>© 2026 Matt Law · built in the terminal</p>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
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
	main,
	footer {
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
	.wordmark,
	.profile-links a,
	footer a {
		transition: color 160ms ease;
	}

	nav a:hover,
	.wordmark:hover,
	.profile-links a:hover,
	footer a:hover {
		color: #ffffff;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.42fr) minmax(275px, 0.78fr);
		gap: clamp(56px, 11vw, 156px);
		align-items: center;
		min-height: 320px;
		padding: 49px 0 81px;
	}

	.eyebrow,
	.section-label p,
	.section-label h2,
	.glance h2 {
		margin: 0;
		color: #c3c4ce;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.section-label h2 {
		color: #edece4;
		font-size: 16px;
		letter-spacing: 0.12em;
		line-height: 1.2;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin: 14px 0 8px;
		font-size: clamp(48px, 5.3vw, 72px);
		font-weight: 500;
		letter-spacing: -0.07em;
		line-height: 0.98;
	}

	.roles {
		margin-bottom: 29px;
		color: #d5d5da;
		font-size: 15px;
	}

	.intro {
		max-width: 510px;
		margin-bottom: 25px;
		color: #dddddf;
		font-size: 18px;
		line-height: 1.65;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 40px;
		padding: 0 15px;
		border: 1px solid rgba(237, 236, 228, 0.28);
		border-radius: 2px;
		color: #f0eff0;
		font-size: 13px;
		font-weight: 500;
		transition:
			background-color 160ms ease,
			border-color 160ms ease,
			color 160ms ease;
	}

	.button:hover {
		border-color: rgba(237, 236, 228, 0.65);
		background: rgba(237, 236, 228, 0.08);
	}

	.button-primary {
		border-color: #edece4;
		background: #edece4;
		color: #3d405b;
	}

	.button-primary:hover {
		border-color: #ffffff;
		background: #ffffff;
		color: #333650;
	}

	.glance {
		padding: 18px 23px 15px;
		border: 1px solid rgba(237, 236, 228, 0.13);
		border-radius: 4px;
		color: #ced0d7;
	}

	.glance h2 {
		margin-bottom: 10px;
	}

	dl {
		margin: 0;
	}

	dl div {
		display: grid;
		grid-template-columns: 48px 1fr;
		gap: 12px;
		padding: 4px 0;
	}

	dt {
		color: #aeb1c1;
	}

	dd {
		margin: 0;
		color: #e3e2e2;
		font-size: 12px;
		font-weight: 600;
		text-align: right;
	}

	.availability {
		display: flex;
		align-items: center;
		margin: 10px 0 9px;
		border-top: 1px solid rgba(237, 236, 228, 0.1);
		border-bottom: 1px solid rgba(237, 236, 228, 0.1);
		font-size: 12px;
	}

	.availability .icon {
		color: red;
		margin-right: 4px;
		font-size: 30px;
	}

	.availability .icon-available {
		color: green;
	}

	.profile-links {
		display: grid;
		gap: 3px;
		font-size: 13px;
		line-height: 1.45;
		color: #c3c4ce;
	}

	.profile-links a {
		display: inline-flex;
		align-items: center;
		gap: 7px;
	}

	:global(.link-icon) {
		width: 14px;
		height: 14px;
		flex: none;
		fill: currentColor;
	}

	.section {
		border-top: 1px solid rgba(237, 236, 228, 0.12);
		scroll-margin-top: 70px;
	}

	.split-section {
		display: grid;
		grid-template-columns: minmax(130px, 0.62fr) minmax(0, 1.38fr);
		gap: clamp(46px, 9vw, 145px);
		padding: 72px 0;
	}

	.section-label span {
		display: block;
		margin-top: 3px;
		color: #aeb1c1;
		font-size: 11px;
		line-height: 1.4;
	}

	.prose {
		max-width: 685px;
	}

	.prose h2 {
		margin-bottom: 31px;
		font-size: clamp(18px, 1.8vw, 23px);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1.48;
	}

	.prose p {
		max-width: 665px;
		margin-bottom: 17px;
		color: #c3c4cf;
		font-size: 16px;
	}

	.update-list {
		display: grid;
		gap: 10px;
		margin: 0;
		padding: 0;
		list-style: none;
		color: #d8d8de;
		font-size: 16px;
	}

	.update-list li {
		display: grid;
		grid-template-columns: 10px 1fr;
		gap: 12px;
	}

	.update-list li::before {
		content: '•';
		color: #edece4;
	}

	.experience {
		padding-bottom: 82px;
	}

	.timeline {
		display: grid;
		gap: 43px;
	}

	.timeline article {
		display: grid;
		grid-template-columns: 122px minmax(0, 1fr);
		gap: 39px;
	}

	.timeline-meta {
		display: grid;
		align-content: start;
		margin-top: 2px;
		gap: 1px;
		font-size: 12px;
		line-height: 1.4;
	}

	.timeline h3,
	.stack-grid h3 {
		margin-bottom: 7px;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.025em;
	}

	.timeline p {
		margin-bottom: 11px;
		color: #c3c4ce;
		font-size: 16px;
		line-height: 1.62;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.tags li {
		padding: 1px 7px;
		border: 1px solid rgba(237, 236, 228, 0.18);
		border-radius: 1px;
		color: #c6c7d0;
		font-size: 11px;
	}

	.stack-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: clamp(36px, 8vw, 125px);
		row-gap: 46px;
	}

	.stack-grid h3 {
		font-size: 15px;
		font-weight: 600;
	}

	.stack-grid ul {
		margin: 0;
		padding: 0;
		list-style: none;
		color: #c3c4ce;
		font-size: 15px;
		line-height: 1.78;
	}

	.contact {
		padding: 82px 0 75px;
		border-top: 1px solid rgba(237, 236, 228, 0.12);
	}

	.contact h2 {
		margin: 18px 0 12px;
		font-size: clamp(34px, 4vw, 50px);
		font-weight: 500;
		letter-spacing: -0.065em;
		line-height: 1;
	}

	.contact > p:not(.eyebrow) {
		max-width: 420px;
		margin-bottom: 27px;
		color: #c8c9d1;
		font-size: 16px;
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 21px 0 31px;
		border-top: 1px solid rgba(237, 236, 228, 0.12);
		color: #c3c4ce;
		font-size: 11px;
	}

	footer p {
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
		.site-header,
		main,
		footer {
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

		.hero {
			grid-template-columns: 1fr;
			gap: 46px;
			padding: 57px 0 62px;
		}

		h1 {
			font-size: clamp(48px, 16vw, 67px);
		}

		.roles {
			font-size: 13px;
		}

		.split-section {
			grid-template-columns: 1fr;
			gap: 28px;
			padding: 54px 0;
		}

		.timeline article {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.timeline-meta {
			grid-auto-flow: column;
			justify-content: start;
			gap: 12px;
		}

		.stack-grid {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.contact {
			padding: 60px 0;
		}

		footer {
			gap: 16px;
			padding-bottom: 24px;
		}

		footer p {
			text-align: right;
		}
	}
</style>
