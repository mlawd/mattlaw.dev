import fetch from 'isomorphic-unfetch';

export async function post(req, res, next) {
  const { body } = req;

  const cmsRes = await fetch(
    'https://uflbfg8d.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    }
  );

  if (cmsRes.ok) {
    const { data } = await cmsRes.json();

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(data));
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
