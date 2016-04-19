var mymodule = require('./module.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
