import { GET_PRODUCTS, PORDUCT_ERRROR } from "../actions/types";
const initialState = {
  products: [],
  product: {},
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case PORDUCT_ERRROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}