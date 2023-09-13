import type { PageServerLoad } from './$types';
import { deliveryClient, type PostType } from '$lib/model';
import type { EntryGenerator } from './blog/[slug]/$types';

export const entries: EntryGenerator = async () => {
	const { data } = await deliveryClient
		.items<PostType>()
		.type('post')
		.orderByDescending('elements.publish_override')
		.toPromise();

	console.log(
		data.items.map((i) => ({
			slug: i.elements.slug.value
		}))
	);
	return data.items.map((i) => ({
		slug: i.elements.slug.value
	}));
};

export const prerender = true;

export const load: PageServerLoad = async () => {
	const { data } = await deliveryClient
		.items<PostType>()
		.type('post')
		.orderByDescending('elements.publish_override')
		.toPromise();

	return {
		posts: data.items.map((i) => ({
			title: i.elements.title.value,
			subtitle: i.elements.subtitle.value,
			slug: i.elements.slug.value,
			date: i.elements.publish_override.value!,
			tags: i.elements.taxonomy.value.map((t) => t.name)
		}))
	};
};
