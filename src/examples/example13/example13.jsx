import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER":
      return state + action.data;
    default: return state;
  }
};

const store = createStore(
  reducer,
  // thunk改造了store.dispatch函数使其可以接收函数作为参数
  applyMiddleware(thunk, createLogger())
);
global.store = store;
const increase = () => {
  store.dispatch({ type: 'COUNTER', data: 1 });
};

const decrease = () => {
  console.log("返回函数作为dispatch的参数");
  return (dispatch) => dispatch({ type: 'COUNTER', data: -1 });
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
        <button onClick={() => {
          store.dispatch(decrease());
         }}>-
        </button>
      </div>
    );
  }
}


const createExample13 = () => {
  ReactDOM.render(
    <Main />
    , document.getElementById('app')
  );
};

const Example13 = () => (
  <Main />
);

store.subscribe(Example13);

export { Example13 };
