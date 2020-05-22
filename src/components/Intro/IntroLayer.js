import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { deviceSize, device, colors } from "../../constants/layout";
import strings from "../../constants/strings";
import Logo from "./Logo";
import Timer from "./Timer";
import Button from "../Button";
import paths from "../../navigation/paths";

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
    const color = windowWidth < deviceSize.tablet ? "primary" : "secondary";

    return (
      <Container offset={0} speed={0.2}>
        <Logo />
        <Title>{strings.eventName}</Title>
        <Timer />
        <SignUpButton
          size={buttonSize}
          title={"Sign up"}
          color={color}
          onClick={() => this.props.history.push(paths.signUp)}
        />
      </Container>
    );
  }
}

export default withRouter(IntroLayer);

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

  transition: all 0.5s;
`;
