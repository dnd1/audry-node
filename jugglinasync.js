var http = require('http');
    
    var contador = 0;
    var data = [];
    
    function forasync (i){
      http.get(process.argv[2 + i], function(response){
	response.setEncoding('utf8');
    
	var out = '';
	response.on('data', function(chunk){
	  out += chunk;
	});
    
	response.on('error', function(err){
	  console.log("Hay un error");
	});
    
	response.on('end', function(){
 	  data[i] = out;
 	  contador++;
 	  if(contador == 3)
 	    for (var y = 0; y<3; y++){
 	      console.log(data[y]);
 	    }
	});
      });
    }  
    
    for (var index = 0; index < 3; index++){
      forasync(index);
    }
      
    