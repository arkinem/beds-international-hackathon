import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import PageContainer from "../components/PageContainer";
import ColorCard from "../components/ColorCard";
import UniversityForm from "../components/Forms/UniversityForm";
import { registerUniversity } from "../helpers/firebase";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";
import paths from "../navigation/paths";
import { colors } from "../constants/layout";

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

    // await this.form.resetFields();
    this.setState({ loading: false, success, error });
  };

  render() {
    const { loading, error, success } = this.state;

    return (
      <PageContainer title={"Sign up"}>
        <ColorCard maxWidth={400}>
          {loading ? (
            <MessageOverlay>
              <Spinner size={"large"} spinning={loading} delay={700} />
            </MessageOverlay>
          ) : error ? (
            <MessageOverlay>Something went wrong</MessageOverlay>
          ) : (
            success && (
              <MessageOverlay>
                <p>All Done!</p>
                <p>Administrator will now verify your request.</p>
                <Button
                  color={"secondary"}
                  onClick={() => this.props.history.push(paths.landing)}
                >
                  Home page
                </Button>
              </MessageOverlay>
            )
          )}
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

const MessageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: ${colors.secondary};
  }
`;
