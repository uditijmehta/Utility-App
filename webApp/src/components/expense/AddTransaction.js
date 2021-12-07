import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// Actions
import { addTransaction } from "../../actions/expenseAction";

// Style
import styled from "styled-components";


const AddTransactionStyle = styled.div`
  color: #fff;

  label {
    display: inline-block;
    margin: 10px 0;
  }

  .btn {
    cursor: pointer;
    background: rgb(144, 227, 59);
    background: linear-gradient(
      21deg,
      rgba(144, 227, 59, 1) 3%,
      rgba(76, 255, 133, 1) 89%
    );
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: inline-block;
    font-size: 1.3rem;
    margin: 10px 0 30px;
    padding: 20px;
    width: 100%;
  }

  .btn:focus,
  .delete-btn:focus,
  .update-btn:focus {
    outline: 0;
  }
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }
  label {
    display: inline-block;
    margin: 10px 0;
  }

  input[type="text"],
  input[type="number"] {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
`;
