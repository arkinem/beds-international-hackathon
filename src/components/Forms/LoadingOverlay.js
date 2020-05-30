import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { colors } from "../../constants/layout";

const LoadingOverlay = () => (
  <Container>
    <Spinner size={"large"} delay={700} />
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

const Spinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: ${colors.secondary};
  }
`;
