import React from "react";
import PageContainer from "../components/PageContainer";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ScenariosPage = ({ match }) => {
  const { id } = match.params;

  console.log("id", id);
  return (
    <PageContainer title={"Scenarios"}>
      <NavigationContainer>
        <TabBar>
          <Tab>Option1</Tab>
          <Tab>Option2</Tab>
          <Tab>Option3</Tab>
        </TabBar>
        <TabContent>content</TabContent>
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

const TabBar = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  background: green;
`;

const Tab = styled.div`
  padding: 16px;
`;

const TabContent = styled.div`
  flex: 1;
  background: pink;
`;
