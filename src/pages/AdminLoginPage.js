import React from "react";
import PageContainer from "../components/PageContainer";
import ColorCard from "../components/ColorCard";
import LoginForm from "../components/Forms/LoginForm";
import { auth } from "../helpers/firebase";

class AdminLoginPage extends React.Component {
  onFormFinish = async ({ email, password }) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <PageContainer title={"Admin"} hideLeftSection>
        <ColorCard maxWidth={400}>
          <LoginForm
            setRef={(ref) => (this.form = ref)}
            onFinish={this.onFormFinish}
          />
        </ColorCard>
      </PageContainer>
    );
  }
}

export default AdminLoginPage;
