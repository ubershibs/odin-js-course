var http = require('http');
var bl = require('bl');
var port = Number(process.argv[2]);

var server = http.createServer(function(request, response) {
  if(request.method === 'POST') {
    request.pipe(bl(function(err, data) {
      if (err) return console.error(err);
      var body = data.toString().toUpperCase();
      response.writeHead(200, {'Content-type': 'text/plain'});
      response.write(body);
      response.end();
    }));
  };
})

server.listen(port);
