import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Tabs } from "antd";
import { colors } from "../../constants/layout";

const AdminTabs = () => {
  return (
    <Navigation>
      <Tabs.TabPane tab={"universities"} key={"1"}>
        uni
      </Tabs.TabPane>
      <Tabs.TabPane tab={"students"} key={"2"}>
        students
      </Tabs.TabPane>
    </Navigation>
  );
};

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
