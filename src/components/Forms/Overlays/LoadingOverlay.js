import React from "react";
import styled from "styled-components";
import Spinner from "../../Spinner";

const LoadingOverlay = () => (
  <Container>
    <Spinner />
  </Container>
);

export default LoadingOverlay;

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
`;
