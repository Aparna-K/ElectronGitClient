const {ipcRenderer} = require('electron');

function getFiles(path) {
  return ipcRenderer.sendSync('getFilesSync-request', path);
}

function getFileType(path) {
  return ipcRenderer.sendSync('getFileTypeSync-request', path);
}

module.exports = {
  getFiles: getFiles,
  getFileType: getFileType
};