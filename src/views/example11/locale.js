import ReactDOM from 'react-dom';
import React, { PropTypes, Children } from 'react';

/*
1.通过childContextTypes和getChildContext可以将locale传给所有子树
2.子节点可以通过定义contextTypes来获取这个context，如果不定义则为空
*/
class LocalProvider extends React.Component {
  getChildContext() {
    return { locale: { en: 'english', cn: "chinese" } };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

LocalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

LocalProvider.childContextTypes = {
  locale: PropTypes.object.isRequired,
};

export { LocalProvider };
