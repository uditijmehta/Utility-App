import React from 'react';
import { useSelector } from 'react-redux';
// Utils
import { numberWithCommas } from '../../utils/format';

// Style
import styled from 'styled-components';

export const IncomeExpense = () => {
  const { transactions } = useSelector((state) => state.expenses);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div>
    </div>
  );
};
