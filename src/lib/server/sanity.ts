import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';

export type Category = {
	title: string;
	slug: string;
};

export type PostSummary = {
	title: string;
	slug: string;
	excerpt?: string;
	publishedAt: string;
	categories: Category[];
};

export type Post = PostSummary & {
	body: PortableTextBlock[];
};

const client = createClient({
	projectId: 'uflbfg8d',
	dataset: 'production',
	apiVersion: '2026-07-20',
	perspective: 'published',
	useCdn: false
});

const postSummaryFields = `{
	title,
	"slug": slug.current,
	excerpt,
	publishedAt,
	"categories": coalesce(categories[]->{ title, "slug": slug.current }, [])
}`;

const postSummariesQuery = `
*[_type == "post" && defined(slug.current) && defined(publishedAt)]
| order(publishedAt desc)
${postSummaryFields}
`;

const postQuery = `
*[_type == "post" && slug.current == $slug && defined(publishedAt)][0] {
	title,
	"slug": slug.current,
	excerpt,
	publishedAt,
	"categories": coalesce(categories[]->{ title, "slug": slug.current }, []),
	body
}
`;

export function getPostSummaries(limit?: number) {
	const query = limit ? `${postSummariesQuery}[0...$limit]` : postSummariesQuery;

	return client.fetch<PostSummary[]>(query, limit ? { limit } : {});
}

export function getPost(slug: string) {
	return client.fetch<Post | null>(postQuery, { slug });
}
