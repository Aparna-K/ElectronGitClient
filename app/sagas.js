import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as actionCreators from './actions/actionCreators';

/*
* args: the following redux action:
*       {
          type: "GET_DIR_INFO_ASYNC",
          path: path
        }
*/
export function* getFilesAsync(action){
  let dirInfo = yield call(dirTreeHelpers.getFilesInfoAsync, action.path);
  yield put(actionCreators.updateDirInfo(dirInfo));
}

/*
* watches for action "GET_DIR_INFO_ASYNC"
*/
export function* watchGetFilesAsyncRequest() {
  yield* takeEvery(actionCreators.actionTypes.GET_DIR_INFO_ASYNC, getFilesAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchGetFilesAsyncRequest()
  ]
}