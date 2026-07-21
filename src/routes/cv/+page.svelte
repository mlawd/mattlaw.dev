<script lang="ts">
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	import { EmailIcon, GitHubIcon, LinkedInIcon } from '$lib/components/icons';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let cv = $derived(data.cv);
</script>

<svelte:head>
	<title>{cv.profile.name} — CV</title>
	<meta name="description" content={`${cv.profile.name} — ${cv.profile.title}`} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="cv-actions">
	<button class="print-link" type="button" onclick={() => window.print()}>Print CV</button>
</div>

<main id="main">
	<header class="cv-header">
		<div>
			<p class="eyebrow">{cv.profile.location}</p>
			<h1>{cv.profile.name}</h1>
			<p class="title">{cv.profile.title}</p>
			<ul class="roles" aria-label="Roles">
				{#each cv.profile.roles as role, index (role)}
					<li>
						{role}{#if index < cv.profile.roles.length - 1}<span
								aria-hidden="true"
								style="padding: 0 8px;"
							>
								·
							</span>{/if}
					</li>
				{/each}
			</ul>
		</div>

		<address class="contact-links" aria-label="Contact details">
			<a href={`mailto:${cv.profile.contact.email}`}>
				<EmailIcon class="link-icon" />
				{cv.profile.contact.email}
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={cv.profile.contact.github} target="_blank" rel="noreferrer">
				<GitHubIcon class="link-icon" />
				github.com/mlawd
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={cv.profile.contact.linkedin} target="_blank" rel="noreferrer">
				<LinkedInIcon class="link-icon" />
				linkedin.com/in/mattlawdev
			</a>
		</address>
	</header>

	<SectionLayout variant="cv" class="cv-section profile" ariaLabelledby="profile-heading">
		{#snippet label()}<p>Profile</p>{/snippet}
		<h2 id="profile-heading">{cv.profile.focus}</h2>
		{#each cv.profile.about as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</SectionLayout>

	<div class="lower-sections">
		<SectionLayout variant="cv" class="cv-section skills" ariaLabelledby="skills-heading">
			{#snippet label()}<h2 id="skills-heading">Skills</h2>{/snippet}
			<div class="stack-grid">
				{#each cv.stack as group (group.title)}
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
		</SectionLayout>

		<SectionLayout variant="cv" class="cv-section experience" ariaLabelledby="experience-heading">
			{#snippet label()}<h2 id="experience-heading">Experience</h2>{/snippet}
			<div class="timeline">
				{#each cv.experience as role (role.period + role.title)}
					<article class="role">
						<div class="role-period">{role.period}</div>
						<div class="role-content">
							<h3>{role.title}</h3>
							{#if role.bullets.length}
								<ul class="achievement-list">
									{#each role.bullets as bullet (bullet)}
										<li>{bullet}</li>
									{/each}
								</ul>
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
		</SectionLayout>

		<SectionLayout variant="cv" class="cv-section education" ariaLabelledby="education-heading">
			{#snippet label()}<h2 id="education-heading">Education</h2>{/snippet}
			<h3>{cv.education.institution}</h3>
			<p>{cv.education.degree}</p>
			<p class="result">{cv.education.result}</p>
		</SectionLayout>
	</div>
</main>

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
		line-height: 1.6;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(a:focus-visible),
	:global(button:focus-visible) {
		outline: 2px solid #edece4;
		outline-offset: 4px;
	}

	.cv-actions,
	main {
		width: min(100% - 48px, 1080px);
		margin: 0 auto;
	}

	.cv-actions {
		padding-top: 4px;
		color: rgba(237, 236, 228, 0.8);
		font-size: 12px;
	}

	.contact-links a {
		transition: color 160ms ease;
	}

	.print-link {
		padding: 5px 10px;
		border: 1px solid rgba(237, 236, 228, 0.3);
		border-radius: 2px;
		background: transparent;
		color: inherit;
		cursor: pointer;
		font: inherit;
		font-size: 12px;
	}

	.print-link:hover {
		background: rgba(237, 236, 228, 0.09);
	}

	.cv-header {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(245px, 0.45fr);
		align-items: end;
		gap: 48px;
		padding: 72px 0 62px;
	}

	.eyebrow {
		margin: 0;
		color: #c3c4ce;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin: 15px 0 6px;
		font-size: clamp(48px, 6vw, 76px);
		font-weight: 500;
		letter-spacing: -0.07em;
		line-height: 0.98;
	}

	.title {
		margin-bottom: 8px;
		color: #edece4;
		font-size: 21px;
		font-weight: 500;
		letter-spacing: -0.03em;
	}

	.roles {
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		list-style: none;
		color: #c3c4ce;
		font-size: 14px;
	}

	.contact-links {
		display: grid;
		justify-items: end;
		gap: 7px;
		margin: 0;
		color: #d5d5da;
		font-size: 13px;
		font-style: normal;
	}

	.contact-links a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	:global(.link-icon) {
		width: 14px;
		height: 14px;
		flex: none;
		fill: currentColor;
	}

	:global(.cv-section.profile) h2 {
		max-width: 700px;
		margin-bottom: 24px;
		font-size: clamp(20px, 2vw, 25px);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1.42;
		text-transform: capitalize;
	}

	:global(.cv-section.profile) p,
	:global(.cv-section.education) p {
		max-width: 700px;
		margin-bottom: 14px;
		color: #c3c4cf;
	}

	.timeline {
		display: grid;
		gap: 38px;
	}

	.role {
		display: grid;
		grid-template-columns: 80px minmax(0, 1fr);
		gap: 15px;
		break-inside: avoid;
	}

	.role-period {
		margin-top: 3px;
		color: #aeb1c1;
		font-size: 12px;
		line-height: 1.4;
	}

	.role h3,
	.stack-grid h3,
	:global(.cv-section.education) h3 {
		margin-bottom: 10px;
		font-size: 17px;
		font-weight: 500;
		letter-spacing: -0.025em;
	}

	.achievement-list {
		display: grid;
		gap: 6px;
		margin: 0 0 13px;
		padding-left: 18px;
		color: #c3c4ce;
	}

	.achievement-list li::marker {
		color: #edece4;
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

	.lower-sections {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'experience experience'
			'skills education';
		gap: clamp(46px, 9vw, 145px);
		border-top: 1px solid rgba(237, 236, 228, 0.12);
	}

	:global(.lower-sections .skills),
	:global(.lower-sections .education) {
		display: block;
		border-top: 0;
	}

	:global(.lower-sections .skills .section-label),
	:global(.lower-sections .education .section-label) {
		margin-bottom: 10px;
	}

	:global(.lower-sections .skills) {
		grid-area: skills;
	}

	:global(.lower-sections .experience) {
		grid-area: experience;
	}

	:global(.lower-sections .education) {
		grid-area: education;
	}

	.stack-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 30px 36px;
	}

	.stack-grid h3 {
		font-size: 14px;
		font-weight: 600;
	}

	.stack-grid ul {
		margin: 0;
		padding: 0;
		list-style: none;
		color: #c3c4ce;
		font-size: 14px;
		line-height: 1.7;
	}

	:global(.cv-section.education) h3 {
		margin-bottom: 5px;
	}

	:global(.cv-section.education) p {
		margin-bottom: 5px;
	}

	:global(.cv-section.education .result) {
		color: #edece4;
		font-weight: 600;
	}

	@media (max-width: 680px) {
		.cv-actions,
		main {
			width: min(100% - 36px, 540px);
		}

		.cv-header {
			grid-template-columns: 1fr;
			gap: 30px;
			padding: 56px 0 45px;
		}

		.contact-links {
			justify-items: start;
		}

		.role {
			grid-template-columns: 1fr;
			gap: 7px;
		}

		.role-period {
			margin: 0;
		}

		.lower-sections {
			grid-template-columns: 1fr;
			grid-template-areas:
				'experience'
				'skills'
				'education';
			gap: 0;
		}

		.stack-grid {
			grid-template-columns: 1fr;
			gap: 26px;
		}
	}

	@media print {
		@page {
			size: A4;
			margin: 13mm 14mm;
		}

		:global(html),
		:global(body) {
			background: #ffffff;
			color: #17191f;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		:global(body) {
			font-size: 9.5pt;
			line-height: 1.35;
		}

		:global(.skip-link),
		.cv-actions {
			display: none;
		}

		main {
			width: 100%;
		}

		main {
			max-width: none;
			width: 100%;
		}

		.cv-header {
			display: block;
			padding: 0 0 13px;
			border-bottom: 2px solid #3d405b;
		}

		h1 {
			margin: 4px 0 2px;
			font-size: 27pt;
		}

		.title {
			margin-bottom: 3px;
			font-size: 12pt;
		}

		.title,
		.roles {
			color: black;
		}

		.eyebrow {
			color: #3d405b;
			font-size: 7.5pt;
		}

		.contact-links {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 3px 18px;
			margin-top: 8px;
			color: #252a33;
			font-size: 8.5pt;
		}

		:global(a) {
			color: #17191f;
			text-decoration: underline;
			text-decoration-thickness: 0.5pt;
			text-underline-offset: 1pt;
		}

		:global(.link-icon) {
			display: none;
		}

		:global(.cv-section.profile) h2 {
			margin-bottom: 5px;
			font-size: 12pt;
			line-height: 1.3;
		}

		:global(.cv-section.profile) p,
		:global(.cv-section.education) p,
		.achievement-list,
		.stack-grid ul {
			color: #252a33;
		}

		:global(.cv-section.profile) p {
			margin-bottom: 4px;
		}

		.timeline {
			gap: 12px;
		}

		.role {
			grid-template-columns: 92px minmax(0, 1fr);
			gap: 17px;
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.role-period {
			color: #555b66;
			font-size: 8.5pt;
		}

		.role h3,
		.stack-grid h3,
		:global(.cv-section.education) h3 {
			margin-bottom: 3px;
			font-size: 10.5pt;
		}

		.achievement-list {
			gap: 1px;
			margin-bottom: 4px;
			padding-left: 14px;
			line-height: 1.32;
		}

		.tags li {
			border-color: #aeb3bc;
			color: #424852;
			font-size: 7.5pt;
		}

		.lower-sections {
			display: block;
		}

		.stack-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			gap: 10px 18px;
		}

		.stack-grid ul {
			font-size: 8.5pt;
			line-height: 1.35;
		}

		:global(.cv-section.education .result) {
			color: #17191f;
		}

		.role,
		:global(.cv-section.education),
		.stack-grid > div {
			break-inside: avoid;
			page-break-inside: avoid;
		}
	}
</style>
