import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actionTypes";

const initialState = {
  products: [],
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: null
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
