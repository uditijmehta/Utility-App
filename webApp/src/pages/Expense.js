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

const Expense = () => {
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.expenses);
  
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [isEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(false);
  
    const updateHandler = (id) => {
      let newEditItem = transactions.find((el) => {
        return el._id === id;
      });
  
      setText(newEditItem.text);
      setAmount(newEditItem.amount);
      setIsEditItem(newEditItem._id);
    };
};

export default Expense;
