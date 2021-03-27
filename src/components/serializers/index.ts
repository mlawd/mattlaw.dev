import BlockContent from '@movingbrands/svelte-portable-text';
import urlBuilder from '@sanity/image-url';
import client from '../../sanity-client';

import Code from './Code.svelte';
import Image from './Image.svelte';
import Link from './Link.svelte';

export const urlFor = (source) => urlBuilder(client).image(source);

export const serializers = {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    code: ({ node: { code, language } }) => ({
      component: Code,
      childNodes: [],
      props: {
        code,
        language,
      },
    }),
    image: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: urlFor(node).width(800).auto('format').url(),
        alt: node.alt,
      },
    }),
  },
};
