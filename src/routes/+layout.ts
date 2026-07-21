import type { LayoutLoad } from './$types';

type Profile = {
	name: string;
	roles: string[];
	title: string;
	role: string;
	location: string;
	focus: string;
	available: boolean;
	intro: string;
	about: string[];
	contact: {
		email: string;
		github: string;
		linkedin: string;
	};
};

type ExperienceRole = {
	period: string;
	title: string;
	description?: string;
	bullets: string[];
	skills: string[];
};

type StackGroup = {
	title: string;
	items: string[];
};

type Education = {
	institution: string;
	degree: string;
	result: string;
};

const cv = {
	profile: {
		name: 'Matthew Law',
		roles: ['software engineer', 'tech lead'],
		title: 'Staff Engineer',
		role: 'staff engineer, Titanbay',
		location: 'Remote, UK',
		focus: 'distributed systems • event-driven arch',
		available: true,
		intro:
			"I build distributed, event-driven systems — from serverless microservices to the training simulators I cut my teeth on. Genuinely enjoy picking up new tools, and I lead best when there's a scrum board or a scoreboard involved.",
		about: [
			'Backend engineer with 10+ years building distributed, event-driven systems — from training simulators to serverless cloud platforms. Currently focused on TypeScript, cloud-native architecture on GCP, with early hands-on adoption of agentic coding tools. Has led both pan-European and fully remote engineering teams, moving comfortably between designing the architecture and writing the code.'
		],
		contact: {
			email: 'me@mattlaw.dev',
			github: 'https://github.com/mlawd',
			linkedin: 'https://www.linkedin.com/in/mattlawdev'
		}
	} satisfies Profile,
	updates: [
		'Building out distributed, event-driven services at Titanbay & PitchIn Platform on GCP.',
		'Digging into agentic coding workflows — OpenCode & OMO Slim are my daily drivers, with some more personal customisations.',
		'More of a casual observer of sports these days, awaiting the day my kids join clubs and I can join in with the parent/child days.'
	],
	experience: [
		{
			period: '2022 — now',
			title: 'Staff Engineer • Titanbay',
			description:
				'Designing and building distributed, event-driven services on GCP — from architecture through delivery, with a growing focus on AI-assisted engineering workflows.',
			bullets: [
				'Started as a Senior Software Engineer, working on authentication and client onboarding, promoted to Lead Engineer and given a new team geared towards "special projects" and our most pressing architecture decisions, then promoted to Staff Engineer sitting between 2 engineering teams to co-ordinate and help design new systems and external integrations.',
				'Led a cross functional team on the migration from our legacy system (monolithic API on top of Dataverse & PowerApps) into a serverless GCP event sourced architecture, a first for us as a company.',
				'Created our first services in Kubernetes, including setting out the blueprint for containerisation builds in GitHub pipelines and eventual deployment into ArgoCD.',
				'Led the migration from Firestore to Postgres, minimising downtime and API changes to keep it a pure database swap — avoiding months of knock-on re-development.',
				'Researched, designed, architected and scoped the migration from a unfit for purpose hand-rolled permission system to OpenFGA, opening up an infinitely more flexible system to serve emerging customer needs. As Staff Engineer, I designed and prototyped the system, then handed it off to the engineering team to build out fully.',
				'Serve as engineering\'s first port of call for the product team — brought in ahead of scoping on "how should we build X" questions to give early feasibility and architectural input, surfacing edge cases that send them back to research before work reaches the team.',
				'As Lead Engineer, line-managed a team directly — running mid-year and year-end reviews, providing ongoing feedback, and mentoring.'
			],
			skills: [
				'TypeScript',
				'GCP',
				'VueJS',
				'Pub/Sub',
				'Kubernetes',
				'OpenCode',
				'Cloud Functions',
				'Postgres',
				'OpenFGA'
			]
		},
		{
			period: '2023 - now',
			title: 'Co-Founder • PitchIn Platform',
			description:
				'Solo build of a fundraising platform for grassroots sports clubs that currently has 32 active clubs and processed over £165,000 to date.',
			bullets: [
				'Greenfield platform build using TypeScript, Postgres, Cloud Run, Stripe and Svelte.',
				'Event driven GCP architecture utilising Pub Sub for message delivery to facilitate asynchronous operations.',
				'Built free-entry prize draw functions that run on a schedule to pick random winners from entry tickets, send emails and gather payout bank details.',
				'Integrated with Stripe as a payment provider, ensuring idempotent handling of webhooks averaging roughly 150 webhooks per day with an error rate of ~0.',
				'Built a cloud agent using GKE, Agent Sandboxes and Iron.sh integrated with Slack, Linear and GitHub to speed up delivery of small tickets.',
				'Re-architected from Cloud Functions to Cloud Run due to cold start and performance issues inherent in low traffice serverless applications. Reduced first load by ~2s.'
			],
			skills: ['TypeScript', 'GCP', 'Pub/Sub', 'Kubernetes', 'Postgres']
		},
		{
			period: '2021 — 2022',
			title: 'Senior Software Engineer • Trilo',
			bullets: [
				'Developed distributed microservices on AWS Lambda.',
				'Led a team of developers on various development projects.',
				'Maintained React/Next.js apps.'
			],
			skills: ['TypeScript', 'AWS Lambda', 'React', 'Next.js']
		},
		{
			period: '2020 — 2021',
			title: 'Senior Software Engineer • Distinction UK',
			bullets: [
				'Built CMS-backed apps on Kentico and Umbraco with embedded SPAs in Vue, React and Angular.',
				'Led adoption of Azure Pipelines CI/CD, automated testing and agile ways of working.'
			],
			skills: ['Umbraco', 'VueJS', 'Azure Pipelines']
		},
		{
			period: '2018 — 2020',
			title: 'Web Developer • Solutions for Retail Brands',
			bullets: [
				'Maintained legacy NodeJS and Angular 1 single-tenant applications.',
				'Dockerised applications for Azure App Services.',
				'Built CircleCI pipelines.'
			],
			skills: ['AngularJS', 'MongoDB', 'Docker', 'CircleCI']
		},
		{
			period: '2015 — 2018',
			title: 'Senior Engineer & Technical Lead • MBDA',
			bullets: [
				'Led a pan-European team of 5+ engineers building a complex training system.',
				'Drove adoption of Node.js alongside C#/C++ to run an Instructor Station in the browser.'
			],
			skills: ['C#', 'TCP', 'C++', 'NodeJS']
		}
	] satisfies ExperienceRole[],
	stack: [
		{ title: 'Languages', items: ['TypeScript', 'C#', 'Go', 'SQL'] },
		{
			title: 'Cloud',
			items: [
				'GCP • AWS • Azure',
				'Kubernetes • Terraform',
				'Pub/Sub • Event Bridge',
				'Cloud Functions • Lambda'
			]
		},
		{
			title: 'Databases',
			items: ['Postgres', 'Firestore', 'DynamoDB', 'MongoDB']
		},
		{
			title: 'Tooling & practices',
			items: ['Claude Code • OpenCode', 'Claude Platform', 'Mentoring & leading teams']
		}
	] satisfies StackGroup[],
	education: {
		institution: 'Newcastle University',
		degree: 'BSc Computer Science with Industrial Placement (Games Engineering)',
		result: 'First Class'
	} satisfies Education
};

export const load: LayoutLoad = () => ({ cv });
