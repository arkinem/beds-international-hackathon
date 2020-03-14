import styled from "styled-components";
import InfoBox from "./InfoBox";
import colors from "../../helpers/colors";

const AboutCard = props => (
  <Container>
    <PhotoContainer>
      <FirstPhoto />
      <SecondPhoto />
    </PhotoContainer>
    <InfoContainer>
      <Title>About event</Title>
      <Text>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        gravida nunc, id semper diam. Aenean at lorem metus. Donec tempor
        bibendum turpis non aliquam. Curabitur non lacinia tellus. Curabitur
        varius, enim ut ullamcorper consequat, nisl sapien imperdiet ex, et
        molestie orci eros at ante. Proin iaculis sed lectus nec malesuada.
      </Text>
      <Subtitle>University of Bedfordshire </Subtitle>
      <BoxContainer>
        <InfoBox value={"2"} label={"Days event"} />
        <InfoBox value={"10+"} label={"Countries"} />
      </BoxContainer>
    </InfoContainer>
  </Container>
);

export default AboutCard;

const Container = styled.div`
  display: flex;
`;

const PhotoContainer = styled.div`
  flex: 1;
  height: 700px;
  position: relative;
  /* background: teal; */
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 700px;
  /* background: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  max-width: 420px;
  margin-bottom: 32px;
`;

const Subtitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstPhoto = styled.div`
  position: absolute;
  height: 250px;
  width: 300px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 3px solid ${colors.red};
  transform: translate(80px, 120px);
`;

const SecondPhoto = styled(FirstPhoto)`
  height: 400px;
  width: 280px;
  border: 3px solid teal;
  transform: translate(-40px, -30px);
`;
