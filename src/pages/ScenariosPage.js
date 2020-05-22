import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ScenariosNavigation from "../components/Scenarios/ScenariosNavigation";
import ScenarioViewer from "../components/Scenarios/ScenarioViewer";
import PageContainer from "../components/PageContainer";
import strings from "../constants/strings";

const ScenariosPage = ({ match }) => {
  return (
    <PageContainer title={strings.Scenarios}>
      <NavigationContainer>
        <ScenariosNavigation />
        <ScenarioViewer />
      </NavigationContainer>
    </PageContainer>
  );
};

export default withRouter(ScenariosPage);

const NavigationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
