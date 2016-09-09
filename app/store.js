import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

function setDefaultState(){
  let currentDir = "./";
  return (
      {
        dirInfo: dirTreeHelpers.getFiles(currentDir)
      }
  );
}
const defaultState = setDefaultState();

const store = createStore(rootReducer, defaultState);

export default store;