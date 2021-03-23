import fetch from 'isomorphic-unfetch';

export async function get(req, res, next) {
  const cmsRes = await fetch(
    'https://uflbfg8d.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      body: JSON.stringify({
        query: `

query {
  allPost (where:{slug:{current:{eq:"${req.params.slug}"}}}){
    title
    excerpt
    publishedAt
    bodyRaw
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

    if (allPost[0]) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      const post = {
        ...allPost[0],
        categories: allPost[0].categories.map((c) => c.title),
        image: {
          url: allPost[0].mainImage.asset.url,
          filename: allPost[0].mainImage.asset.fileName,
        },
      };

      res.end(JSON.stringify({ post }));
      return;
    }
  }
  res.writeHead(404, {
    'Content-Type': 'application.json',
  });

  res.end(
    JSON.stringify({
      message: 'Not found',
    })
  );
}
