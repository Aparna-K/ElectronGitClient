var fs = require("fs");
var async = require("async");
var path = require('path');


/*
    Args:
      dirPath => (String) path to a directory.
    Return:
      A Promise object;
      resolves => Listing of the directory in <path>
      rejects  => Error
*/
function getDirListingAsync(dirPath){
  return new Promise(function(resolve, reject){
    fs.readdir(dirPath, (err, files) => {
      if(err){
        reject(err);
      } else {
        resolve(files);
      }
    })
  })
}

/*
    Args:
      files => (Array) array of file paths
    Return:
      A Promise object;
      resolves => An array of file stats corresponding to the input <files>
      rejects  => Error

*/
function getFstatListAsync(files = []){
  return new Promise(function(resolve, reject){
    async.map(files, fs.stat, (err, file_stat_arr) => {
      if(err){
        reject(err);
      } else {
        resolve(file_stat_arr);
      }
    });
  });
}

/*
    Args:
      dirPath => (String) path to a directory
    Return:
      A promise object:
      resolves => Array of javascript objects of the signature
        [{"name": <fileName>, "isDir": <boolean>}, {...}, ...]
      rejects  => Error
*/

function getFilesInfoAsync(dirPath){
  let filesInDir = [];
  return getDirListingAsync(dirPath)
      .then((files) => {
        filesInDir = files;
        return getFstatListAsync(files.map((f) => {return dirPath + "/" + f}));
      })
      .then((file_stat_arr) => {
        var absRootPath = path.resolve(dirPath);
        var files_hash = {
          "rootPath": absRootPath,
          "rootDirName": path.basename(absRootPath),
          "children": file_stat_arr.map((file_info, i) => {
            return {
              "name": filesInDir[i],
              "isDir": file_info.isDirectory(),
              "path": absRootPath+"/"+filesInDir[i]
            }
          })};
        return files_hash;
      })
      .catch((err) => { throw err })
}

module.exports = {
  getFilesInfoAsync: getFilesInfoAsync
};