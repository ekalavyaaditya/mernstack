import { combineReducers } from "redux";
import authReducers from "./authreducers";
import productsReducers from "./productReducers";
export default combineReducers({
    auth: authReducers,
    products: productsReducers,
});