import React from "react";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import { colors } from "../constants/layout";

const buttonSize = {
  small: "small",
  medium: "medium",
  large: "large",
};

const buttonColor = {
  primary: "primary",
  secondary: "primary",
};

const Button = ({
  children,
  title,
  size,
  onClick,
  className,
  color = buttonColor.primary,
}) => {
  const colorScheme =
    color === buttonColor.primary
      ? colors.button.primary
      : colors.button.secondary;

  return (
    <StyledButton
      className={className}
      type={"secondary"}
      size={size || buttonSize.medium}
      onPress={onClick}
      colorScheme={colorScheme}
    >
      {children || title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(AwesomeButton)`
  --button-secondary-color: ${({ colorScheme }) => colorScheme.main};
  --button-secondary-color-dark: ${({ colorScheme }) => colorScheme.accent};
  --button-secondary-color-light: ${({ colorScheme }) => colorScheme.accent};
  --button-secondary-color-hover: ${({ colorScheme }) => colorScheme.hover};
  --button-secondary-color-active: ${({ colorScheme }) => colorScheme.active};
  --button-secondary-border: 2px solid
    ${({ colorScheme }) => colorScheme.border};

  --button-large-width: 200px;
  --button-large-height: 60px;

  --button-default-font-size: ${({ size }) =>
    size === buttonSize.small ? 14 : size === buttonSize.medium ? 16 : 20}px;
`;
