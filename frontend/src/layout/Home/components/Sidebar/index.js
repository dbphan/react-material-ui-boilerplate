import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import GlobalContext from "../../../../context/GlobalContext";

const iconRegistry = {
  Home: <Home />
};
export default () => {
  const { REACT_APP_CONFIG } = React.useContext(GlobalContext);
  return (
    <List>
      {REACT_APP_CONFIG.routes
        .filter(el => el.name !== "Not Found")
        .map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{iconRegistry[item.icon]}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
    </List>
  );
};
