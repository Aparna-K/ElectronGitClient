import React from 'react';
import classNames from 'classNames';

export default class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	visible: true
    };
  }

  toggle = () => {
    this.setState({visible: !this.state.visible});
  };

  render() {
  	var childNodes;
    var classObj;

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map(function(node, index) {
        return <li key={index}><TreeNode node={node} /></li>
      });

      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
    }

    var style;
    if (!this.state.visible) {
      style = {display: "none"};
    }

    return (
      <div>
        <h5 onClick={this.toggle} className={classNames(classObj)}>
          {this.props.node.title}
        </h5>
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
}
