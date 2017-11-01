import * as actions from '../actions/action';

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const { SHOW_ALL } = actions.VisibilityFilters;

const initialState = {
  visibilityFilter: actions.VisibilityFilters.SHOW_ALL,
  todos: [],
};

const addTodo = (text) =>
  dispatch => {
    dispatch(actions.addTodo(text));
  };

// reducer 1
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

// reducer 2
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], completed: true },
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export { visibilityFilter, todos, addTodo };
