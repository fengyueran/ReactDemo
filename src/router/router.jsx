import React from 'react';
import { HashRouter, BrowserRouter, MemoryRouter, Switch, Route, IndexRedirect } from 'react-router-dom';
import Routes from './routes';


const AppRouter = () => (
  <HashRouter>
    {Routes}
  </HashRouter>
);

export { AppRouter };
