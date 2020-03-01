import styled from "styled-components";

const IntroCard = props => (
  <Container>
    <TitleContainer>
      <Title>Inter University BCS Student Chapter Hackathon 2020</Title>
    </TitleContainer>
    <PhotoContainer>Photo</PhotoContainer>
  </Container>
);

export default IntroCard;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  flex-basis: 60%;
  background: orange;
  display: flex;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  flex-basis: 40%;
  background: deeppink;
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 36px;
`;
