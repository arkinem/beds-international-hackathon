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

const IntroCard = props => (
  <Container>
    <TitleContainer>
      <Title>Inter University Hackathon 2020</Title>
      <CountdownContainer>
        <Countdown date={Date.parse(hackathonDate)} renderer={renderer} />
      </CountdownContainer>
    </TitleContainer>
    <PhotoContainer>
      <Rectangle />
      <IntroPhoto src={"/images/intro.jpg"} alt={"intro_photo"} />
    </PhotoContainer>
  </Container>
);

export default IntroCard;

const Container = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  position: relative;
  /* flex-basis: 60%; */
  /* background: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountdownContainer = styled.div`
  position: relative;
  color: white;
  font-weight: 700;
  font-size: 48px;
`;

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* flex-basis: 40%; */
  width: 660px;
  /* background: green; */
`;

const Rectangle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  left: 0;
  width: 592px;
  height: 392px;
  border: 4px solid deeppink;
`;

const IntroPhoto = styled.img`
  /* margin-top: 40px;
  margin-left: 40px; */
  width: 600px;
  transform: translate(40px, 40px);
  /* padding-top: 60%; */
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 1px;
  max-width: 500px;
  margin-bottom: 80px;
`;
