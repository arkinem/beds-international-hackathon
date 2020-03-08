import styled from "styled-components";
import Timer from "../general/Timer";
import { device } from "../../helpers/devices";

const IntroCard = props => (
  <Container>
    <TitleContainer>
      <Title>Inter University Hackathon 2020</Title>
      <Timer />
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    justify-content: space-between;
    max-width: 1400px;
    height: 600px;
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  /* flex-basis: 60%; */
  /* background: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 64px;
  line-height: 86px;
  letter-spacing: 1px;
  width: 550px;
  margin-bottom: 80px;
`;
