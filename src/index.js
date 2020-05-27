// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import './index.css';
import api from './services/api';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore({ api, history })();
console.log('STORE', store);
ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
