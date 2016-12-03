import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';

import * as photoActions from './actions/photos';
import * as photoDetailActions from './actions/photoDetail';

import './App.css';

const mapStateToProps = function(state){
  return {...state.photos, detail: {...state.detail}}
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({...photoActions, ...photoDetailActions}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
