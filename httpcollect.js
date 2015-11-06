var http = require('http');

  var request = process.argv[2];
  http.get(request, function(response){
    response.setEncoding('utf8');
    
    var out = '';
    response.on('data', function(chunk){
      out += chunk;
    });
    
    response.on('error', function(err){
      console.log("Hay un error");
    });
    
    response.on('end', function(){
      console.log(out.length);
      console.log(out);
    });
  });