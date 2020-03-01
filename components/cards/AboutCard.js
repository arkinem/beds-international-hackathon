import styled from "styled-components";

const AboutCard = props => (
  <Container>
    <ContentContainer>AboutCard</ContentContainer>
  </Container>
);

export default AboutCard;

const Container = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 400px;
  height: 250px;
  background: teal;
`;
