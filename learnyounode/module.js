var fs = require('fs');
var path = require('path');


module.exports = function(directory, extension, callback) {
  fs.readdir(process.argv[2], countFiles);

  function countFiles(err, list) {
    if (err) {
      return callback(err)
    } else {
      for(var i = 0; i < list.length; i++) {
        if(path.extname(list[i]) === '.' + process.argv[3]) {
          callback(null, list[i]);
        }
      }
    }
  }
};
