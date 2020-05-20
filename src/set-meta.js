const DEFAULT_KEYWORDS = [
  'software developer',
  'web developer',
  'developer',
  'vuejs',
  'dotnet',
  '.net',
  'javascript',
  'blog',
  'portfolio',
];

export function setMeta(title, description, tags, path, imageUrl) {
  const keywords = new Set(DEFAULT_KEYWORDS);

  tags.forEach(t => {
    keywords.add(t.title || t);
  });

  const keywordContent = Array.from(keywords)
    .reduce((acc, cur) => {
      acc += `${cur},`;
      return acc;
    }, '')
    .slice(0, -1);

  return {
    title,
    meta: [
      { key: 'description', name: 'description', content: description },
      { key: 'og:title', property: 'og:title', content: title },
      { key: 'author', name: 'author', content: 'Matt Law' },
      {
        key: 'keywords',
        name: 'keywords',
        content: keywordContent,
      },
      {
        key: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: `https://mattlaw.dev/assets/static/content/blog/${imageUrl}`,
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: `https://mattlaw.dev${path}`,
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: description,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://www.mattlaw.dev${path}`,
      },
    ],
  };
}
