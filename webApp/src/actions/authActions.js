import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alertActions';



// Register user
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/api/v1/auth/register', body, config);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.message, 'danger'));
      });
    }
    dispatch({
      type: 'REGISTER_FAIL',
    });
  }
};



// Logout
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/v1/auth/logout');
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  } catch (err) {
    console.log(err);
  }
};
