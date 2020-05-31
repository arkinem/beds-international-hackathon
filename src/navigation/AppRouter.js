import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { AnimatedSwitch } from "react-router-transition";
// import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";
import paths from "./paths";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import ScenariosPage from "../pages/ScenariosPage";
import SignUpPage from "../pages/SignUpPage";
import SignUpStudentPage from "../pages/SignUpStudentPage";
import SignUpUniversityPage from "../pages/SignUpUniversityPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch
      // atEnter={{ opacity: 0 }}
      // atLeave={{ opacity: 0, background: "pink" }}
      // atActive={{ opacity: 1 }}
      // className="switch-wrapper"
      >
        <Route path={paths.landing} exact>
          <LandingPage />
        </Route>
        <Route path={paths.login}>
          <LoginPage />
        </Route>
        <Route path={`${paths.scenarios}/:id?`}>
          <ScenariosPage />
        </Route>
        <Route path={paths.signUp} exact>
          <SignUpPage />
        </Route>
        <Route path={paths.signUpStudent}>
          <SignUpStudentPage />
        </Route>
        <Route path={paths.signUpUniversity}>
          <SignUpUniversityPage />
        </Route>
        <Route path={paths.adminLogin} exact>
          <AdminLoginPage />
        </Route>
        <PrivateRoute path={paths.adminDashboard}>
          <AdminDashboardPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

// const Switch = styled(AnimatedSwitch)`
//   .switch-wrapper {
//     position: relative;
//   }

//   .switch-wrapper > div {
//     position: absolute;
//   }
// `;
