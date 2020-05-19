import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import stars from "../../assets/images/stars.svg";

export default () => <Stars offset={0} speed={0} factor={4} />;

const Stars = styled(ParallaxLayer)`
  background-image: url(${stars});
  background-size: cover !important;
`;
