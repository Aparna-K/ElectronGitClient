import {actionTypes} from '../actions/actionCreators';

export default function dirInfo(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_DIR_INFO:
      return dirTreeHelpers.getFiles(action.path);
    case actionTypes.UPDATE_DIR_INFO:
      return action.dirInfo;
    default:
      return state;
  }
}