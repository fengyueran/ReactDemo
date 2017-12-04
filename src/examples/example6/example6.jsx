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
  // optionalArray: PropTypes.array,
  // optionalBool: PropTypes.bool,
  // optionalFunc: PropTypes.func,
  // optionalNumber: PropTypes.number,
  // optionalObject: PropTypes.object,
  // optionalString: PropTypes.string,
  // optionalSymbol: PropTypes.symbol,
  // optionalNode: PropTypes.node,

  // // A React element.
  // optionalElement: PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  // optionalMessage: PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  // optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  // optionalUnion: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.instanceOf(Message)
  // ]),

  // // An array of a certain type
  //  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  //
  //  // An object with property values of a certain type
  //  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  //
  //  // An object taking on a particular shape
  //  optionalObjectWithShape: PropTypes.shape({
  //    color: PropTypes.string,
  //    fontSize: PropTypes.number
  //  }),
  //
  //  // You can chain any of the above with `isRequired` to make sure a warning
  //  // is shown if the prop isn't provided.
  //  requiredFunc: PropTypes.func.isRequired,
  //
  //  // A value of any data type
  //  requiredAny: PropTypes.any.isRequired,
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

const Example6 = () => (
  <Hello message="hello" />
);

export { Example6 };
