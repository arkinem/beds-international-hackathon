import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/layout";
import MakContainer from "../MakContainer";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import ScheduleItem from "./ScheduleItem";
import schedule from "../../constants/schedule";

const ScheduleLayer = () => (
  <Layer offset={3} speed={0.1}>
    <MakContainer title={"Schedule"}>
      <ContentContainer>
        <Title>Saturday, 24.10.2020</Title>
        {schedule.saturday.map((item) => (
          <ScheduleItem {...item} />
        ))}
        <Title marginTop={8}>Sunday, 25 October 2020</Title>
        {schedule.sunday.map((item) => (
          <ScheduleItem {...item} />
        ))}
        {/* All as Google Hangouts call! Links in emails for registered. */}
      </ContentContainer>
    </MakContainer>
  </Layer>
);

export default ScheduleLayer;

const Layer = styled(ParallaxLayer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.fontDark};
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: ${({ marginTop }) => marginTop}px;
`;
