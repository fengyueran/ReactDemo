/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, PropTypes } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ExampleButton from '../example';
import { Example1, Example2, Example3, Example4, Example5, Example6, Example7, Example8,
  Example9, Example10, Example11, Example12, Example13, Example14, Example15, Example16,
  Example17 } from '../../examples';

const examples = [{ id: 1, name: 'example1', example: Example1 },
  { id: 2, name: 'example2', example: Example2 },
  { id: 3, name: 'example3', example: Example3 },
  { id: 4, name: 'example4', example: Example4 },
  { id: 5, name: 'example5', example: Example5 },
  { id: 6, name: 'example6', example: Example6 },
  { id: 7, name: 'example7', example: Example7 },
  { id: 8, name: 'example8', example: Example8 },
  { id: 9, name: 'example9', example: Example9 },
  { id: 10, name: 'example10', example: Example10 },
  { id: 11, name: 'example11', example: Example11 },
  { id: 12, name: 'example12', example: Example12 },
  { id: 13, name: 'example13', example: Example13 },
  { id: 14, name: 'example14', example: Example14 },
  { id: 15, name: 'example15', example: Example15 },
  { id: 16, name: 'example16', example: Example16 },
  { id: 17, name: 'example17', example: Example17 }];

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
    const { match } = this.props;
    return examples.map((example) => (
      <Link
        key={example.id} to={`${match.url}/${example.id}`}>
        <ExampleButton
         name={example.name}
        Category />
      </Link>));
  }

  Router() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          path={`${match.path}/:id`}
          render={(info) => {
            const id = parseInt(info.match.params.id, 10);
            const result = examples.find(example => example.id === id);
            const currentExample = result.example;
            return (
              <div style={{
                position: 'absolute', width: '100%', height: '100%', backgroundColor: 'gray',
               }}>
                {currentExample()}
              </div>);
          }
        } />)
      </Switch>);
  }
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { this.state.content }
        { this.Router() }

      </div>);
  }
}

Main.propTypes = {
  match: PropTypes.object.isRequired,
};


export default Main;
