import styled from "styled-components";
import Countdown from "react-countdown";
import LabeledNumber from "./LabeledNumber";

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

const hackathonDate = "2020-04-15T10:00:00Z";

export default () => (
  <Countdown date={Date.parse(hackathonDate)} renderer={renderer} />
);

const Container = styled.div`
  position: relative;
  width: 550px;
  display: flex;
  align-items: center;
`;

const Separator = styled.span`
  font-weight: 400;
  font-size: 64px;
  margin: -20px 26px 0 26px;
`;
