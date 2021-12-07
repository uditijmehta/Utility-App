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