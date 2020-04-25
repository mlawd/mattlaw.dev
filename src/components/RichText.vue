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
				url
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

      const edges = query.edges.filter(edge => {
        return edge.node.id === id || edge.node.url === id;
      });

      if (edges.length === 1) {
        return edges[0].node;
      }

      return null;
    },
  },
};
</script>
