import { ADDUSERDETAIL, AUTH } from "../actionTypes";

  
  const initialState = {
    user: null,
    isAuthenticated:false
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADDUSERDETAIL:
        return {
          ...state,
          user: action.payload,
        };
        case AUTH:
          return {
            ...state,
            isAuthenticated: action.payload,
          };
       
      default:
        return state;
    }
  };
  