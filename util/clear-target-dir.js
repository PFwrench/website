var fs = require('fs');

function getFilePaths(target) {
  return new Promise((resolve, reject) => {
    fs.readdir(target, (err, files) => {
      if (err) {
        fs.unlink(target, (err) => {
          if (err) {
            console.log(err);
          }
          resolve();
        });
      }
      else {
        var ps = [];

        for (var i = 0; i < files.length; i++) {
          ps.push(getFilePaths(target + '/' + files[i]));
        }

        Promise.all(ps).then(() => {
          for (var i = 0; i < files.length; i++) {
            fs.rmdir(target + '/', (err) => {
              if (err) {
                console.log("ERROR REMOVING DIRECTORY: " + err);
              }
              resolve();
            });
          }
        })
      }
    });
  });
}

module.exports = {
  clear: function(target) {
    return getFilePaths('.' + target);
  }
}
