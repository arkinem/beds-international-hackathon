import React from "react";
import { Route, Redirect } from "react-router-dom";
import paths from "./paths";
import { UserContext } from "../providers/UserProvider";

class PublicRoute extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    const user = this.context;

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            <Redirect
              to={{
                pathname: paths.adminDashboard,
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }
}

PublicRoute.contextType = UserContext;

export default PublicRoute;
