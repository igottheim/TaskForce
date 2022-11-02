// import { configureStore } from "@reduxjs/toolkit";
// import roomsReducer from "./roomSlice";
// import usersReducer from "./userSlice";

// export default configureStore({
//   reducer: {
//     user:usersReducer,
//     room:roomsReducer
//   },
// });

import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,applyMiddleware(thunkMiddleware)
);

export default store;