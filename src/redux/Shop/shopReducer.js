import shopData from "../../pages/shop/collections.data";
import { shopActionTypes } from "./shop.types";
const initialState = {
  shopData,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
