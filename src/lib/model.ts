import { createDeliveryClient, type Elements, type IContentItem } from '@kontent-ai/delivery-sdk';

export const deliveryClient = createDeliveryClient({
	environmentId: '6aa145c2-d975-0145-ac1a-71f89309b3ef'
});

export type PostType = IContentItem<{
	title: Elements.TextElement;
	subtitle: Elements.TextElement;
	slug: Elements.UrlSlugElement;
	body: Elements.RichTextElement;
	publish_override: Elements.DateTimeElement;
	taxonomy: Elements.TaxonomyElement;
}>;
