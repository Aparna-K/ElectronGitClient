import React from 'react';
import classNames from 'classnames';

class FileNode extends React.Component {
  render() {
    let { fileName, handleClick } = this.props;
    return (
        <div onClick={handleClick}>
          <li className="file-node">
            <i className={classNames("file", "outline", "icon")} />
            &nbsp;
            {fileName}
          </li>
        </div>
    );
  }
}

export default FileNode;