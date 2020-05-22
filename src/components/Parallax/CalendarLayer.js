import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import CalendarIcon from "../icons/CalendarIcon";

const CalendarLayer = () => (
  <Container offset={1.2} speed={-0.3}>
    <Icon />
  </Container>
);

export default CalendarLayer;

const Container = styled(ParallaxLayer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Icon = styled(CalendarIcon)`
  width: 15%;
  margin-left: 60%;
`;
//margin left 70
