export const GET_DIR_INFO =  "GET_DIR_INFO"

export function getDirInfo(path) {
  return {
    type: GET_DIR_INFO,
    path: path
  }
}