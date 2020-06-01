import React from "react";
import styled from "styled-components";
import stars from "../assets/images/stars.svg";
import { withRouter } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { colors, device } from "../constants/layout";
import paths from "../navigation/paths";

const PageContainer = ({
  title,
  children,
  history,
  hideLeftSection,
  center,
}) => {
  return (
    <Container center={center}>
      <Heading>
        {!hideLeftSection && (
          <LeftSection onClick={() => history.push(paths.landing)}>
            <CloseButton>
              <IoMdClose color={colors.fontLight} size={40} />
            </CloseButton>
            <Label>Close</Label>
          </LeftSection>
        )}
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
  ${({ center }) => center && `align-items: center;`}

  padding: 22px;
  min-height: 100vh;
  @media ${device.tablet} {
    padding: 64px;
    min-height: 100vh;
  }
`;

const Heading = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
  max-width: 700px;
  align-self: center;
`;

const Title = styled.h1`
  color: ${colors.fontLight};
  line-height: 42px;
  font-size: 32px;
  font-weight: 700;
`;

const LeftSection = styled.div`
  position: absolute;
  left: 0;
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

  ${LeftSection}:hover & {
    background: rgba(255, 255, 255, 0.06);
  }

  ${LeftSection}:active & {
    background: rgba(255, 255, 255, 0.12);
  }

  transition: all 0.5s;
`;

const Label = styled.p`
  margin: 0 8px;
  font-size: 18px;
  font-weight: 500;

  ${LeftSection}:hover & {
    opacity: 0.9;
  }

  ${LeftSection}:active & {
    opacity: 0.8;
  }

  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
