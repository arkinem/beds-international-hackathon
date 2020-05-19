import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import cloud from "../../assets/images/cloud.svg";

const cloudLayout = [
  {
    offset: 1,
    speed: 0.8,
    opacity: 0.1,
    elements: [
      { width: "20%", marginLeft: "55%" },
      { width: "10%", marginLeft: "15%" },
    ],
  },
  {
    offset: 1.75,
    speed: 0.5,
    opacity: 0.1,
    elements: [
      { width: "20%", marginLeft: "70%" },
      { width: "20%", marginLeft: "40%" },
    ],
  },
  {
    offset: 1,
    speed: 0.2,
    opacity: 0.2,
    elements: [
      { width: "10%", marginLeft: "10%" },
      { width: "20%", marginLeft: "75%" },
    ],
  },
  {
    offset: 1.6,
    speed: -0.1,
    opacity: 0.4,
    elements: [
      { width: "20%", marginLeft: "60%" },
      { width: "25%", marginLeft: "30%" },
      { width: "10%", marginLeft: "80%" },
    ],
  },
  {
    offset: 2.6,
    speed: 0.4,
    opacity: 0.6,
    elements: [
      { width: "20%", marginLeft: "5%" },
      { width: "15%", marginLeft: "75%" },
    ],
  },
];

export default () => (
  <>
    {cloudLayout.map(({ offset, speed, opacity, elements }, layerIndex) => (
      <Layer key={layerIndex} offset={offset} speed={speed} opacity={opacity}>
        {elements.map(({ width, marginLeft }, elementKey) => (
          <Image
            src={cloud}
            key={elementKey}
            width={width}
            marginLeft={marginLeft}
          />
        ))}
      </Layer>
    ))}
  </>
);

const Layer = styled(ParallaxLayer)`
  opacity: ${({ opacity }) => opacity};
`;

const Image = styled.img`
  display: block;
  width: ${({ width }) => width};
  margin-left: ${({ marginLeft }) => marginLeft};
`;
