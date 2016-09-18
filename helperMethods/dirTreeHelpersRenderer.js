var fs = require("fs");
var async = require("async");


/*
    Args:
      path => (String) path to a directory.
    Return:
      A Promise object;
      resolves => Listing of the directory in <path>
      rejects  => Error
*/
function getDirListingAsync(path){
  return new Promise(function(resolve, reject){
    fs.readdir(path, (err, files) => {
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
      path => (String) path to a directory
    Return:
      A promise object:
      resolves => Array of javascript objects of the signature
        [{"name": <fileName>, "isDir": <boolean>}, {...}, ...]
      rejects  => Error
*/

function getFilesInfoAsync(path){
  let filesInDir = [];
  return getDirListingAsync(path)
          .then((files) => {
            filesInDir = files;
            return getFstatListAsync(files.map((f) => {return path + "/" + f}));
          })
          .then((file_stat_arr) => {
            var files_hash = file_stat_arr.map((file_info, i) => {
              return {
                "name": filesInDir[i],
                "isDir": file_info.isDirectory()
              }
            });
            return files_hash;
          })
          .catch((err) => { throw err })
}

function getFilesSync(path) {
  let files = fs.readdirSync(path);
  let files_info = files.map( (file) => {
    return ({
      "name": file,
      "type": fs.statSync(path+"/"+file).isDirectory() ? "Dir" : "File"
    });
  });
  return files_info;
}

function getFileTypeSync(path) {
  return fs.statSync(path).isDirectory() ? "Dir" : "File"
}

module.exports = {
  getFiles: getFilesSync,
  getFileType: getFileTypeSync,
  getFilesInfoAsync: getFilesInfoAsync
};