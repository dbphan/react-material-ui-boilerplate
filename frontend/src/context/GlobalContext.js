import React from "react";

const GlobalContext = React.createContext({});
export const GlobalProvider = GlobalContext.Provider;
export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
// export default React.createContext({
//   REACT_APP_CONFIG: REACT_APP_CONFIG,
//   test: "test"
// });
