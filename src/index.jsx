
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './views/main';
import { rootReducer } from './reducers/rootreducer';

const store = createStore(rootReducer);
global.store = store;
const rootElement = document.getElementById('app');
render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);
