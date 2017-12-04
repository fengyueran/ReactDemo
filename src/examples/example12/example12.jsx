import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER":
      return state + action.data;
    default: return state;
  }
};

const store = createStore(reducer);
global.store = store;
const increase = () => {
  store.dispatch({ type: 'COUNTER', data: 1 });
};

const decrease = () => {
  store.dispatch({ type: 'COUNTER', data: -1 });
};

class Main extends React.Component {
  render() {
    const num = store.getState();
    return (
      <div>
        <span>
          {num}
        </span>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    );
  }
}


const createExample12 = () => {
  ReactDOM.render(
    <Main />
    , document.getElementById('app')
  );
};

const Example12 = () => (
  <Main />
);

store.subscribe(Example12);

export { Example12 };
