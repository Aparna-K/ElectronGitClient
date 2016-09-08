import {dirTreeInfo} from './actionDefinitions';

export function getFiles(path) {
    return {
        type: dirTreeInfo.GET_DIR_INFO,
        path: path
    }
}