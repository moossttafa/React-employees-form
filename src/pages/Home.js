import React, { Fragment } from "react";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SlideMenu from "../components/SlideMenu";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
    ['@media (max-width:767px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: "0px"
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <SlideMenu />
      <div className={classes.appMain}>
        <Navbar />
        <Header />
        <FormContainer />
      </div>
    </Fragment>
  );
};

export default Home;
