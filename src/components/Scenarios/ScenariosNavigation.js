import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import scenarios from "../../constants/scenarios";
import paths from "../../navigation/paths";
import { colors } from "../../constants/layout";

const ScenariosNavigation = ({ match }) => {
  const { id } = match.params;

  return (
    <Container>
      {scenarios.map(({ name, label }) => (
        <Tab active={name === id} to={`${paths.scenarios}/${name}`}>
          {label}
        </Tab>
      ))}
    </Container>
  );
};

export default withRouter(ScenariosNavigation);

const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
  /* background: green; */
`;

const Tab = styled(Link)`
  padding: 16px;
  color: ${({ active }) => (active ? colors.secondary : colors.fontLight)};
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }
`;
