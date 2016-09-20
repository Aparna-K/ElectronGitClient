import React from 'react';
import TreeNode from './treeNode'

var tree = {
  title: "howdy",
  childNodes: [
    {title: "bobby"},
    {title: "suzie", childNodes: [
      {title: "puppy", childNodes: [
        {title: "dog house"}
      ]},
      {title: "cherry tree"}
    ]}
  ]
};

class Main extends React.Component {
  render() {
    let { dirInfo } = this.props;
    let dirListElems = _.map(dirInfo, (fileInfo) => {
      return (
          <li key={fileInfo.name}>
            <span>name: {fileInfo.name}</span>
            &nbsp;
            <span>isDir: {fileInfo.isDir ? "true" : "false"}</span>
          </li>
      )
    });
    return (
      <div>
        {dirListElems}
      </div>
    );
  }
  componentWillMount(){
    //Load up the initial state
    this.props.getDirInfoAsync("./");
  }
}

export default Main;