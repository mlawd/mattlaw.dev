import type { EntryGenerator, PageServerLoad } from './$types';
import { deliveryClient, type PostType } from '$lib/model';
import { createRichTextHtmlResolver } from '@kontent-ai/delivery-sdk';
import { nodeParser } from '@kontent-ai/delivery-node-parser';

export const entries: EntryGenerator = async () => {
	const { data } = await deliveryClient
		.items<PostType>()
		.type('post')
		.orderByDescending('elements.publish_override')
		.toPromise();

	return data.items.map((i) => ({
		slug: i.elements.slug.value
	}));
};

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const { data } = await deliveryClient
		.items<PostType>()
		.type('post')
		.equalsFilter('elements.slug', params.slug)
		.toPromise();

	const i = data.items[0];

	const body = createRichTextHtmlResolver(nodeParser).resolveRichText({
		element: i.elements.body,
		urlResolver: (_, __, link) => {
			let url = '#unsupported-link-type';

			if (link?.type === 'post') url = `/blog/${link.urlSlug}`;

			return {
				linkUrl: url
			};
		}
	});

	return {
		post: {
			title: i.elements.title.value,
			subtitle: i.elements.subtitle.value,
			slug: i.elements.slug.value,
			body: body.html,
			date: i.elements.publish_override.value ?? i.system.lastModified,
			tags: i.elements.taxonomy.value.map((t) => t.name)
		}
	};
};
