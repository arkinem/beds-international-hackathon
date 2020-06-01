import React from "react";
import PageContainer from "../components/PageContainer";
import AdminTabs from "../components/Admin/AdminTabs";
import LogoutButton from "../components/Admin/LogoutButton";

class AdminDashboardPage extends React.Component {
  render() {
    return (
      <PageContainer
        title={"Admin"}
        center
        hideLeftSection
        rightSection={<LogoutButton />}
      >
        <AdminTabs />
      </PageContainer>
    );
  }
}

export default AdminDashboardPage;
