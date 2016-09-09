import React from 'react';
import TreeNode from './treeNode'


class Main extends React.Component {
  render() {
    return (
      <div>
        <TreeNode node={tree} />
      </div>
    );
  }
}

export default Main;