import React from "react";
import PageContainer from "../components/PageContainer";
import { auth } from "../helpers/firebase";
import { Button } from "antd";
import AdminTabs from "../components/Admin/AdminTabs";

class AdminDashboardPage extends React.Component {
  render() {
    return (
      <PageContainer title={"Admin"} center hideLeftSection>
        <AdminTabs />
        <Button onClick={() => auth.signOut()}>logout</Button>
      </PageContainer>
    );
  }
}

export default AdminDashboardPage;
