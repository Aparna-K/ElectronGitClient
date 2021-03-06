import React from 'react';
import FileNode from './fileNode';
import DirNode from './dirNode';

/*
* props:
*   isDir: <Boolean>
*   fileName: <String>
*   absPath: <String> absolute path of the file/dir
*   onClickHandler: <Function> ex: getDirInfoAsync for directories
*   
* */
class DirTreeNode extends React.Component {
  handleDirClick(e){
    let currentDirElement = $(e.target).closest("li.dir-node").children("ul.dir-node");
    if(currentDirElement.children().length){
      currentDirElement.toggle(); // toggle children view if directory is already loaded
    }

    this.props.getDirInfoAsync(this.props.absPath);
    e.stopPropagation();
  }
  handleFileClick(e){
    e.stopPropagation();
  }

  render() {
    let component,
        {isDir, fileName, getDirInfoAsync, children} = this.props;
    if(isDir){
      component = <DirNode fileName={fileName}
                           handleClick={this.handleDirClick.bind(this)}
                           getDirInfoAsync={getDirInfoAsync}
                           children={children}/>;
    } else {
      component = <FileNode fileName={fileName}
                            handleClick={this.handleFileClick.bind(this)}/>;
    }

    return (
      <div>
        {component}
      </div>
    );
  }
}

export default DirTreeNode;