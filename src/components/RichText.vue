<template>
  <div id="content">
    <v-runtime-template id="html" :template="html" />
  </div>
</template>

<static-query>
query {
	asset: allAsset {
    edges {
      node {
        id
				url(width:1200)
				url_400: url(width:400)
				url_800: url(width:800)
				description
      }
    }
  }
	quote: allQuote {
		edges {
			node {
				id
				quote
				author
			}
		}
	}
	code_snippet: allCodeSnippet {
		edges {
			node {
				id
				snippet
				language {
					codename
				}
			}
		}
	}
}
</static-query>

<script>
import VRuntimeTemplate from 'v-runtime-template';
import Asset from './RichTextElements/Asset.vue';
import Quote from './RichTextElements/Quote.vue';
import CodeSnippet from './RichTextElements/CodeSnippet.vue';

export default {
  components: {
    VRuntimeTemplate,
    Asset,
    Quote,
    CodeSnippet,
  },
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  methods: {
    getNode: function(codename, id) {
      const query = this.$static[codename];

      if (typeof query === 'undefined') {
        return null;
      }
      if (codename === 'asset') {
        console.log(id);
        console.log(query);
      }

      const edges = query.edges.filter(edge => {
        return edge.node.id === id || (edge.node.url || '').indexOf(id) >= 0;
      });

      if (codename === 'asset') {
        console.log(edges);
      }
      if (edges.length === 1) {
        return edges[0].node;
      }

      return null;
    },
  },
};
</script>
