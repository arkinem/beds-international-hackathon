import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { colors } from "../../constants/layout";
import schedule from "../../constants/schedule";
import strings from "../../constants/strings";
import MakContainer from "../MakContainer";
import ScheduleItem from "./ScheduleItem";

const dateFormat = "dddd, DD MMMM YYYY";

const ScheduleLayer = () => (
  <Layer offset={3} speed={0.1}>
    <MakContainer title={strings.Schedule}>
      <ContentContainer>
        <Title>{schedule.startDate.format(dateFormat)}</Title>
        {schedule.saturday.map((item) => (
          <ScheduleItem {...item} />
        ))}
        <Title marginTop={8}>{schedule.endDate.format(dateFormat)}</Title>
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
