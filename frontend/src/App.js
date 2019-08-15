import React from "react";
import GlobalState from "./context/GlobalState";
import Routes from "./Routes";

function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
