/* eslint-disable jsx-a11y/anchor-is-valid, react/no-unescaped-entities */
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
// <BrowserRouter> http://example.com/about
// <HashRouter> http://example.com/#/about
import { BrowserRouter, HashRouter, Link, Route, Switch } from 'react-router-dom';
import Category from './category';
import Products from './products';


/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class Main extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <span>Router</span>
        <li><Link to={`${match.url}`}>Homes</Link></li>
        {/* Link 跳转到某个路由 */}
        <li><Link to={`${match.url}/category`}>Category</Link></li>
        <li><Link to={`${match.url}/products`}>Products</Link></li>
        {/* Switch匹配第一个，如果URL为/category， 同样会匹配/:id */}
        <Switch>
          <Route exact={true} path={`${match.url}`} component={Home} />
          <Route path={`${match.url}/category`} component={Category} />
          <Route path={`${match.url}/products`} component={Products} />
          <Route path={`${match.url}/:id`} render={() => (<p> I want this text to show up for all routes other than '/', '/products' and '/category'</p>)} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  match: PropTypes.object.isRequired,
};

const createExample16 = (match) => {
  ReactDOM.render(
    <BrowserRouter >
      {/* Router组件允许只有一个子元素(Main) */}
      <Main match={match} />
    </BrowserRouter>
    , document.getElementById('app')
  );
};

const Example16 = (match) => (
  <Main match={match} />
);


export { Example16 };
