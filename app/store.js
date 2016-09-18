import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// function setDefaultState(){
//   let currentDir = "./",
//       dirInfo;
//   dirTreeHelpers.getFilesInfoAsync(currentDir).then((files => dirInfo = files));
//   return { dirInfo: dirInfo }
// }
// const defaultState = setDefaultState();
// const store = createStore(rootReducer, defaultState);

var currentDir = "./",
    store=createStore(rootReducer, {}),
    defaultState;

(() => {
  dirTreeHelpers.getFilesInfoAsync(currentDir)
      .then((filesInfo) => {
        return {dirInfo: filesInfo}
      })
      .then((defaultState) => {
        store = createStore(rootReducer, defaultState);
      })
      .catch((err) => { throw err });
})();


export default store;