import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./navigation/AppRouter";
import { GlobalStyle } from "./constants/layout";

serviceWorker.unregister();
console.log("Env test: ", process.env.REACT_APP_TEST);
const app = (
  <>
    <GlobalStyle />
    <AppRouter />
  </>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
