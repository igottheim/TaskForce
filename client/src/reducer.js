import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import roomsReducer from "./roomSlice";

export default combineReducers({
    user:usersReducer,
    room:roomsReducer
});