import { createStore } from 'redux';

import { VisibilityFilters } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state: undefined, action: null) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  return state;
}

function counter(state: number = 0, action: { type: string; }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() =>
  // tslint:disable-next-line:no-console
  console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
