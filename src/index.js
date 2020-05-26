import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import AppRouter from "./navigation/AppRouter";
import { GlobalStyle } from "./constants/layout";
import UniversitiesProvider from "./providers/UniversitiesProvider";

const app = (
  <>
    <GlobalStyle />
    <UniversitiesProvider>
      <AppRouter />
    </UniversitiesProvider>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
