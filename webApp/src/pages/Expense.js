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

    const updateExpenseHandler = useCallback(
        (e) => {
          e.preventDefault();
          const editedTransaction = {
            text,
            amount,
          };
          dispatch(updateTransaction(isEditItem, editedTransaction));
    
          setText("");
          setAmount(0);
          setToggleSubmit(false);
        },
        [amount, dispatch, isEditItem, text]
      );

      return (
        <ExpenseStyle>
          <div className="container">
            <div className="content">
              <Header />
              <Balance />
              <IncomeExpense />
              <AddTransaction
                text={text}
                setText={setText}
                amount={amount}
                setAmount={setAmount}
                toggleSubmit={toggleSubmit}
                setToggleSubmit={setToggleSubmit}
                isEditItem={isEditItem}
                updateHandler={updateHandler}
                updateExpenseHandler={updateExpenseHandler}
              />
            </div>

            <div className="content">
          <TransactionList
            updateHandler={updateHandler}
            toggleSubmit={toggleSubmit}
            setToggleSubmit={setToggleSubmit}
            updateExpenseHandler={updateExpenseHandler}
          />
        </div>
          </div>
        </ExpenseStyle>
      );
    };
    
export default Expense;
