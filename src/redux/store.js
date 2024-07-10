import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import rootReducer from "./reducers";
import { thunk } from "redux-thunk";
  
  const middleware = [];
  middleware.push(thunk);
  
  const appReducer = (state, action) => {
    return rootReducer(state, action);
  };
  const enhancers = [applyMiddleware(...middleware)];
  const configureStore = createStore(appReducer, compose(...enhancers));
  
  export default configureStore;
  