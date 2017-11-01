import React, { Component, PropTypes } from 'react';
import ExampleButton from '../button';
import createExample1 from '../example1';
import createExample2 from '../example2';

const buttons = [{ id: 1, name: 'example1', click: createExample1 },
  { id: 2, name: 'example2', click: createExample2 }];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { content: this.makeButtons() };
  }

  handleClick(example) {
    this.setState({
      content: example,
    });
  }
  makeButtons() {
    return buttons.map((button) => (
      <ExampleButton
      key={button.id} name={button.name} onClick={() => {
        if (typeof button.click !== 'undefined') {
          button.click();
        } else {
          this.handleClick(button.targetView);
        }
      }} />));
  }
  render() {
    return (
      <div>
        { this.state.content }
      </div>);
  }
}

export default Main;
