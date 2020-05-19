import React from "react";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import { colors, font } from "../constants/layout";

const buttonSize = {
  small: "small",
  medium: "medium",
  large: "large",
};

const Button = ({ title, size, className }) => (
  <StyledButton
    className={className}
    type={"secondary"}
    size={size || buttonSize.medium}
    font
  >
    {title}
  </StyledButton>
);

export default Button;

const StyledButton = styled(AwesomeButton)`
  --button-default-font-size: ${({ size }) =>
    size === buttonSize.small ? 14 : size === buttonSize.medium ? 16 : 20}px;
  --button-secondary-color: ${colors.button.main};
  --button-secondary-color-dark: ${colors.button.dark};
  --button-secondary-color-light: ${colors.button.light};
  --button-secondary-color-hover: ${colors.button.hover};
  --button-secondary-color-active: ${colors.button.active};
  --button-secondary-border: 2px solid ${colors.button.border};
  --button-large-width: 200px;
  --button-large-height: 60px;
`;
