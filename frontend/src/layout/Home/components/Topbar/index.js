import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import styles from "./styles";
import GlobalContext from "../../../../context/GlobalContext";

const useStyles = makeStyles(styles);

export default props => {
  const classes = useStyles();
  const { REACT_APP_CONFIG } = useContext(GlobalContext);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={props.handleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {REACT_APP_CONFIG.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
