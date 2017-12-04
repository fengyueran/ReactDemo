import ReactDOM from 'react-dom';
import React from 'react';// jsx编译需要调用React.createElement，因此React需在作用域内

const createExample = () => {
  console.log(ReactDOM);
  ReactDOM.render(<h1>hello world!</h1>, document.getElementById('app'));
};

const Example1 = () => (
  <div>
    <h1>hello world!</h1>
  </div>
);

export { Example1 };
