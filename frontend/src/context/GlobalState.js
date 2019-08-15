import React from "react";
import { GlobalProvider } from "./GlobalContext";
import { REACT_APP_CONFIG } from "../config";

export default props => {
  return (
    <GlobalProvider value={{ REACT_APP_CONFIG }}>
      {props.children}
    </GlobalProvider>
  );
};
