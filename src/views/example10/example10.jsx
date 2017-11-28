/* eslint-disable */
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';

/*
1.React事件名都遵循camelCase，如onClick
2.在click中用this需要注意，如果不绑定this，this对象可能会改变
  1)this.handleClick.bind(this)
  2) ()=>{this.handleClick();} //如果用箭头函数，会自动绑定this,但是每次render时都会创建回调函数， 如果回调函数作为属性传到子组件，则会导致不必要的重绘
  如下：点击TestBox中的button时，父类重新渲染， 箭头函数在每次 render 时都会重新分配，TestBox的父组件中的箭头函数导致 TestBox 组件为所有的用户实例传递了一个新的函数。
  所以当点击任何按钮时，每个TestBox实例都会重新 render。
  因此建议用显示的绑定(1)
3.传递参数：
1）this.handleClick1.bind(this, "Snow")
2）() => { this.handleClick2(this, "Snow");
4.可以直接给div这种非交互的元素添加事件，onClick， onMouseEnter，onMouseLeave等
*/
class EventBox extends React.Component {
  constructor(props) {
    super(props);
    this.num = 10;
    this.state = {
      message: "hello",
      names: ["Jay", "Snow", "XH"],
    };
  }

  // 未绑定this，点击时this对象改变
  handleClick1(name, e) {
    console.log(this.num);
    this.setState({ message: `hello${name}` });
  }


  handleClick2(name, e) {
    this.setState({ message: name });
  }
  handDivClick() {
    alert("div click");
  }
  handDivMouseEnterClick() {
    alert("div mouse enter");
  }
  handDivMouseLeaveClick() {
    alert("div mouse leave");
  }

  handleLinkClick(e) {
    console.log("link");
    // 阻止事件传播，不会跳转到百度
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ display: 'inline-grid' }}>
        <button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={this.handleClick1.bind(this, "Snow")} >
          BindCallBack
        </button>
        <button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={(e) => { this.handleClick2("Snow", e); }} >
          ArrayCallBack
        </button>
        { this.state.names.map((name) =>
          <TestBox key={name} name={name} arrowFunc={() => { this.handleClick2(name); }} />)
        }
        <div
          style={{
             width: '85px', height: '25px', marginTop: '10px', backgroundColor: 'gray',
           }} onClick={this.handDivClick}
           >
          Div Click
        </div>
        <div
          style={{
             width: '85px', height: '25px', marginTop: '10px', backgroundColor: 'gray', fontSize:12, textAlign: 'center'
           }} onMouseLeave={this.handDivMouseLeaveClick} onMouseEnter={this.handDivMouseEnterClick}
           >
          Div Enter/Leave
        </div>
        <span>{this.state.message}</span>
        <a href="http://www.baidu.com" onClick={this.handleLinkClick} >
          Click me
        </a>
      </div>
    );
  }
}

class TestBox extends React.Component {
  render() {
    console.log("render test box");
    return (<button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={this.props.arrowFunc}>{`Click${this.props.name}`}</button>);
  }
}
TestBox.propTypes = {
  name: PropTypes.string.isRequired,
  arrowFunc: PropTypes.func.isRequired,
};

const createExample10 = () => {
  ReactDOM.render(
    <EventBox />
    , document.getElementById('app')
  );
};

export { createExample10 };
