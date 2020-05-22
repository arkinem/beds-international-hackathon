import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import DashboadPage from "../pages/DashboardPage";
import paths from "./paths";
import ScenariosPage from "../pages/ScenariosPage";
import { AnimatedSwitch } from "react-router-transition";
import styled from "styled-components";
import SignUpPage from "../pages/SignUpPage";
import SignUpStudentPage from "../pages/SignUpStudentPage";
import SignUpUniversityPage from "../pages/SignUpUniversityPage";

export default function AppRouter() {
  return (
    <Router>
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1, background: "black" }}
        className="switch-wrapper"
      >
        <Route path={paths.landing} exact>
          <LandingPage />
        </Route>
        <Route path={paths.login}>
          <LoginPage />
        </Route>
        <Route path={paths.scenario}>
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
        <PrivateRoute path={paths.dashboard}>
          <DashboadPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const Switch = styled(AnimatedSwitch)`
  .switch-wrapper {
    position: relative;
  }

  .switch-wrapper > div {
    position: absolute;
  }
`;
