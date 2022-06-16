import { CHANGE_AUTH } from "../actions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };

    default:
      return state;
  }
};
