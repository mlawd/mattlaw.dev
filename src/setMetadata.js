export function setMetadata(title, description, path, headlineImage) {
  const data = {
    title,
    meta: [
      { vmid: 'description', name: 'description', content: description },
      { vmid: 'og:title', property: 'og:title', content: title },
      {
        vmid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        vmid: 'og:description',
        property: 'og:description',
        content: description,
      },
      ,
      {
        vmid: 'og:url',
        property: 'og:url',
        content: `https://www.mattlaw.dev${path}`,
      },
      {
        vmid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://www.mattlaw.dev${path}`,
      },
    ],
  };

  if (headlineImage) {
    data.meta.push({
      vmid: 'og:image',
      property: 'og:image',
      content: `https://www.mattlaw.dev${headlineImage}`,
    });
  }

  return data;
}
