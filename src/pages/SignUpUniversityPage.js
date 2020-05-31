import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { registerUniversity } from "../helpers/firebase";
import PageContainer from "../components/PageContainer";
import ColorCard from "../components/ColorCard";
import UniversityForm from "../components/Forms/UniversityForm";
import SuccessOverlay from "../components/Forms/Overlays/SuccessOverlay";
import LoadingOverlay from "../components/Forms/Overlays/LoadingOverlay";
import ErrorOverlay from "../components/Forms/Overlays/ErrorOverlay";

class SignUpUniversityPage extends React.Component {
  state = {
    loading: false,
    error: null,
    success: false,
  };

  onSubmit = async ({ contactEmail, contactName, contactNumber, name }) => {
    this.setState({ loading: true });
    const { success, error } = await registerUniversity(
      name,
      contactName,
      contactEmail,
      contactNumber
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

export default withRouter(SignUpUniversityPage);

const Form = styled(UniversityForm)`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: none;
`;
