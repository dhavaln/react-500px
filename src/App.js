import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';
import * as actionCreators from './actions/index';
import * as photoActions from './actions/photos';

import './App.css';

const mapStateToProps = function(state){
  return {...state.photos, detail: {...state.detail}}
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({...photoActions, ...actionCreators}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
