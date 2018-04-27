import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('Expenses Reducer', () => {
  test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '1029',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  test('should add an expense', () => {
    const expense = {
      id: '4',
      description: 'Electric bill',
      note: '',
      amount: '200000',
      createdAt: 0,
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });

  test('should edit an expense', () => {
    const updates = {
      description: 'Coca cola',
    };
    const { id } = expenses[0];
    const action = {
      type: 'EDIT_EXPENSE',
      id,
      updates,
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
      ...expenses[0],
      description: updates.description,
    });
  });

  test('should not edit expense if expense not found', () => {
    const updates = {
      amount: 10000,
    };
    const id = '1000000';
    const action = {
      type: 'EDIT_EXPENSE',
      id,
      updates,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
