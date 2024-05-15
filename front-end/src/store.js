import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
let store;

try {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
} catch (error) {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default store;
// try {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     const enhancer = composeEnhancers(applyMiddleware(...middleware));
//     store = createStore(rootReducer, initialState, enhancer);
// } catch (error) {
//     console.error("Error creating Redux store:", error);
//     store = createStore(rootReducer, initialState);
// }