import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { colors, device } from "../../constants/layout";
import { auth } from "../../helpers/firebase";

const LogoutButton = () => (
  <Container onClick={() => auth.signOut()}>
    <Label>Logout</Label>
    <CloseButton>
      <IoMdLogOut color={colors.fontLight} size={28} />
    </CloseButton>
  </Container>
);

export default withRouter(LogoutButton);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CloseButton = styled.div`
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  ${Container}:hover & {
    background: rgba(255, 255, 255, 0.06);
  }

  ${Container}:active & {
    background: rgba(255, 255, 255, 0.12);
  }

  transition: all 0.5s;
`;

const Label = styled.p`
  margin: 0 8px;
  font-size: 18px;
  font-weight: 500;

  ${Container}:hover & {
    opacity: 0.9;
  }

  ${Container}:active & {
    opacity: 0.8;
  }

  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
