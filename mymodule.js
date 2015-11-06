var fs = require('fs');
var path = require('path');
     
    module.exports = function (pat, ext, callback){
       
	  fs.readdir(pat, function(err, items) {
	    if(err)
	      return callback(err); 
	    
	   var files = items.filter(function (arch){
	   var extension = path.extname(arch);
	    return extension == '.' + ext;
	   });
	   callback(null,files);
	});
    };
     