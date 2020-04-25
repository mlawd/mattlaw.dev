const {
  GridsomeContentItem,
} = require('@np-matt/gridsome-source-kentico-kontent');

class BlogPostContentItem extends GridsomeContentItem {
  async addFields(node) {
    await super.addFields(node);

    this.ensureDateField(node);

    return node;
  }

  ensureDateField(node) {
    const postDate = new Date(node.item.publishedAt);
    const lastModified = new Date(node.item.date);

    if (!this.isNullDate(postDate)) {
      node.item.date = postDate;
    }

    node.item.lastModified = lastModified;
  }

  isNullDate(date) {
    if (typeof date === 'undefined') {
      return true;
    }

    if (date === null) {
      return true;
    }

    return date.getTime() === 0;
  }
}

module.exports = BlogPostContentItem;
