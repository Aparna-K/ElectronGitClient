import {GET_DIR_INFO} from '../actions/actionCreators';

export default function dirInfo(state = [], action) {
  switch (action.type) {
    case GET_DIR_INFO:
      let new_state =
        {
          dirInfo: dirTreeHelpers.getFiles(action.path)
        };
      console.log(new_state);
      return new_state;
    default:
      return state;
  }
}