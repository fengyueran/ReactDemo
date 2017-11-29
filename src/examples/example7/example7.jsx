import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
1.组件不是真实的DOM节点，而是存于内存中的一种结构，叫虚拟DOM，当它插入文档后才会变成真实的DOM
  如果需要获取真实的DOM节点，就需要用到ref属性。
2.下面的input文本输入框需要获取用户输入，而虚拟DOM是拿不到用户输入的，则需要用到ref,
  1）下面的ref添加了回调函数，这是官方强烈推荐的用法，这个函数在组件被挂载后立即执行，回调函数
  的参数则为该组件的具体实例。组件被卸载或者原有的ref属性本身发生变化时，回调函数也会立即执行，此时
  回调函数的参数为null,以防止内存泄漏。
*/
class Son extends React.Component {
  handleClick() {
    this.myTextField.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.props.inputRef} />
        <button onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        {/* 使父类可以访问子类, 此例中父类可通过this.inputElement来访问子类的input */}
        <Son inputRef={(e) => {
          this.inputElement = e;
          console.log(this.inputElement);
        }} />
      </div>
    );
  }
}

const createExample7 = () => {
  ReactDOM.render(
    <Parent />
    , document.getElementById('app')
  );
};

export { createExample7 };
