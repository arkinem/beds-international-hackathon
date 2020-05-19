import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { deviceSize, device, colors } from "../../constants/layout";
import Logo from "./Logo";
import Button from "../Button";

class IntroLayer extends React.Component {
  state = { windowWidth: window.innerWidth };

  componentDidMount = () =>
    window.addEventListener("resize", this.updateDimensions);

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.updateDimensions);

  updateDimensions = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    const { windowWidth } = this.state;
    const buttonSize = windowWidth < deviceSize.tablet ? "medium" : "large";
    console.log(windowWidth, deviceSize.tablet, buttonSize);
    return (
      <Container offset={0} speed={0.2}>
        <Logo />
        <Title>Inter University Hackathon 2020</Title>
        <Timer />
        <SignUpButton size={buttonSize} title={"Sign up"} />
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

const SignUpButton = styled(Button)`
  position: absolute;
  bottom: 15%;

  @media ${device.tablet} {
    position: unset;
    margin-top: 10vh;
  }
`;
