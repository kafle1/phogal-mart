import React, { useReducer } from "react";
import { Account } from "../../appwrite/account.appwrite";
import { CHANGE_AUTH } from "../actions";
import { authReducer } from "../reducer/authReducer";
import AppContext from "./appContext";

const AppState = (props) => {
  
  
  const initialState = {
    isLoggedIn: Account.isLoggedIn(),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Dispatch methods
  const changeAuth = () => {
    dispatch({
      type: CHANGE_AUTH,
    });
  };

  return (
    <AppContext.Provider value={{ isLoggedIn: state.isLoggedIn, changeAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
