import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <span>{this.context.locale.cn}</span>
        <ContextTest2 />
      </div>
    );
  }
}

const createExample12 = () => {
  ReactDOM.render(
    <App />
    , document.getElementById('app')
  );
};

export { createExample12 };
