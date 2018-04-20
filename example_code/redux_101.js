import { createStore } from 'redux';

// Action generators - return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Creates redux store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());  
});

// Action, object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// store.dispatch({
//   type: 'INCREMENT'
// });

// unsubscribe();

// Decrement the count
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch({
//   type: 'DECREMENT'
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

// Reset the count

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// Required types
// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({ count: 101 }));
