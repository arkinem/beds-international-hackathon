import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/layout";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Button from "../Button";
import paths from "../../navigation/paths";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const ScenariosLayer = ({ history }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Layer
      offset={2}
      speed={-0}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Circle style={{ transform: props.xy.interpolate(trans1) }}>
        <Heading>Scenarios</Heading>
        <Button color={"primary"} onClick={() => history.push(paths.scenarios)}>
          View all
        </Button>
      </Circle>
    </Layer>
  );
};

export default withRouter(ScenariosLayer);

const Layer = styled(ParallaxLayer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700px;
  /* margin-bottom: 12px; */
  margin-bottom: 36px;
`;

const Circle = styled(animated.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.scenariosCircle};
  opacity: 0.8;
`;
