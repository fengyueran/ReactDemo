import { combineReducers } from 'redux';
import { cardState } from './cardstate';
import { cordovaState } from './cordovastate';
import { visibilityFilter, todos } from './appstate';


const reducers = {
  cardState,
  cordovaState,
  visibilityFilter,
  todos,
};

const rootReducer = combineReducers(reducers);

export { rootReducer };
