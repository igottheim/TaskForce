// import { configureStore } from "@reduxjs/toolkit";
// import roomsReducer from "./roomSlice";
// import usersReducer from "./userSlice";

// export default configureStore({
//   reducer: {
//     user:usersReducer,
//     room:roomsReducer
//   },
// });

import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;