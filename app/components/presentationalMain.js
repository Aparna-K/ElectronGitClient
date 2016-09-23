import React from 'react';
import DirTree from './dirTreeComponents/dirTree'

class Main extends React.Component {
  render() {
    return (
      <div>
        <DirTree dirInfo={this.props.dirInfo}
                 getDirInfoAsync={this.props.getDirInfoAsync.bind(this)} />
      </div>
    );
  }
  componentWillMount(){
    //Load up the initial state
    this.props.getDirInfoAsync("./");
  }
}

export default Main;