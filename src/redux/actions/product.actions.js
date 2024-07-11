import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actionTypes";

export const fetchProducts = () => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;
  
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }
    try {
      const response = await fetch('https://dummyjson.com/auth/products', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      dispatch({
        type: GET_PRODUCTS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error.message
      });
    }
  };