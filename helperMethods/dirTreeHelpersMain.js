const {ipcMain} = require('electron');
var fs = require("fs");

function getFilesSync(path){
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

function registerDirInfoListeners() {
  ipcMain.on('getFilesSync-request', (event, path) => {
    console.log(path);
    event.returnValue = getFilesSync(path);
  });

  ipcMain.on('getFileTypeSync-request', (event, path) => {
    console.log(path);
    event.returnValue = getFileType(path);
  });
}

module.exports = {
  registerDirInfoListeners: registerDirInfoListeners
};