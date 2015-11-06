    var fs = require('fs');
    var path = require('path');
     
    var pat = process.argv[2];
    var ext = '.' + process.argv[3]
     
    fs.readdir(pat, function(err, items) {
        //console.log(items);
     
	   var files = items.filter(function (arch){
	   var extension = path.extname(arch);
	    if(extension == ext){
	      return console.log(arch);
	    }
	   });
    });
     