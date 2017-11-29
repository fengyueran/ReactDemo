import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
1. this.props的属性和组件的属性是一一对应的，除了this.props.children,它表示组件的所有子节点
2. NodeLists中有两个子节点span，可以通过this.props.children获得，this.props.children的值有三种，
   当没有子节点时为undefined,当有一个子节点时为obje，当有多个子节点时为array，React提供了一个方法React.Children来
   处理this.props.children， 我们可以用React.Children.map来遍历children，而不用担心this.props.children的数据类型
*/
class NodeLists extends React.Component {
  render() {
    return (
      <ol>
        { (React.Children.map(this.props.children, (child) => <li>{child}</li>)) }
      </ol>);
  }
}

class Books extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        {this.props.children}
      </div>);
  }
}

Books.propTypes = {
  color: PropTypes.string.isRequired,
};


class SinglePerson extends React.Component {
  render() {
    return (
      <span>single</span>
    );
  }
}

class Foods extends React.Component {
  render() {
    return (
      <span>meat</span>
    );
  }
}

const createExample5 = () => {
  ReactDOM.render(
    <NodeLists>
      <span>XH</span>
      <span>Snow</span>
      <Books color="blue">
        <h2> book1</h2>
        <h2> book2</h2>
      </Books>
      {/* <SinglePerson /> 该组件没有children，则可以写成这种自封闭的形式 */}
      <SinglePerson />
      {/* 字符串可以放在<Foods>与</Foods>之间，此时的this.props.children就是该字符串
         <Foods>Foods</Foods>等同于 <Foods>{‘Foods’}</Foods> */}
      <Foods>
        Foods
      </Foods>
    </NodeLists>
    , document.getElementById('app')
  );
};

export { createExample5 };
