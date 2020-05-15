import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { device, colors } from "../../constants/layout";

const IntroLayer = (props) => (
  <Container offset={0} speed={0.2}>
    <Title>Inter University Hackathon 2020</Title>
    <Timer />
  </Container>
);

export default IntroLayer;

const Container = styled(ParallaxLayer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${colors.fontLight};
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;

  font-size: 32px;
  line-height: 40px;
  margin-bottom: 20px;
  width: 320px;

  @media ${device.tablet} {
    font-size: 64px;
    line-height: 86px;
    margin-bottom: 60px;
    width: 550px;
  }

  transition: all 0.5s;
`;
