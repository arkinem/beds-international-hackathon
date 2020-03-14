import styled from "styled-components";
import { firstDay, secondDay } from "../../helpers/eventSchedule";
import ScheduleItem from "./ScheduleItem";

const ScheduleCard = props => (
  <Container>
    <Title>Hackaton schedule</Title>
    <Subtitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
      gravida nunc, id semper diam. Aenean at lorem metus. Donec tempor bibendum
      turpis non aliquam.
    </Subtitle>

    <DateHeading>Saturday, 28 March 2020</DateHeading>

    {firstDay.map(({ time, title, description }) => (
      <ScheduleItem time={time} title={title} description={description} />
    ))}

    <DateHeading>Sunday, 29 March 2020</DateHeading>

    {secondDay.map(({ time, title, description }) => (
      <ScheduleItem time={time} title={title} description={description} />
    ))}
  </Container>
);

export default ScheduleCard;

const Container = styled.div`
  flex: 1;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled(Title)`
  margin-bottom: 32px;
  font-size: 16px;
  max-width: 400px;
  align-self: center;
`;

const DateHeading = styled.h3`
  font-size: 24px;
  padding: 16px;
  align-self: center;
`;
