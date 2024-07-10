import { ADDUSERDETAIL } from "../actionTypes";

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
    //   instanceWithAuth.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      dispatch({
        type: ADDUSERDETAIL,
        payload: data,
      });

      localStorage.setItem('userToken', JSON.stringify(data));
      callback && callback(true);
    } else {
      callback && callback(false);
    }
  } catch (error) {
    console.error('Login error:', error);
    callback && callback(false);
  }
};
