import axios from "axios";
import { GET_PRODUCTS, PORDUCT_ERRROR } from "./types";
import { getServer } from "../utill";
export const getproduct = () => async (dispatch) => {
  try {
    const res = await axios.get(`${getServer()}/api/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PORDUCT_ERRROR,
      payload: { status: err.response.status },
    });
  }
};