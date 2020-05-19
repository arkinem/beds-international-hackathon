import React from "react";
import { withRouter } from "react-router-dom";

const ScenarioPage = (props) => {
  return (
    <div>
      <h3>Scenario</h3>
      <button onClick={() => props.history.push("/")}>back</button>
    </div>
  );
};

export default withRouter(ScenarioPage);
