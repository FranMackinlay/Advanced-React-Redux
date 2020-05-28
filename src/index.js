import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import './index.css';
import api from './services/api';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore({ api, history })();
ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
