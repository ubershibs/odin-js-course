var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  date = new Date();
  data = strftime('%Y-%m-%d %H:%M\n', date);
  socket.end(data)
})
server.listen(process.argv[2]);
