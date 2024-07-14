import axios from "axios";
import { getServer } from "../utill";
import {GET_PROFILE,PROFILE_ERROR,ERRORS} from "./types"

export const getProfile = (id) => async dispatch=>{
        try {
            const res =await axios.get(`${getServer()}/api/profile/${id}`);
            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {meg: error.response.statusType},
            });
        }
}
export const createProfile = (profileData, history)=>async dispatch=>{
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
        };
        const res =axios.post(`${getServer()}/api/profile/`,profileData,config)
        dispatch({
            type: GET_PROFILE,
            payload:res.data,
        });
    } catch (err) {
        const error = err.response.data.errors;
    if (error) {
      dispatch({
        type: error,
        payload: error,
      }); 
    } else {
      dispatch({
        type: PROFILE_ERROR,
        payload: {meg: error.response.statusType},
      });
    }
    }
}