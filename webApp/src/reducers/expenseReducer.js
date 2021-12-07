const initState = {
    transactions: [],
    loading: true,
    error: {},
  };
  
  const expenseReducer = (state = initState, action) => {
    switch (action.type) {
      case "GET_TRANSACTIONS":
        return {
          ...state,
          transactions: action.payload,
          loading: false,
        };
   
      case "TRANSACTION_ERROR":
        return {
          ...state,
  
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  export default expenseReducer;
  