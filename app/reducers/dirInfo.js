import * as dirTreeHelpers from '../helperMethods/dirTreeHelpers.js'
import {dirTreeInfo} from '../actions/actionDefinitions';

export default function dirInfo(state = [], action) {
  switch (action.type) {
    case dirTreeInfo.GET_DIR_INFO:
      return (
        {
          current_file_type:  dirTreeHelpers.getFiletype(action.path),
          path: action.path,
          info: dirTreeHelpers.getfiles(action.path)
        }
      );
    default:
      return state;
  }
}