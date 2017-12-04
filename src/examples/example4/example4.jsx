import ReactDOM from 'react-dom';
import React from 'react';// jsx编译需要调用React.createElement，因此React需在作用域内

/*
1. React允许将代码封装成组件，然后像普通HTML标签一样使用它。
2. React.createClass方法就用于生成一个组件类，也可以直接继承React.Component类
3. 模板插入 <HelloMessage  />时，会自动生成HelloMessage的实例。
4. 所有组件名首字母必须大写，且必须有render方法，且只能包含一个顶层标签
5. 组件的使用方法与原生HTML标签完全一样，可以加入属性，如<HelloMessage name="XH" />，即组件HelloMessage加入了属性name,值为XH，
   组件的属性可以在组件类的this.props对象上获取
6. 组件的class属性要写成className, for属性需要写成htmlFor, 因为class和for都是JavaScript的保留字
*/
const HelloMessage = React.createClass({
  render() {
    return <h1>{this.props.name}</h1>;
  }
});

class HelloWorld extends React.Component {
  render() {
    // info接收this.props除plant以外的所有属性
    const { planet, ...info } = this.props;
    return (
      <div>
        <h1>{planet}</h1>
        <h1>{info.age}</h1>
        <h1>{info.radius}</h1>
      </div>
    );
  }
}

class Age extends React.Component {
  render() {
    return <h1>{this.props.age}</h1>;
  }
}

const createExample4 = () => {
  const props = { name: "Mars", age: 100, radius: 5000 };
  ReactDOM.render(
    <div>
      <HelloMessage name="XH" />
      {/* 扩展运算符来传递属性 */}
      <HelloWorld planet="Mars" {...props} />
      {/* 传递props,需要加大括号(大括号当js解析) */}
      <Age age={10} />
    </div>
    , document.getElementById('app')
  );
};

const Example4 = () => {
  const props = { name: "Mars", age: 100, radius: 5000 };
  return (
    <div>
      <HelloMessage name="XH" />
      {/* 扩展运算符来传递属性 */}
      <HelloWorld planet="Mars" {...props} />
      {/* 传递props,需要加大括号(大括号当js解析) */}
      <Age age={10} />
    </div>
  );
};

export { Example4 };
