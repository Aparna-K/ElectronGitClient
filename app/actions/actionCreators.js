export const actionTypes = {
  GET_DIR_INFO: "GET_DIR_INFO",
  GET_DIR_INFO_ASYNC: "GET_DIR_INFO_ASYNC",
  UPDATE_DIR_INFO: "UPDATE_DIR_INFO"
};

export function getDirInfo(path) {
  return {
    type: actionTypes.GET_DIR_INFO,
    path: path
  }
}

export function updateDirInfo(dirInfo = []){
  return {
    type: actionTypes.UPDATE_DIR_INFO,
    dirInfo: dirInfo
  }
}

export function getDirInfoAsync(path) {
  return {
    type: actionTypes.GET_DIR_INFO_ASYNC,
    path: path
  }
}