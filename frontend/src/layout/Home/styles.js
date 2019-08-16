import React from "react";
import pixelWidth from "string-pixel-width";
import GlobalContext from "../../context/GlobalContext";
// const drawerWidth = 215;
function getDrawerWidth(configs, fontFamily, fontSize) {
  {
    return (
      configs.routes
        .filter(el => el.name !== "Not Found")
        .reduce((acc, cur) => {
          const width = Math.floor(
            pixelWidth(cur.name, {
              font: fontFamily,
              size: fontSize
            })
          );
          if (width > acc) {
            console.log("if", cur.name, width);
            return width;
          } else {
            console.log("else", cur.name, acc);
            return acc;
          }
        }, 0) + 78
    );
  }
}
export default theme => {
  const { REACT_APP_CONFIG } = React.useContext(GlobalContext);
  const drawerWidth = getDrawerWidth(
    REACT_APP_CONFIG,
    theme.typography.fontFamily,
    theme.typography.fontSize
  );
  console.log(drawerWidth);
  return {
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    toolbar: theme.mixins.toolbar
  };
};
