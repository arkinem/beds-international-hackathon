import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import paths from "../../navigation/paths";
import strings from "../../constants/strings";
import { colors } from "../../constants/layout";
import Button from "../Button";

const ScenariosLayer = ({ history }) => {
  return (
    <Layer offset={2} speed={-0}>
      <Bubble>
        <Heading>{strings.Scenarios}</Heading>
        <Button color={"primary"} onClick={() => history.push(paths.scenarios)}>
          {strings.View_all}
        </Button>
      </Bubble>
    </Layer>
  );
};

export default withRouter(ScenariosLayer);

const Layer = styled(ParallaxLayer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.scenariosCircle};
  height: 400px;
  width: 400px;

  clip-path: circle(42%);
  transition: clip-path 1s;

  :hover {
    clip-path: circle(50%);
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700px;
  /* margin-bottom: 12px; */
  margin-bottom: 36px;
`;
