import { Fragment } from "react";
import Home from "./pages/Home";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Home />
    </Fragment>
  );
}

export default App;
