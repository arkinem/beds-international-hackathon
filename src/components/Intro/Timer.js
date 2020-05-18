import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import LabeledNumber from "./LabeledNumber";
import { device } from "../../constants/layout";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <Container>
      <LabeledNumber label={"days"} number={days} />
      <Separator children=":" />
      <LabeledNumber label={"hours"} number={hours} />
      <Separator children=":" />
      <LabeledNumber label={"mins"} number={minutes} />
      <Separator children=":" />
      <LabeledNumber label={"secs"} number={seconds} />
    </Container>
  );
};

const hackathonDate = "2020-10-24T10:00:00Z";

export default () => (
  <Countdown date={Date.parse(hackathonDate)} renderer={renderer} />
);

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  @media ${device.tablet} {
    width: 550px;
  }

  transition: all 0.5s;
`;

const Separator = styled.span`
  font-weight: 400;

  font-size: 32px;
  margin: -25px 11px 0 11px;
  @media ${device.tablet} {
    font-size: 64px;
    margin: -20px 26px 0 26px;
  }
`;
