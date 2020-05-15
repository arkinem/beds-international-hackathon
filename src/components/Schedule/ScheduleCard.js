import React from "react";
import styled from "styled-components";
import { firstDay, secondDay } from "../../constants/eventSchedule";
import ScheduleItem from "./ScheduleItem";

const ScheduleCard = (props) => (
  <svg width="350" height="250">
    <Container x="0" y="0" rx="10" ry="10" width="350" height="250" />
    {/* <TopBar x="0" y="0" rx="10" ry="10" width="150" height="30" /> */}
    <TopBar
      d={`M0,30
       v-20
       a10,10 0 0 1 10,-10
       h330
       a10,10 0 0 1 10,10
       v20
       z
    `}
    />
    <Dot cx="15" cy="15" r="8" color={"#ff483f"} />
    <Dot cx="35" cy="15" r="8" color={"#ecbb38"} />
    <Dot cx="55" cy="15" r="8" color={"#36d3a8"} />
  </svg>
  // <Container>
  //   <Title>Hackaton schedule</Title>
  //   <Subtitle>
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
  //     gravida nunc, id semper diam. Aenean at lorem metus. Donec tempor bibendum
  //     turpis non aliquam.
  //   </Subtitle>

  //   <DateHeading>Saturday, 28 March 2020</DateHeading>

  //   {firstDay.map(({ time, title, description }) => (
  //     <ScheduleItem time={time} title={title} description={description} />
  //   ))}

  //   <DateHeading>Sunday, 29 March 2020</DateHeading>

  //   {secondDay.map(({ time, title, description }) => (
  //     <ScheduleItem time={time} title={title} description={description} />
  //   ))}
  // </Container>
);

export default ScheduleCard;

const Container = styled.rect`
  fill: white;
`;

const TopBar = styled.path`
  fill: #d8d8d8;
  stroke: none;
`;

const Dot = styled.circle`
  fill: ${({ color }) => color};
  stroke: none;
`;

// const Container = styled.div`
//   flex: 1;
//   margin-bottom: 40px;
//   display: flex;
//   flex-direction: column;
// `;

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
