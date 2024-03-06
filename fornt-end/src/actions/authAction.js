import axios from "axios";
import { SET_CURRENT_USER,
SUCCESSFUL_REGISTER,
FAILURE_REGISTER,
ERROR,
AUTH_ERROR,
} from "./types";
import { getServer } from "../utill";
import setAuthToken from "../utill/setAuthToken";
export const setCurrentUser = (user) => async dispatch=> {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get(`${getServer}/api/auth`);
        dispatch({
            type: SET_CURRENT_USER,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        })
    }
    return{
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const resgister =(userData)=> async (dispatch) =>{
    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    }
    try {
        const res = await axios.post(`${getServer}/api/user`,userData,config)
        dispatch({
            type: SUCCESSFUL_REGISTER,
            payload: res.data
        })
    } catch (err) {
        const error = err.response.data.errors;
        if (err) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        } else {
            dispatch({
                type: FAILURE_REGISTER,
            });
        }
    }
};