import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./navigation/AppRouter";
import { GlobalStyle } from "./constants/layout";

const app = (
  <>
    <GlobalStyle />
    <AppRouter />
  </>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
