import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from '../App';
import Home from '../components/Home';
import PhotoDetail from '../components/PhotoDetail';

import store, {history} from '../stores/index';

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/photo/:id" component={PhotoDetail}></Route>
      </Route>
    </Router>
  </Provider>
)

export default routes;
