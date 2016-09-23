import {actionTypes} from '../actions/actionCreators';

// Returns an object with  filenames as keys
//  converts an array of:
//  [{isDir: false, name: "abc", path: "..."}, {isDir: ..., name: "xyz", path: "..."}, ...]
//To:
//  {
//    "abc": {isDir: false, name: "abc", path: "..."},
//    "xyz": {isDir: ..., name: "xyz", path: "..."},
//    ...
//  }
// This conversion is useful to update parts of the directory subtree when a directory is clicked.

function arrayFileInfoToObject(fileInfo = []){
  return (_.keyBy(fileInfo, (o) => {return o.name}))
}

function getRootFolderStructure(dirInfo){
  return {
          "rootPath": dirInfo.rootPath,
          "rootDirName": dirInfo.rootDirName,
          "children": arrayFileInfoToObject(dirInfo.children)
        };
}

function recursiveSubDirUpdate(subDirHierarchy, index, children, dirInfo) {
  if(index != subDirHierarchy.length-1){
    let subDirToModify = children["children"][subDirHierarchy[index]];
    let childrenOfSubDirToModify = subDirToModify.children;
    let updatedChildNode = recursiveSubDirUpdate(subDirHierarchy, index+1, subDirToModify, dirInfo);
    let modifiedChildrenOfSubDir = Object.assign({}, childrenOfSubDirToModify, updatedChildNode);
    let modifiedSubDir = Object.assign({},subDirToModify, {"children": modifiedChildrenOfSubDir});
    return ({[subDirHierarchy[index]]: modifiedSubDir})
  } else {
    let subDirToModify = children["children"][subDirHierarchy[index]];
    let modifiedSubDir = Object.assign({},subDirToModify, {"children": arrayFileInfoToObject(dirInfo.children)});
    return ({[subDirHierarchy[index]]: modifiedSubDir})
  }
}

export default function dirInfo(state = {}, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DIR_INFO:
      if( _.isEmpty(state) || state.rootDirName == action.dirInfo.rootDirName){ // Initial state setting or reloading the same root directory
        return getRootFolderStructure(action.dirInfo);
      } else {
        if(action.dirInfo.rootPath.includes(state.rootDirName)){
          // case 1: The current directory that has been looked up is a subdirectory of the current root
          //         Look up the position of the subdirectory that has been looked up within the state directory tree and update
          //         just the relevant subtree
          let dirHierarchyArray = action.dirInfo.rootPath.split("/");
          let rootIndex = dirHierarchyArray.indexOf(state.rootDirName);
          let subDirHierarchy = dirHierarchyArray.slice(rootIndex+1, dirHierarchyArray.length);
          let rootChildren = Object.assign({}, state.children, recursiveSubDirUpdate(subDirHierarchy, 0, state, action.dirInfo));
          let newState =  Object.assign({}, state, {"children": rootChildren});
          return newState;
        } else {
          //  case 2: You don't find the current directory that has been looked up (action.dirInfo)
          //          in the current state. Reload state with the looked up directory as root.
          return getRootFolderStructure(action.dirInfo);
        }

      }

    default:
      return state;
  }
}


//  case 1: You find the current directory that has been looked up (action.dirInfo)
          //          in the current state. append the action.dirInfo.children to the corresponding directory in the state.
          // let subDirToUpdate = state.children[action.dirInfo.rootDirName];
          // let updatedSubDir = Object.assign({}, subDirToUpdate, {children: arrayFileInfoToObject(action.dirInfo.children)});
          // let stateChildren = state.children;
          // let updatedRootchildren = {...stateChildren, [action.dirInfo.rootDirName]: updatedSubDir};
          // let newState = Object.assign({}, state, {children: updatedRootchildren} );
          // return newState;