import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reducers from './reducers';

const testLibrary = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Tale of two towns',
    category: 'Classic literature',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Foundation',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The C programming language',
    category: 'Learning',
  },
];

const store = createStore(
  reducers,
  {
    books: testLibrary,
    filter: 'All',
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
