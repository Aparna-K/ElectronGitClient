import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './presentationalMain';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
    return {
        dirInfo: state.dirInfo
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect( mapStateToProps, mapDispatchToProps )(Main);

export default App;