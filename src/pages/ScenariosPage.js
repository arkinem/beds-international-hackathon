import React from "react";
import styled from "styled-components";
import ScenariosTabs from "../components/Scenarios/ScenariosTabs";
import PageContainer from "../components/PageContainer";
import strings from "../constants/strings";

const ScenariosPage = () => {
  return (
    <PageContainer title={strings.Scenarios}>
      <NavigationContainer>
        <ScenariosTabs />
      </NavigationContainer>
    </PageContainer>
  );
};

export default ScenariosPage;

const NavigationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
