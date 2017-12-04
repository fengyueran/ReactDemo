import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { LocalProvider } from './locale';

class ContextTest1 extends React.Component {
  render() {
    return (
      <div>
        <span>{this.context.locale.cn}</span>
        <ContextTest2 />
      </div>
    );
  }
}
ContextTest1.contextTypes = {
  locale: PropTypes.object,
};

class ContextTest2 extends React.Component {
  render() {
    return (
      <div>
        <span>{this.context.locale.en}</span>
      </div>
    );
  }
}
ContextTest2.contextTypes = {
  locale: PropTypes.object,
};

const createExample11 = () => {
  ReactDOM.render(
    <LocalProvider>
      <ContextTest1 />
    </LocalProvider>
    , document.getElementById('app')
  );
};

const Example11 = () => (
  <LocalProvider>
    <ContextTest1 />
  </LocalProvider>
);

export { Example11 };
