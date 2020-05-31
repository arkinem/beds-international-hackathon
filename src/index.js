import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import AppRouter from "./navigation/AppRouter";
import { GlobalStyle } from "./constants/layout";
import UniversitiesProvider from "./providers/UniversitiesProvider";
import UserProvider from "./providers/UserProvider";

const app = (
  <>
    <GlobalStyle />
    <UserProvider>
      <UniversitiesProvider>
        <AppRouter />
      </UniversitiesProvider>
    </UserProvider>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
