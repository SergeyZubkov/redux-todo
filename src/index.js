import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
