import React, { useState, useCallback } from "react";
// Style
import styled from "styled-components";

// Import components
import { Header } from "../components/expense/Header";
import { Balance } from "../components/expense/Balance";
import { IncomeExpense } from "../components/expense/IncomeExpense";
import { TransactionList } from "../components/expense/TransactionList";
import { AddTransaction } from "../components/expense/AddTransaction";

// Actions
import { updateTransaction } from "../actions/expenseAction";
import { useSelector, useDispatch } from "react-redux";

export default Expense;
