import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <TreeNode node={tree} />,
  document.getElementById("root")
);
