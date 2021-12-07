import axios from "axios";

// Get the current user's expenses
export const getTransactions = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/expenses/me");
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Add Expense
export const addTransaction = (transaction) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/expenses", transaction, config);
      dispatch({
        type: "ADD_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  };