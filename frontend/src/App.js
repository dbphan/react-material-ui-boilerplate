import React from "react";
import GlobalState from "./context/GlobalState";
import Home from "./views/Home";

function App() {
  return (
    <GlobalState>
      <Home />
    </GlobalState>
  );
}

export default App;
