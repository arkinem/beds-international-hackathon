import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { Tabs } from "antd";
import scenarios from "../../constants/scenarios";
import { colors } from "../../constants/layout";
import { getScenarioUrl } from "../../helpers/scenarios";
import ScenarioViewer from "./ScenarioViewer";

const ScenariosTabs = ({ match, history }) => {
  const { id } = match.params;
  const scenario = scenarios.find(({ name }) => name === id);

  if (!scenario) {
    if (scenarios.length > 0) history.push(getScenarioUrl(scenarios[0].name));
  }

  const description = scenario ? scenario.description : "";

  const onScenarioChange = (id) => {
    history.push(getScenarioUrl(id));
  };

  return (
    <Navigation activeKey={id} onChange={onScenarioChange}>
      {scenarios.map(({ name, label }) => (
        <Tabs.TabPane tab={label} active={name === id} key={name}>
          <ScenarioViewer scenario={description} />
        </Tabs.TabPane>
      ))}
    </Navigation>
  );
};

export default withRouter(ScenariosTabs);

const Navigation = styled(Tabs)`
  color: ${colors.fontLight};
  width: 90%;
  max-width: 700px;
  min-width: 320px;
  .ant-tabs {
  }

  .ant-tabs-nav-scroll {
    display: flex;
    justify-content: center;
  }

  .ant-tabs-tab:hover {
    color: ${colors.fontLight + "CC"};
  }

  .ant-tabs-tab-active {
    color: ${colors.secondary};
  }

  .ant-tabs-tab-active:hover {
    color: ${colors.secondary + "CC"};
  }

  .ant-tabs-ink-bar {
    background-color: ${colors.secondary};
  }
`;

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
