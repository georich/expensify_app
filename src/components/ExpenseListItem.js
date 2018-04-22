import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: {amount}, Created At: {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
