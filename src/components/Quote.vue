<template>
  <blockquote v-html="html"></blockquote>
</template>

<script>
export default {
  props: ['quote'],
  data() {
    return {
      html: '',
    };
  },
  created() {
    this.html = '';
    var lastPart = null;

    this.quote.primary.quote.forEach(({ type, text }) => {
      if (type === 'o-list-item') {
        if (lastPart !== 'o-list-item') this.html += `<ol>`;

        this.html += `<li>${text}</li>`;
      } else if (type === 'paragraph') {
        if (lastPart === 'o-list-item') this.html += `</ol>`;

        this.html += `<span>${text}</span>`;
      }

      lastPart = type;
    });
  },
};
</script>

<style scoped>
blockquote >>> span {
  display: block;
  padding: 5px;
}

blockquote >>> ol {
  padding-left: 40px;
}
</style>
