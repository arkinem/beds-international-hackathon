import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import authentication from "../helpers/authentication";
import PageContainer from "../components/PageContainer";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    authentication.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <PageContainer>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </PageContainer>
  );
}

export default LoginPage;
