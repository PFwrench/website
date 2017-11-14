var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mdhtml = require('../util/md-html-dir.js');
var fs = require('fs');
var clean = require('../util/clear-target-dir.js');

var src = './posts/';
var dest = '/public/p';
var linkDest = '/p/';

var posts = [];

clean.clear(dest).then(() => {
  return mdhtml.populate(src, dest, linkDest);
}).then((data) => {
  posts = data;
});

/* GET blog page */
router.get('/', function(req, res, next) {
  res.render('blog', {
    title: 'Peter French - Blog',
    postsInfo: posts
  });
});

module.exports = router;
