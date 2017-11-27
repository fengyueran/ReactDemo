import React, { Component, PropTypes } from 'react';
import ExampleButton from '../button';
import { createExample1, createExample2, createExample3, createExample4, createExample5, createExample6, createExample7 } from '../index';

const buttons = [{ id: 1, name: 'example1', click: createExample1 },
  { id: 2, name: 'example2', click: createExample2 },
  { id: 3, name: 'example3', click: createExample3 },
  { id: 4, name: 'example4', click: createExample4 },
  { id: 5, name: 'example5', click: createExample5 },
  { id: 6, name: 'example6', click: createExample6 },
  { id: 7, name: 'example7', click: createExample7 }];

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
