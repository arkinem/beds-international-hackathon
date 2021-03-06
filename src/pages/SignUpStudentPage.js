import React from "react";
import styled from "styled-components";
import { registerStudent } from "../helpers/firebase";
import PageContainer from "../components/PageContainer";
import ColorCard from "../components/ColorCard";
import StudentForm from "../components/Forms/StudentForm";
import LoadingOverlay from "../components/Forms/LoadingOverlay";
import ErrorOverlay from "../components/Forms/ErrorOverlay";
import SuccessOverlay from "../components/Forms/SuccessOverlay";

class SignUpStudentPage extends React.Component {
  state = {
    loading: false,
    error: null,
    success: false,
  };

  onSubmit = async ({
    name,
    studentNumber,
    email,
    universityId,
    dietaryRequirements,
  }) => {
    this.setState({ loading: true });
    console.log("on submitr");
    const { success, error } = await registerStudent(
      name,
      studentNumber,
      email,
      universityId,
      dietaryRequirements
    );

    this.setState({ loading: false, success, error });
  };

  renderOverlay = () => {
    const { loading, error, success } = this.state;

    switch (true) {
      case loading:
        return <LoadingOverlay />;
      case error:
        return <ErrorOverlay />;
      case success:
        return <SuccessOverlay />;
      default:
        return;
    }
  };

  render() {
    const { loading, error, success } = this.state;

    return (
      <PageContainer title={"Sign up"}>
        <ColorCard maxWidth={400}>
          {this.renderOverlay()}
          <Form
            visible={!loading && !error && !success}
            onFinish={this.onSubmit}
            setRef={(ref) => (this.form = ref)}
          />
        </ColorCard>
      </PageContainer>
    );
  }
}

export default SignUpStudentPage;

const Form = styled(StudentForm)`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: none;
`;
