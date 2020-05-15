import React from "react";
import styled from "styled-components";
import { colors } from "../constants/layout";

const Button = ({ title }) => <Container>{title}</Container>;

export default Button;

const Container = styled.div`
  height: 50px;
  padding: 0 22px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.red};
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
