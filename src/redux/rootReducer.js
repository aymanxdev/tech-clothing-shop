import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

import { UserReducer } from "./user/userReducer";

export default combineReducers({
  user: UserReducer,
  cart: cartReducer,
});
