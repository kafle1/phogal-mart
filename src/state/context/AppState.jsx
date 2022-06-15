import React from "react";
import AppContext from "./appContext";

const state = {
  data: "something",
};
const AppState = (props) => {
  return (
    <AppContext.Provider value={{ state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
