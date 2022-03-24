import { makeStyles } from "@material-ui/core";
import React from "react";
import "./slideMenu.css"
const usestyles = makeStyles((theme) => ({
  slideMenu: {
    position: "fixed",
    minHeight: "100vh",
    width: "300px",
    top: 0,
    left: 0,
    backgroundColor: "#1d223e",
    ['@media (max-width:767px)']: { // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
}));
const SlideMenu = () => {
  const classes = usestyles();
  return <div className={classes.slideMenu}></div>;
};

export default SlideMenu;
