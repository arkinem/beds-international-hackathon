import React from "react";
import styled from "styled-components";
import stars from "../assets/images/stars.svg";
import { withRouter } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { colors, device } from "../constants/layout";
import paths from "../navigation/paths";

const PageContainer = ({ title, children, history }) => {
  return (
    <Container>
      <Heading>
        <BackButton onClick={() => history.push(paths.landing)}>
          <IoMdClose color={colors.fontLight} size={40} />
        </BackButton>
        {title && <Title>{title}</Title>}
      </Heading>
      {children}
    </Container>
  );
};

export default withRouter(PageContainer);

const Container = styled.div`
  position: relative;
  background-image: url(${stars});
  background-size: cover !important;
  display: flex;
  flex-direction: column;

  padding: 22px;
  min-height: 100vh;
  @media ${device.tablet} {
    padding: 64px;
    min-height: 100vh;
  }
`;

const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  color: ${colors.fontLight};
  line-height: 42px;
  font-size: 32px;
  font-weight: 700;
`;

const BackButton = styled.div`
  position: absolute;
  left: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  :hover {
    background: rgba(255, 255, 255, 0.06);
  }

  :active {
    background: rgba(255, 255, 255, 0.12);
  }

  transition: all 0.5s;
`;
