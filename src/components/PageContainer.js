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
  min-height: calc(100vh - 44px);
  max-height: calc(100vh - 44px);
  height: calc(100vh - 44px);
  @media ${device.tablet} {
    padding: 64px;
    min-height: calc(100vh - 128px);
    max-height: calc(100vh - 128px);
    height: calc(100vh - 128px);
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

  :hover {
    background: rgba(0, 0, 0, 0.99);
  }
`;
