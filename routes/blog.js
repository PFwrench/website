var express = require('express');
var router = express.Router();
var _ = require('underscore');

var md = require('../util/markdown.js');
var yaml = require('yaml-front-matter');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var src = './posts/';
var dest = '/public/p/';
var linkDest = '/p/'

var posts = [];

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
          var date = new Date(meta.date);
          var mon = date.getMonth();
          var day = date.getDate();
          var year = date.getFullYear();
          var date = months[mon] + " " + day + " " + year;
          var renderedPost = md.render(meta.__content);
          var dateobj = new Date(date);
          var pth = dateobj.getFullYear() + "/" + dateobj.getMonth() + "/" + dateobj.getDate() + "/";

          meta.path = linkDest + pth;
          meta.dateString = date;
          posts.push(meta);

          mkdirp("./" + dest + pth, function (err) {
            if (err) console.log(err);
            fs.writeFile(__dirname + "/.." + dest + pth + "index.html", renderedPost, function(err) {
              if (err) {
                console.log("ERROR in " + __dirname + " : "+ err);
              }
            });
          });
        }
      });
    }
  }
});

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
