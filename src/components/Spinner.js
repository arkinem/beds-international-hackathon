import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { colors } from "../constants/layout";

export default ({ size, delay }) => (
  <Spinner size={size || "large"} delay={delay || 700} />
);

const Spinner = styled(Spin)`
  line-height: 1;

  .ant-spin-dot-item {
    background-color: ${colors.secondary};
  }
`;
