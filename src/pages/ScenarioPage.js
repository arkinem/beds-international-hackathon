import React from "react";
import { withRouter } from "react-router-dom";
import paths from "../navigation/paths";

const ScenarioPage = (props) => {
  return (
    <div>
      <h3>Scenario</h3>
      <button onClick={() => props.history.push(paths.landing)}>back</button>
    </div>
  );
};

export default withRouter(ScenarioPage);
