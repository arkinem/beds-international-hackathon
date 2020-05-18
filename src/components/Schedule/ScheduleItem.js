import React from "react";
import styled from "styled-components";
import { colors, device } from "../../constants/layout";

const ScheduleItem = ({ time, name, details }) => (
  <Container>
    <Heading>
      <Time>{time}</Time>
      <Text>{name}</Text>
    </Heading>
    {details && <SecondaryText>{details}</SecondaryText>}
  </Container>
);

export default ScheduleItem;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Heading = styled.div`
  display: flex;

  /* flex-direction: column;
  margin-bottom: 6px;
  @media ${device.mobileL} { */
    flex-direction: row;
    /* margin-bottom: 0;
  } */

  transition: all 0.5s;
`;

const Time = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.7px;
  margin-bottom: 4px;
  margin-right: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: ${colors.background};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SecondaryText = styled.p`
  font-size: 14px;
  opacity: 0.8;
  letter-spacing: 0.7px;

  display: none;
  @media ${device.mobileL} {
    display: block;
    padding-left: 60px;
  }
`;
