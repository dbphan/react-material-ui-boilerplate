import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import GlobalContext from "./context/GlobalContext";

const componentRegistry = {
  Home: Home,
  NotFound: NotFound
};

function MakeRoute(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact || false}
      component={componentRegistry[route.component]}
    />
  );
}

export default () => {
  const { REACT_APP_CONFIG } = React.useContext(GlobalContext);
  return (
    <Router>
      <Switch>
        {REACT_APP_CONFIG.routes.map((route, index) => (
          <MakeRoute key={index} {...route} />
        ))}
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};
