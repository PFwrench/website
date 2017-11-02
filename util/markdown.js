var MarkdownIt = require('markdown-it'),
    converter = new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true
    })
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-lazy-headers'))
    .use(require('markdown-it-mark'));

converter.linkify.set({
    fuzzyLink: false
});

module.exports = {
  render: function(markdown) {
    return converter.render(markdown);
  }
}
