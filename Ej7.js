var fs = require("fs");
var path = require('path');
module.exports = function(a,b,c){
	fs.readdir(a, (err, list) => {
		if(err){
			return c(err);
		} else {
			var lista = [];
			list.forEach(elem =>{
				if(path.extname(elem) == '.'+b){
					lista.push(elem);
				}
			});
			c(null, lista);
		}
	});
}
