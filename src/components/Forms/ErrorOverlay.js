import React from "react";
import styled from "styled-components";
import { FaExclamationCircle } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import Button from "../Button";
import paths from "../../navigation/paths";
import { colors } from "../../constants/layout";
import { fadeIn } from "../../constants/keyframes";

const ErrorOverlay = ({ history }) => (
  <Container>
    <Icon size={"40%"} />
    <Heading>Error!</Heading>
    <Text>Something went wrong.</Text>
    <Button color={"secondary"} onClick={() => history.push(paths.landing)}>
      Home page
    </Button>
  </Container>
);

export default withRouter(ErrorOverlay);

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s;
`;

const Icon = styled(FaExclamationCircle)`
  fill: ${colors.secondary};
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  color: ${colors.fontLight};
  font-size: 20px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  margin-bottom: 30px;
`;
