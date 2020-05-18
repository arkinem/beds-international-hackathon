import React from "react";
import styled, { keyframes } from "styled-components";
import Timer from "./Timer";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { device, colors } from "../../constants/layout";
import { Spring } from "react-spring/renderprops";
import Logo from "./Logo";

class IntroLayer extends React.Component {
  state = {
    comeBack: false,
  };

  render() {
    const { comeBack } = this.state;
    console.log(
      comeBack,
      "from",
      comeBack ? 0 : 650,
      "to",
      comeBack ? -650 : 0
    );
    return (
      <Container offset={0} speed={0.2}>
        <Logo />
        <Title>Inter University Hackathon 2020</Title>
        <Timer />
      </Container>
    );
  }
}

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

const dash = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 100;
  }
  `;

const Svg = styled.svg`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 5s linear alternate infinite;
`;

const Path = styled.path`
  stroke-width: 5px;
  stroke: ${colors.primary};
  fill: none;
`;
