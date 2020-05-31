import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Tabs } from "antd";
import StudentsProvider from "../../providers/StudentsProvider";
import UniversitiesAdminProvider from "../../providers/UniversitiesAdminProvider";
import UniversitiesTable from "./UniversitiesTable";
import StudentsTable from "./StudentsTable";
import { UniversitiesContext } from "../../providers/UniversitiesProvider";
import { colors } from "../../constants/layout";

class AdminTabs extends React.Component {
  render() {
    const { universities } = this.context;
    return (
      <Navigation>
        <Tabs.TabPane tab={"universities"} key={"1"}>
          <UniversitiesAdminProvider>
            <UniversitiesTable />
          </UniversitiesAdminProvider>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"students"} key={"2"}>
          <StudentsProvider>
            <StudentsTable universities={universities} />
          </StudentsProvider>
        </Tabs.TabPane>
      </Navigation>
    );
  }
}

AdminTabs.contextType = UniversitiesContext;

export default withRouter(AdminTabs);

const Navigation = styled(Tabs)`
  color: ${colors.fontLight};
  width: 100%;
  max-width: 700px;
  min-width: 320px;

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
