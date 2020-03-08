import styled from "styled-components";
import Timer from "./Timer";
import { device } from "../../helpers/devices";
import colors from "../../helpers/colors";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 660px;
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
  border: 4px solid ${colors.red};
`;

const IntroPhoto = styled.img`
  width: 600px;
  transform: translate(40px, 40px);
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
