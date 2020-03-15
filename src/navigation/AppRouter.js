import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import DashboadPage from "../pages/DashboardPage";
import authentication from "../helpers/authentication";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <DashboadPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthButton() {
  let history = useHistory();

  return authentication.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          authentication.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
