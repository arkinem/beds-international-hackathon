import React from "react";
import { Route, Redirect } from "react-router-dom";
import paths from "./paths";
import { UserContext } from "../providers/UserProvider";

class PrivateRoute extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    const user = this.context;

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
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
  }
}

PrivateRoute.contextType = UserContext;

export default PrivateRoute;
