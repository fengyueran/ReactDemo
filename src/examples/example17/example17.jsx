/* eslint-disable jsx-a11y/anchor-is-valid, react/no-unescaped-entities */
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
// <BrowserRouter> http://example.com/about
// <HashRouter> http://example.com/#/about
import { BrowserRouter, HashRouter, Redirect, Link, Route, Switch } from 'react-router-dom';
import Category from './category';
import Products from './products';
import Login, { fakeAuth } from './login';


/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

// Admin component
const Admin = () => (<div> <h2>Welcome admin </h2></div>);

class PrivateRoute extends React.Component {
  render() {
    // 不能写成 const { component, ...rest } = this.props;
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest} render={props => (fakeAuth.isAuthenticated ? <Component />
        // Redirect用法：https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
    : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
  )} />
    );
  }
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

class Main extends React.Component {
  render() {
    return (
      <div>
        <span>Router</span>
        <li><Link to="/">Homes</Link></li>
        {/* Link 跳转到某个路由 */}
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/admin">Admin area</Link></li>
        {/* Switch匹配第一个，如果URL为/category， 同样会匹配/:id */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact={true} path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/:id" render={() => (<p> I want this text to show up for all routes other than '/', '/products' and '/category'</p>)} />
        </Switch>
      </div>
    );
  }
}


const createExample17 = () => {
  ReactDOM.render(
    <BrowserRouter >
      {/* Router组件允许只有一个子元素(Main) */}
      <Main />
    </BrowserRouter>
    , document.getElementById('app')
  );
};


export { createExample17 };
