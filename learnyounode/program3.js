var fs = require('fs');

buffer = fs.readFile(process.argv[2]);
arr = buffer.toString().split('\n');
console.log(arr.length-1);
