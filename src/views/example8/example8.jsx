import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
1. 组件需要交互，从而发生变化， React的一大创新就是将组件看成一个状态机，状态的改变来触发重新渲染UI
下面的state中有一个message，初始为'hello world',当用户输入后，改变state从而触发render函数，重新渲染UI
2. 表单需要通过onChange 事件的回调函数来获取用户输入的值，textarea 元素、select元素、radio元素同样如此
*/
class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'hello world' };
  }
  messageChange(e) {
    this.setState({ message: e.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.messageChange} />
      </div>
    );
  }
}

const createExample8 = () => {
  ReactDOM.render(
    <InputField />
    , document.getElementById('app')
  );
};

export { createExample8 };
