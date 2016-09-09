import {GET_DIR_INFO} from '../actions/actionCreators';

export default function dirInfo(state = [], action) {
  switch (action.type) {
    case GET_DIR_INFO:
      let new_state =
        {
          current_file_type:  dirTreeHelpers.getFileType(action.path),
          path: action.path,
          info: dirTreeHelpers.getFiles(action.path)
        };
      console.log(new_state);
      return new_state;
    default:
      return state;
  }
}