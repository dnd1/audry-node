var net = require('net');
var strftime = require('strftime');

  var hora = strftime('%F %H:%M');


  var server = net.createServer(function (socket) {
      socket.write(hora + "\n");
      
      socket.end();
    })
  server.listen(process.argv[2]);

