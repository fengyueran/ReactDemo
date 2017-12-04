
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter, MemoryRouter, caseSwitch, Route, IndexRedirect } from 'react-router-dom';
import AppRouter from './router';
import { rootReducer } from './reducers/rootreducer';

// store是保存状态的地方， 整个应用只能有一个 Store。
// const store = createStore(rootReducer);
// global.store = store;
const rootElement = document.getElementById('app');

render(
  <AppRouter />,
  rootElement
);
