import React, { Component, PropTypes } from 'react';
import ExampleButton from '../button';
import createExample1 from '../example1';
import createExample2 from '../example2';
import createExample3 from '../example3';
import createExample4 from '../example4';
import createExample5 from '../example5';

const buttons = [{ id: 1, name: 'example1', click: createExample1 },
  { id: 2, name: 'example2', click: createExample2 },
  { id: 3, name: 'example3', click: createExample3 },
  { id: 4, name: 'example4', click: createExample4 },
  { id: 5, name: 'example5', click: createExample5 }];

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
