import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/server/sanity';

export const prerender = true;

export const load: PageServerLoad = async () => ({
	posts: await getPostSummaries()
});
