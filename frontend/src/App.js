import React from "react";
import GlobalState from "./context/GlobalState";
import Routes from "./Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <GlobalState>
      <MuiThemeProvider theme={theme("THD")}>
        <Routes />
      </MuiThemeProvider>
    </GlobalState>
  );
}

export default App;
