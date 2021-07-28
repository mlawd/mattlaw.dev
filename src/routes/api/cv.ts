import fetch from 'isomorphic-unfetch';

export async function get(req, res, next) {
  const cmsRes = await fetch(
    'https://uflbfg8d.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      body: JSON.stringify({
        query: `
query {
	allCv {
    title
    byline
    excerptRaw
    hobbiesRaw
    experience {
      title
      subtitle
      dateTo
      dateFrom
      contentRaw
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
      data: { allCv },
    } = await cmsRes.json();

    if (allCv[0]) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      const page = {
        ...allCv[0],
      };

      res.end(JSON.stringify({ page }));
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
