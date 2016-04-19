var http = require('http');
var fs = require('fs');

var file = process.argv[3];
var port = Number(process.argv[2]);

var server = http.createServer(function(request, response) {

  response.writeHead(200, {'Content-type': 'text/plain'});

  var stream = fs.createReadStream(file);
  stream.pipe(response);
})

server.listen(port);
