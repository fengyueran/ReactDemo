import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  switch (action.type) {
    case "COUNTER":
      return state ? state + action.data : action.data;
    default: return state;
  }
};

const store = createStore(
  reducer,
  // thunk改造了store.dispatch函数使其可以接收函数作为参数, 用connect必须要添加
  applyMiddleware(thunk, createLogger())
);
global.store = store;
const increase = () => dispatch =>
  dispatch({ type: 'COUNTER', data: 1 });

const decrease = () => dispatch => dispatch({ type: 'COUNTER', data: -1 });

class Main extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div>
        <span>
          {num}
        </span>
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-
        </button>
      </div>
    );
  }
}
Main.propTypes = {
  num: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

// mapStateToProps会订阅store, state更新时自动执行重而更新UI
const mapStateToProps = (state, ownProps) => {
  // ownProps为container的属性
  console.log(ownProps);
  const num = state || ownProps.num;
  return { num };
};

const MainContainer = connect(
  mapStateToProps,
  { increase, decrease }
)(Main);


const createExample14 = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MainContainer num={0} />
    </Provider>
    , document.getElementById('app')
  );
};


export { createExample14 };
