import { ERROR,
     FAILURE_REGISTER,
     AUTH_ERROR,
     SET_CURRENT_USER,
      SUCCESSFUL_REGISTER } from "../actions/types";
import { isEmpty } from "lodash";

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem("token"),
    user: {},
    errors: []
}

export default function(state = initialState, action){
    const {payload} = action
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: true,
                user: payload
            }
            case SUCCESSFUL_REGISTER:
                localStorage.set("token", payload.token)
                return{
                    ...state,
                    ...payload,
                    isAuthenticated: true
                }
            case FAILURE_REGISTER:
                localStorage.removeItem("token")
                return{
                    ...state,
                    ...payload,
                    isAuthenticated: false
                }
            case AUTH_ERROR:
            case ERROR:
                localStorage.removeItem("token")
                return{
                    ...state,
                    token: null,
                    isAuthenticated: false
                }
        default:
            return state
    }
}