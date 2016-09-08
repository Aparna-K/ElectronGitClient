import { createStore, compose } from 'redux';
import * as dirTreeHelpers from './helperMethods/dirTreeHelpers.js';

import rootReducer from './reducers/index';

function setDefaultState(){
  let currentDir = "./";
  return (
      {
        dirInfo: dirTreeHelpers.getfiles(currentDir)
      }
  );
}
const defaultState = setDefaultState();

const store = createStore(rootReducer, defaultState);

export default store;