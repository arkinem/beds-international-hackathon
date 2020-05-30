import React from "react";
import styled from "styled-components";
import { colors, shadow } from "../constants/layout";

const ColorCard = ({ children, color, maxWidth }) => (
  <Container color={color} maxWidth={maxWidth}>
    {children}
  </Container>
);

export default ColorCard;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 6px;
  max-width: ${({ maxWidth }) => maxWidth || 600}px;
  min-width: 260px;
  min-height: 100px;
  width: 90%;
  margin: 30px auto;
  background-color: ${({ color }) => (color || colors.primary) + "B5"};
  box-shadow: ${shadow.strong};
`;
