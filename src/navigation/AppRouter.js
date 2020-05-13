import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import DashboadPage from "../pages/DashboardPage";
import paths from "./paths";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={paths.landing} exact>
            <LandingPage />
          </Route>
          <Route path={paths.login}>
            <LoginPage />
          </Route>
          <PrivateRoute path={paths.dashboard}>
            <DashboadPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
