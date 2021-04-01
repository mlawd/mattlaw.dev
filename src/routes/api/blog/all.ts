import fetch from 'isomorphic-unfetch';

export async function get(req, res, next) {
  const cmsRes = await fetch(
    'https://uflbfg8d.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      body: JSON.stringify({
        query: `
query {
  allPost(sort:{publishedAt:DESC}) {
    title
    excerpt
    publishedAt
    slug {
      current
    }
    categories {
      title
    }
    mainImage {
      asset {
        originalFilename
        url
      }
    }
  }
}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  );

  if (cmsRes.ok) {
    const {
      data: { allPost },
    } = await cmsRes.json();

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    const posts = allPost.map((p) => ({
      title: p.title,
      excerpt: p.excerpt,
      slug: `blog/${p.slug.current}`,
      categories: p.categories.map((c) => c.title),
      date: p.publishedAt,
      image: {
        url: p.mainImage.asset.url,
        filename: p.mainImage.asset.fileName,
      },
    }));

    res.end(JSON.stringify({ posts }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application.json',
    });

    res.end(
      JSON.stringify({
        message: 'Not found',
      })
    );
  }
}
