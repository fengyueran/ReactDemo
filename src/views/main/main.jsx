import React, { Component, PropTypes } from 'react';
import ExampleButton from '../button';
import { createExample1, createExample2, createExample3, createExample4, createExample5, createExample6, createExample7, createExample8,
  createExample9, createExample10, createExample11, createExample12, createExample13, createExample14, createExample15, createExample16,
  createExample17 } from '../../examples';

const buttons = [{ id: 1, name: 'example1', click: createExample1 },
  { id: 2, name: 'example2', click: createExample2 },
  { id: 3, name: 'example3', click: createExample3 },
  { id: 4, name: 'example4', click: createExample4 },
  { id: 5, name: 'example5', click: createExample5 },
  { id: 6, name: 'example6', click: createExample6 },
  { id: 7, name: 'example7', click: createExample7 },
  { id: 8, name: 'example8', click: createExample8 },
  { id: 9, name: 'example9', click: createExample9 },
  { id: 10, name: 'example10', click: createExample10 },
  { id: 11, name: 'example11', click: createExample11 },
  { id: 12, name: 'example12', click: createExample12 },
  { id: 13, name: 'example13', click: createExample13 },
  { id: 14, name: 'example14', click: createExample14 },
  { id: 15, name: 'example15', click: createExample15 },
  { id: 16, name: 'example16', click: createExample16 },
  { id: 17, name: 'example17', click: createExample17 }];

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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { this.state.content }
      </div>);
  }
}

export default Main;
