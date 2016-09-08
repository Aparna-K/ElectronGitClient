var fs = require("fs");

export function getfiles(path){
	files = fs.readdirSync(path);
	files_info = files.map( (file) => {
		// console.log(path+file + ":" +fs.statSync(path+file).isDirectory());
		return ({
			"name": file,
			"type": fs.statSync(path+file).isDirectory() ? "Dir" : "File"
		});
	});
	return files_info;
}

export function getFiletype(path) {
  return fs.statSync(path).isDirectory() ? "Dir" : "File"
}

