import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/layout";
import MakContainer from "../MakContainer";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const ScenariosLayer = () => (
  <Layer offset={2} speed={-0}>
    <MakContainer title={"Scenarios"}>
      <ContentContainer>Scenarios</ContentContainer>
    </MakContainer>
  </Layer>
);

export default ScenariosLayer;

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

// const Title = styled.h3`
//   font-size: 20px;
//   margin-bottom: 8px;
// `;

// const Text = styled.p`
//   font-size: 16px;
//   line-height: 22px;
//   letter-spacing: 0.7px;
//   margin-bottom: 14px;
// `;