import React from "react";
import PageContainer from "../components/PageContainer";
import ColorCard from "../components/ColorCard";

class AdminLoginPage extends React.Component {
  render() {
    return (
      <PageContainer title={"Admin"} hideLeftSection>
        <ColorCard maxWidth={400}>Login</ColorCard>
      </PageContainer>
    );
  }
}

export default AdminLoginPage;
