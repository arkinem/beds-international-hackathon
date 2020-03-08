import styled from "styled-components";

const ScheduleCard = props => (
  <Container>
    <ContentContainer>ScheduleCard</ContentContainer>
  </Container>
);

export default ScheduleCard;

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
