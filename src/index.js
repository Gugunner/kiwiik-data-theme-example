import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "./theme";
import "typeface-modak";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App muiTheme={muiTheme} />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
