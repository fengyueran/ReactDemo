import ReactDOM from 'react-dom';
import React from 'react';

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

const createExample5 = () => {
  ReactDOM.render(
    <NodeLists>
      <span>XH</span>
      <span>Snow</span>
    </NodeLists>
    , document.getElementById('app')
  );
};

export { createExample5 };
