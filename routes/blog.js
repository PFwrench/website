var express = require('express');
var router = express.Router();
var _ = require('underscore');

var md = require('../util/markdown.js');
var yaml = require('yaml-front-matter');
var fs = require('fs');

var src = './posts/';
var dest = './public/posts/';

var postMeta = [];

fs.readdir(src, function(err, list) {
  if(err) {
    console.log('ERROR READING POST MD FILES');
  } else {
    for (var i = 0; i < list.length; i++) {
      fs.readFile(src + list[i], function(err, data) {
        if(err) {
          console.log('ERROR READING MD FILE');
        } else {
          var meta = yaml.loadFront(data);

          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var date = meta.date();
          var mon = date.getMonth();
          var day = date.getDate();
          var year = date.getFullYear();
          var date = months[mon] + " " + day + " " + year;
          meta.dateString = date;
          delete meta.__content;
          postMeta.push(meta);
        }
      });
    }
  }
});

/* GET blog page */
router.get('/', function(req, res, next) {
  res.render('blog', {
    title: 'Blog',
    postsInfo: _.sortBy(postMeta, function(post) {
      return post.date().getTime();
    }).reverse()
  });
});

module.exports = router;
