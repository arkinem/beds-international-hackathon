import styled from "styled-components";

const IntroCard = props => (
  <Container>
    <TitleContainer>
      <Title>Inter University Hackathon 2020</Title>
    </TitleContainer>
    <PhotoContainer>Photo</PhotoContainer>
  </Container>
);

export default IntroCard;

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  flex-basis: 60%;
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  flex-basis: 40%;
  background: deeppink;
`;

const Rectangle = styled.div``;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 1px;
  max-width: 500px;
`;
