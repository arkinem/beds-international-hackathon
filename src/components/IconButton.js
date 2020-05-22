import React from "react";
import styled from "styled-components";
import Button from "./Button";

const IconButton = ({ title, onClick, className, iconComponent: Icon }) => (
  <StyledButton
    className={className}
    type={"secondary"}
    size={"large"}
    onClick={onClick}
  >
    <Content>
      {Icon && <Icon size={60} />}
      <Title>{title}</Title>
    </Content>
  </StyledButton>
);

export default IconButton;

const StyledButton = styled(Button)`
  max-width: 400px;
  --button-large-width: 100%;
  --button-large-height: 20vh;
  margin-top: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin-top: 12px;
  font-size: 22px;
`;
