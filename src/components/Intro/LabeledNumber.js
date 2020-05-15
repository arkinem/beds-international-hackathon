import React from "react";
import styled from "styled-components";
import { device } from "../../constants/layout";

const LabeledNumber = ({ number, label }) => {
  const formattedNumber = number < 10 ? `0${number}` : number;

  return (
    <Container>
      <Number>{formattedNumber}</Number>
      <Label>{label}</Label>
    </Container>
  );
};

export default LabeledNumber;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.span`
  font-weight: 400;
  margin-bottom: 5px;

  font-size: 36px;
  @media ${device.tablet} {
    font-size: 64px;
  }
`;

const Label = styled.div`
  font-weight: 300;
  text-transform: capitalize;

  font-size: 16px;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;
