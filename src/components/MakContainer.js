import React from "react";
import styled from "styled-components";
import ReactResizeDetector from "react-resize-detector";
import { colors } from "../constants/layout";

const contentHorizontalPadding = 20;
const windowTopBarHeight = 30;
const cornerRadius = 10;

const MakContainer = ({ title, children }) => (
  <Container>
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <WindowSvg>
          <WindowContainer
            x="0"
            y="0"
            rx={cornerRadius}
            ry={cornerRadius}
            width={"100%"}
          />
          <WindowTopBar
            d={`M0,${windowTopBarHeight}
       v-${windowTopBarHeight - cornerRadius}
       a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},-${cornerRadius}
       h${width - cornerRadius * 2 + contentHorizontalPadding * 2}
       a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${cornerRadius}
       v${windowTopBarHeight - cornerRadius}
       z
    `}
          />

          <Dot cx="15" cy="15" r="7" color={"#ff483f"} />
          <Dot cx="35" cy="15" r="7" color={"#ecbb38"} />
          <Dot cx="55" cy="15" r="7" color={"#36d3a8"} />
          {title && (
            <Text x="50%" y="21">
              {title}
            </Text>
          )}
        </WindowSvg>
      )}
    </ReactResizeDetector>
    {children}
  </Container>
);

export default MakContainer;

const Container = styled.div`
  position: relative;
  padding: 50px ${contentHorizontalPadding}px 20px ${contentHorizontalPadding}px;
  max-width: 500px;
  min-width: 280px;
  width: 80%;
  min-height: 100px;
  border-radius: ${cornerRadius}px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const WindowSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const WindowContainer = styled.rect`
  width: 100%;
  height: 100%;
  fill: white;
`;

const WindowTopBar = styled.path`
  fill: #d8d8d8;
  stroke: none;
`;

const Dot = styled.circle`
  fill: ${({ color }) => color};
  stroke: none;
`;

const Text = styled.text`
  fill: ${colors.fontDark};
  text-anchor: middle;
  margin: 0;
`;
