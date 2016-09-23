import React from 'react';
import classNames from 'classnames';
import DirTreeNode from './dirTreeNode';

class DirNode extends React.Component {
  render() {
    let {fileName, handleClick, children, getDirInfoAsync} = this.props;
    let dirListElems = _.map(children, (info, name) => {
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
      <div onClick={handleClick}>
        <li className="dir-node">
          <i className={classNames("folder","outline","icon")}/>
          &nbsp;
          {fileName}
          <ul className="dir-node">
            {dirListElems}
          </ul>
        </li>
      </div>
    );
  }
}

export default DirNode;