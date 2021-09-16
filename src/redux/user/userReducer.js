import { UserActionTypes } from "./userTypes";

const initialState = {
  currentUser: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
