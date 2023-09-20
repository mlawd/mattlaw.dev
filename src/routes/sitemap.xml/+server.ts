import { deliveryClient, type PostType } from '$lib/model';

export const prerender = true;

export async function GET() {
	const { data } = await deliveryClient
		.items<PostType>()
		.type('post')
		.orderByDescending('elements.publish_override')
		.toPromise();

	const posts = data.items
		.map((i) => ({
			slug: i.elements.slug.value,
			mod: i.system.lastModified
		}))
		.sort((a, b) => new Date(b.mod).getTime() - new Date(a.mod).getTime());

	function createUrlEntry(path: string, lastChange: string) {
		return `<url>
    <loc>https://mattlaw.dev/${path}</loc>
      <lastmod>${lastChange}</lastmod>
    </url>`;
	}

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"

		> 
<url>
    <loc>https://mattlaw.dev/</loc>
      <lastmod>${posts[0].mod}</lastmod>
    </url>
      ${posts
				.map((p) => createUrlEntry(`blog/${p.slug}`, p.mod))
				.join('')} </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
