import styled from "styled-components";

const AboutCard = props => (
  <Container>
    <PhotoContainer>photo</PhotoContainer>
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
  background: teal;
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 700px;
  background: orange;
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
