import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import IconButton from "../components/IconButton";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
import paths from "../navigation/paths";

const SignUpPage = (props) => {
  return (
    <PageContainer title={"Sign up"}>
      <ButtonGroup>
        <IconButton
          title={"Student"}
          iconComponent={FaUserGraduate}
          onClick={() => props.history.push(paths.signUpStudent)}
        />
        <IconButton
          style={{ marginTop: 30 }}
          title={"University"}
          iconComponent={FaUniversity}
          onClick={() => props.history.push(paths.signUpUniversity)}
        />
      </ButtonGroup>
    </PageContainer>
  );
};

export default withRouter(SignUpPage);

const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;
