import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { colors } from "../../constants/layout";

const waves = [
  {
    offset: 1,
    topPath:
      "M0,32L120,26.7C240,21,480,11,720,26.7C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
    bottomPath:
      "M0,288L120,277.3C240,267,480,245,720,250.7C960,256,1200,288,1320,304L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    color: colors.waves.first,
  },
  {
    offset: 2,
    topPath:
      "M0,32L120,42.7C240,53,480,75,720,80C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
    bottomPath:
      "M0,320L120,320C240,320,480,320,720,309.3C960,299,1200,277,1320,266.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    color: colors.waves.second,
  },
  {
    offset: 3,
    topPath:
      "M0,64L120,53.3C240,43,480,21,720,16C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
    color: colors.waves.third,
  },
];

export default () => (
  <>
    {waves.map(({ offset, topPath, bottomPath, color }, index) => (
      <ParallaxLayer offset={offset} factor={1.1} speed={1} key={index}>
        <Container>
          <svg viewBox="0 0 1440 320">
            <Path fill={color} d={topPath} />
          </svg>
          <Box color={color} />
          {bottomPath && (
            <svg viewBox="0 0 1440 320">
              <Path fill={color} d={bottomPath} />
            </svg>
          )}
        </Container>
      </ParallaxLayer>
    ))}
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Path = styled.path`
  opacity: 0.8;
`;

const Box = styled.div`
  flex: 1;
  opacity: 0.8;
  background-color: ${({ color }) => color};
`;
