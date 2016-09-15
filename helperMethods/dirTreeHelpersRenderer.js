var fs = require("fs");

function getFiles(path) {
  let files = fs.readdirSync(path);
  let files_info = files.map( (file) => {
    return ({
      "name": file,
      "type": fs.statSync(path+"/"+file).isDirectory() ? "Dir" : "File"
    });
  });
  return files_info;
}

function getFileType(path) {
  return fs.statSync(path).isDirectory() ? "Dir" : "File"
}

module.exports = {
  getFiles: getFiles,
  getFileType: getFileType
};