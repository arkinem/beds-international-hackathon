import styled from "styled-components";
import Countdown from "react-countdown";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <>
      {days} : {hours} : {minutes} : {seconds}
    </>
  );
};

const hackathonDate = "2020-04-15T10:00:00Z";

const Timer = props => (
  <Container>
    <Countdown date={Date.parse(hackathonDate)} renderer={renderer} />
  </Container>
);

export default Timer;

const Container = styled.div`
  position: relative;
  color: white;
  font-weight: 700;
  font-size: 48px;
`;
