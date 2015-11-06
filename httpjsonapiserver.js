var http = require('http');
var url = require('url');

  http.createServer(function (req, res) {
	
	var datos = url.parse(req.url, true);
	var path = datos['pathname'].split('/');
	var date = new Date(datos.query.iso);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(path[2] == 'parsetime') {
		var parsetime = { 
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
			};
		
		res.write(JSON.stringify(parsetime));
		res.end();
	} else if(path[2] == 'unixtime') {	
		var unixtime = { unixtime: date.getTime() };	
		res.write(JSON.stringify(unixtime));
		res.end();
	} else {
		res.end("error");
	}
	
	
	
}).listen(process.argv[2]);