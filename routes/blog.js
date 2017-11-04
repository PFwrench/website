var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mdhtml = require('../util/md-html-dir.js');

// var md = require('../util/markdown.js');
// var yaml = require('yaml-front-matter');
// var fs = require('fs');
// var mkdirp = require('mkdirp');
// var path = require('path');

var src = './posts/';
var dest = '/public/p/';
var linkDest = '/p/'

var posts = [];

mdhtml.populate(src, dest, linkDest);

/* GET blog page */
router.get('/', function(req, res, next) {
  res.render('blog', {
    title: 'Blog',
    postsInfo: _.sortBy(posts, function(post) {
        return new Date(post.date).getTime();
      }).reverse()
  });
});

module.exports = router;
