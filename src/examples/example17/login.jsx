/* eslint-disable jsx-a11y/anchor-is-valid, react/no-unescaped-entities */
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
// <BrowserRouter> http://example.com/about
// <HashRouter> http://example.com/#/about
import { BrowserRouter, HashRouter, Redirect, Link, Route, Switch } from 'react-router-dom';

/* A fake authentication function */

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    };
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    return redirectToReferrer ? <Redirect to={from} /> : (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}


export default Login;
