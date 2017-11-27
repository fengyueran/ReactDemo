import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';


class Hello extends React.Component {
  render() {
    return (
      <span>
        {this.props.message}
        {this.props.place}
      </span>);
  }
}

Hello.propTypes = {
  message: PropTypes.string.isRequired, // message属性只能是string类型且必须提供这个属性，否则会报错
  place: PropTypes.string,
};
Hello.defaultProps = {
  place: "world",
};
/*
1.组件的属性可以是任意值，有时需要一种机制来判定约束所提供的属性是否符合要求
  组件类的propTypes属性就给我们提供了这样一个机制
*/
const createExample6 = () => {
  ReactDOM.render(
    <Hello message="hello" />
    , document.getElementById('app')
  );
};

export { createExample6 };
