import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
1. 组件需要交互，从而发生变化， React的一大创新就是将组件看成一个状态机，状态的改变来触发重新渲染UI
下面的state中有一个message，初始为'hello world',当用户输入后，改变state从而触发render函数，重新渲染UI
2. 表单需要通过onChange 事件的回调函数来获取用户输入的值，textarea 元素、select元素、radio元素同样如此
3.不能直接修改state, this.state.message = 'hello world' //wrong
  只有在constructor中才能对state赋值
4.this.props, this.state可能是异步更新的
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
*/
class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'hello world', age: 0 };
  }
  messageChange(e) {
    this.setState({ message: e.target.value });
  }
  handleClick() {
    // wrong maybe fail
    this.setState({ age: this.state.age + 1 });

    // correct
    this.setState((prevState, props) => ({
      age: this.state.age + 1,
    }));

    // 更新完成后，回调
    this.setState({ age: 5 }, () => {
      console.log("update age finish");
    });
  }

  render() {
    return (
      <div>
        <span>{`my age:${this.state.age}`}</span>
        <button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={this.handleClick.bind(this)} >
            ChangeAge
        </button>
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

const Example8 = () => (
  <InputField />
);

export { Example8 };
