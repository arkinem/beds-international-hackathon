import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import scenarios from "../../constants/scenarios";
import paths from "../../navigation/paths";

const ScenarioViewer = ({ match, history }) => {
  const { id } = match.params;
  const scenario = scenarios.find(({ name }) => name === id);

  if (!scenario) {
    if (scenarios.length > 0)
      history.push(`${paths.scenarios}/${scenarios[0].name}`);
  }

  const description = scenario ? scenario.description : "";

  return <Container>{description}</Container>;
};

export default withRouter(ScenarioViewer);

const Container = styled.div`
  flex: 1;
  /* background: pink; */
`;
