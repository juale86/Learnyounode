var fs = require("fs");
var path = require('path');
fs.readdir(process.argv[2],(err,list)=>{
	if(!err){
		list.forEach(elem => {
			if(path.extname(elem) == '.'+process.argv[3])
			console.log(elem);
		});
	} else {
		console.log("Errooooor");
	}
});
