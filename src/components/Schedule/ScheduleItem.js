import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers/style";

const ScheduleItem = ({ time, title, description }) => (
  <Container>
    <TimeContainer>{time}</TimeContainer>
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  </Container>
);

export default ScheduleItem;

const Container = styled.div`
  padding: 12px;
  margin: 12px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex: 1;
  background: ${colors.blueGrey};
  display: flex;
  flex-direction: row;
  max-width: 550px;
  align-self: center;
`;

const TimeContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;
