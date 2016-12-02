import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '@blueprintjs/core/dist/blueprint.css';

import routes from './routes/index';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
