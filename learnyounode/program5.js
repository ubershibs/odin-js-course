var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], countFiles);

function countFiles(err, list) {
  if (err) {
    console.log(err)
  } else {
    for(var i = 0; i < list.length; i++) {
      if(path.extname(list[i]) === '.' + process.argv[3]) {
        console.log(list[i]);
      }
    }
  }
};
