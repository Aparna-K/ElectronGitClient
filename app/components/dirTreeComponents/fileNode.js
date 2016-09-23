import React from 'react';

class FileNode extends React.Component {
  render() {
    let { fileName } = this.props;
    return (
      <li className="file-node">
        {fileName}
      </li>
    );
  }
}

export default FileNode;