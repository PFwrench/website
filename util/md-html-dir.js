var md = require('../util/markdown.js');
var yaml = require('yaml-front-matter');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('underscore');
var appRoot = require('app-root-path');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function readDirectory(src) {
  // Returns a new promise
  return new Promise((resolve, reject) => {
    fs.readdir(src, (err, list) => {
      if (err) {
        reject(Error("Source directory doesn't exist: " + err));
      } else {
        resolve(list);
      }
    });
  });
}

function readFiles(list, src) {
  var posts = [];

  for (var i = 0; i < list.length; i++) {
    posts.push(readFile(src + list[i]));
  }

  return Promise.all(posts);
}

function readFile(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(name, (err, data) => {
      if (err) {
        reject("Source file " + name + " cannot be read: " + err);
      } else {
        resolve(data);
      }
    });
  });
}

function loadMetaData(files, linkDest) {
  return new Promise((resolve, reject) => {
    try {
      for (var i = 0; i < files.length; i++) {
        var meta = yaml.loadFront(files[i]);

        var date = new Date(meta.date);
        var mon = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        var date = months[mon] + " " + day + " " + year;

        var dateobj = new Date(date);

        var pth = dateobj.getFullYear() + "/" + (dateobj.getMonth() + 1) + "/" + dateobj.getDate() + "/";

        meta.path = linkDest + pth;
        meta.innerPath = pth;
        meta.dateString = date;
        meta.__content = md.render(meta.__content);
        files[i] = meta;
      }

      resolve(files);
    } catch(e) {
      reject("ERROR IN LOAD METADATA: " + e);
    }
  });
}

function makePostFilePath(files, dest) {
  return new Promise((resolve, reject) => {
    for (var i = 0; i < files.length; i++) {
      mkdirp(appRoot + dest + files[i].innerPath, function (err) {
        if (err) reject(err);
        resolve(files);
      });
    }
  });
}

function writeMdToFiles(files, dest) {
  var filePs = [];

  for (var i = 0; i < files.length; i++) {
    filePs.push(writeMdToFile(files[i], dest));
  }

  return Promise.all(filePs);
}

function writeMdToFile(file, dest) {
  return new Promise((resolve, reject) => {
      fs.writeFile(appRoot + dest + file.innerPath + "index.html", file.__content, function(err) {
        if (err) reject(err);
        resolve(file);
      });
  });
}

function sortFiles(files) {
  return new Promise((resolve, reject) => {
    _.sortBy(files, function(post) {
      return new Date(post.date).getTime();
    }).reverse();

    resolve(files);
  });
}

function populate(src, dest, linkDest) {
  return readDirectory(src)
    .then((list) => {
      return readFiles(list, src);
    }).then((data) => {
      return loadMetaData(data, linkDest);
    }).then((files) => {
      return makePostFilePath(files, dest);
    }).then((files) => {
      return writeMdToFiles(files, dest);
    }).then((files) => {
      return sortFiles(files);
    }).then((files) => {
      return files;
    }).catch((err) =>{
      console.log(err);
    });
}

module.exports = {
  populate: function(src, dest, linkDest) {
    return populate(src, dest, linkDest);
  }
}
