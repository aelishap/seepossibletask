import { ADDUSERDETAIL, AUTH } from "../actionTypes";

export const login = (values, callback) => async (dispatch) => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: values?.username, password: values?.password })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    if (data?.token) { 
    dispatch({
      type: AUTH,
      payload: true
    })
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('user', JSON.stringify(data));
      dispatch({
        type: ADDUSERDETAIL,
        payload: data,
      });
      callback && callback(true);
    } else {
      callback && callback(false);
    }
  } catch (error) {
    callback && callback(false);
  }
};

