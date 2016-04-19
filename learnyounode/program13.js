var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

function formatTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function formatUnix(date) {
  return {
    unixtime: date.getTime()
  };
}

function selectPathway(urlPath, date) {
  var result = {};
  if(urlPath === "/api/parsetime") {
    result = formatTime(date);
  } else if(urlPath === "/api/unixtime") {
    result = formatUnix(date);
  }
  return result;
}

var server = http.createServer(function(request, response) {
  if(request.method !== 'GET') return res.end('Not a GET request.\n');

  var urlDetails = url.parse(request.url, true);
  var date = new Date(urlDetails.query.iso);
  var data = selectPathway(urlDetails.pathname, date);

  if (data) {
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(data));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(port);
