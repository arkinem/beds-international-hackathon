import React from "react";
import PageContainer from "../components/PageContainer";
import { auth } from "../helpers/firebase";
import { Button } from "antd";

class AdminDashboardPage extends React.Component {
  render() {
    return (
      <PageContainer title={"Admin"} hideLeftSection>
        <Button onClick={() => auth.signOut()}>logout</Button>
      </PageContainer>
    );
  }
}

export default AdminDashboardPage;
