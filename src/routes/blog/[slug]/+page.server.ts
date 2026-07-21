import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { getPost, getPostSummaries } from '$lib/server/sanity';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const posts = await getPostSummaries();

	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return { post };
};
