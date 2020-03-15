import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./navigation/AppRouter";
import { GlobalStyle } from "./helpers/style";
import Background from "./components/Background";

const app = (
  <>
    <GlobalStyle />
    <Background />
    <AppRouter />
  </>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
