import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from './addtodo';
import TodoList from './todolist';
import Footer from './footer';
import Card from '../containers/cardcontainer';
import { addTodo } from '../reducers/appstate';

class App extends Component {
  render() {
    // Injected by connect() call:
    const {
      completeTodo, setVisibilityFilter, visibleTodos, visibilityFilter
    } = this.props;

    return (
      <div>
        <AddTodo
          onAddClick={text => {
            this.props.addTodo(text);
          }

          } />
        <Card />
      </div>
    );
  }
}

// App.propTypes = {
//   visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//   }).isRequired).isRequired,
//   visibilityFilter: PropTypes.oneOf([
//     'SHOW_ALL',
//     'SHOW_COMPLETED',
//     'SHOW_ACTIVE',
//   ]).isRequired,
// };

const selectTodos = (todos, filter) => {
  console.log(111);
  // switch (filter) {
  //   case VisibilityFilters.SHOW_ALL:
  //     return todos;
  //   case VisibilityFilters.SHOW_COMPLETED:
  //     return todos.filter(todo => todo.completed);
  //   case VisibilityFilters.SHOW_ACTIVE:
  //     return todos.filter(todo => !todo.completed);
  //   default:
  // }
  return 1;
};


const mapToState = (state) => ({
  visibleTodos: selectTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter,
});

const AppContainer = connect(mapToState, {
  addTodo,
})(App);

export default AppContainer;
