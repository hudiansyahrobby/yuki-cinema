import Axios from '../helpers/axios';
import * as USER from '../constants/userConstant';

export const signup = (user, history) => async (dispatch) => {
  dispatch({ type: USER.SIGN_UP_INIT });
  try {
    const { data } = await Axios.post('/api/signup', user);
    dispatch({ type: USER.SIGN_UP_SUCCESS, payload: { token: data.accessToken } });
    history.push('/masuk');
  } catch (error) {
    dispatch({ type: USER.SIGN_UP__FAIL, payload: error.message });
  }
};

export const signout = () => async (dispatch) => {
  dispatch({ type: USER.SIGN_OUT_INIT });
  try {
    await Axios.post('/api/signout');
    localStorage.removeItem('token');
    dispatch({ type: USER.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: USER.SIGN_OUT__FAIL, payload: error.message });
  }
};

export const signin = (userData, history) => async (dispatch) => {
  dispatch({ type: USER.SIGN_IN_INIT });
  try {
    const { data } = await Axios.post('/api/signin', userData);
    const { accessToken, user } = data;
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: USER.SIGN_IN_SUCCESS, payload: { token: accessToken, user } });
    history.push('/profile');
  } catch (error) {
    dispatch({ type: USER.SIGN_IN__FAIL, payload: error.message });
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  if (token && user) {
    dispatch({ type: USER.SIGN_IN_SUCCESS, payload: { token, user } });
  } else {
    dispatch({ type: USER.SIGN_IN__FAIL, payload: 'Token is not valid' });
  }
};
