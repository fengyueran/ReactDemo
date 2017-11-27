import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
组件需要交互，从而发生变化， React的一大创新就是将组件看成一个状态机，状态的改变来触发重新渲染UI
下面的state中有一个backgroundColor，初始为'red',当state变化后会触发render函数，重新渲染UI
*/
class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: 'red' };
  }
  handleClick() {
    this.setState({ backgroundColor: 'blue' });
  }
  render() {
    return (
      <div>
        <div style={{ width: 100, height: 100, backgroundColor: this.state.backgroundColor }} />
        <button style={{ width: 90, height: 30, marginTop: 20 }} onClick={this.handleClick.bind(this)}>
          ChangeColor
        </button>
      </div>
    );
  }
}

const createExample8 = () => {
  ReactDOM.render(
    <ColorBox />
    , document.getElementById('app')
  );
};

export { createExample8 };
