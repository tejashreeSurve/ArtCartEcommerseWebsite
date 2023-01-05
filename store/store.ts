import { configureStore } from "@reduxjs/toolkit";
import { beforLoginReducers } from "../reducers/beforLoginReducer.reducers";
// import rootReducer from "../reducers/rootReducer.reducers";
import { compose } from "redux";

// const composeEnhancer =
//   (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;
const store = configureStore({
  reducer: {
    beforLoginReducers: beforLoginReducers,
  },
  // enhancers: composeEnhancer,
});

export default store;
