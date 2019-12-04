import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reducers from './reducers';

const randomId = () => 9780000000000 + Math.floor(Math.random() * 10000000000);

const testLibrary = [
  {
    id: randomId(),
    title: 'Tale of two towns',
    category: 'Classic literature',
  },
  {
    id: randomId(),
    title: 'Foundation',
    category: 'Sci-Fi',
  },
  {
    id: randomId(),
    title: 'The C programming language',
    category: 'Learning',
  },
  {
    id: randomId(),
    title: 'Napoleon',
    category: 'Biography',
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
