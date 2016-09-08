import React from 'react';
import TreeNode from './treeNode';


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

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <TreeNode node={tree}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}