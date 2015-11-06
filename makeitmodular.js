var mod = require('./mymodule');

 var pat = process.argv[2];
 var ext = process.argv[3];
mod(pat,ext,function(err, resultado){
  if(err)
    return console.log('Hubo un error');
  
  for(var i=0; i<resultado.length; i++){  
    console.log(resultado[i]);
  }
});