import React from "react";
import { Route, Redirect } from "react-router-dom";
import authentication from "../helpers/authentication";
import paths from "./paths";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authentication.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: paths.adminLogin,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
