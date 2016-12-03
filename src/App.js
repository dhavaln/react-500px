import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';

import * as photoActions from './actions/photos';
import * as photoDetailActions from './actions/photoDetail';
import * as photoSearchActions from './actions/searchPhotos';

import './App.css';

const mapStateToProps = function(state){
  return {...state.photos, detail: {...state.detail}}
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({...photoActions, ...photoDetailActions, ...photoSearchActions}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
