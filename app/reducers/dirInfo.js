import {GET_DIR_INFO} from '../actions/actionCreators';

export default function dirInfo(state = [], action) {
  switch (action.type) {
    case GET_DIR_INFO:
      return dirTreeHelpers.getFiles(action.path);
    default:
      return state;
  }
}