import React from "react";
// Utils
import { numberWithCommas } from "../../utils/format";
// Actions
import { deleteTransaction } from "../../actions/expenseAction";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
// Style
import styled from "styled-components";
import { useDispatch } from "react-redux";

const TransactionStyle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  button {
    border: none;
    outline: none;
    background: none;
    .icon {
      font-size: 1.7rem;
      cursor: pointer;
    }
    .expense-delete-icon {
      color: rgb(255, 41, 41);
    }
    .expense-update-icon {
      margin-left: 0.5rem;
      color: #3be744;
    }
  }
`;
