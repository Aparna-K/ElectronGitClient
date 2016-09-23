import React from 'react';
import DirTreeNode from './dirTreeNode';

class DirTree extends React.Component {
  render() {
    let { dirInfo, getDirInfoAsync } = this.props;
    let dirListElems = _.map(dirInfo.children, (info, name) => {
      return (
          <DirTreeNode key={name} 
                       fileName={name} 
                       isDir={info.isDir}
                       absPath={info.path}
                       children={info.children}
                       getDirInfoAsync={getDirInfoAsync.bind(this)}/>
      )
    });

    return (
      <div>
        <ul>
          <span>Root: {dirInfo.rootDirName}</span>
          {dirListElems}
        </ul>
      </div>
    );
  }
}

export default DirTree;