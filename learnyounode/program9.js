var bl = require('bl');
var http = require('http');

var listUrls = process.argv.slice(2);
var resultData = [];
count = 0

function displayResult() {
  listUrls.forEach(function(url) {
    console.log(resultData[url]);
  });
}

function doRequest(url) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) return console.error(err);
      resultData[url] = data.toString();
      count++;

      if(count === 3){
        displayResult();
      }
    }));
  });
}

for(var i = 0; i < listUrls.length; i++){
  doRequest(listUrls[i], i);
}

