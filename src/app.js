import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log(store.getState());

store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 2000 }));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

store.dispatch(setTextFilter('water'));

const stateTwo = store.getState();
console.log(getVisibleExpenses(stateTwo.expenses, stateTwo.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
