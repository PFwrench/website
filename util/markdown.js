var MarkdownIt = require('markdown-it'),
    converter = new MarkdownIt({
      linkify: true
    })
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-lazy-headers'))
    .use(require('markdown-it-highlightjs'))
    .use(require('markdown-it-deflist'));

converter.linkify.set({
    fuzzyLink: false
});

module.exports = {
  render: function(markdown) {
    return converter.render(markdown);
  }
}
