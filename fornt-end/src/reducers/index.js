import { combineReducers } from "redux";
import authReducers from "./authreducers";
export default combineReducers({
    auth: authReducers,
});