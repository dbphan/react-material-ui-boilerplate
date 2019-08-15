import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import styles from "./styles";

const useStyles = makeStyles(styles);

export default props => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function handleDrawer() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar handleDrawer={handleDrawer} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Sidebar />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
