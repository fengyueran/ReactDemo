import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';


class LifeController extends React.Component {
  constructor() {
    super();
    this.state = { message: "earth age:" };
  }
  handleClick() {
    this.setState({ message: "mars age:" });
  }
  render() {
    return (
      <div style={{ display: 'inline-grid' }}>
        <LifeCircle message={this.state.message} />
        <button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={this.handleClick.bind(this)} >
          ChangeProp
        </button>
      </div>
    );
  }
}

/*
1.componentWillReceiveProps(),shouldComponentUpdate(),componentWillUpdate(),render(),componentDidUpdate()组件重新渲染时都会调用
*/
class LifeCircle extends React.Component {
  constructor() {
    super();
    this.state = { age: 0 };
  }
  handleClick() {
    this.setState({ age: this.state.age });
  }

  componentWillMount() {
    alert("component will mount");
  }
  componentDidMount() {
    alert("component did mount");
  }
  componentWillUpdate(nextProps, nextState) {
    alert("component will update");
  }
  componentDidUpdate(prevProps, prevState) {
    alert("component did update");
  }
  componentWillUnmount() {
    alert("component will unmount");
  }

  componentWillReceiveProps(nextProps) {
    alert("component will receiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert("should component update");
    return true;
  }


  render() {
    alert("render");
    return (
      <div>
        <span>
          {this.props.message}
          {this.state.age}
        </span>
        <button style={{ width: '85px', height: '25px', marginTop: '10px' }} onClick={this.handleClick.bind(this)} >
          ChangeState
        </button>
      </div>
    );
  }
}

LifeCircle.propTypes = {
  message: PropTypes.string.isRequired,
};

const createExample9 = () => {
  ReactDOM.render(
    <LifeController />
    , document.getElementById('app')
  );
};

export { createExample9 };
