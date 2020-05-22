import React from "react";
import styled from "styled-components";
import { Spring, animated, interpolate } from "react-spring/renderprops";

export default class ScenarioBubble extends React.Component {
  state = {
    expanded: false,
  };

  expand = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

  render() {
    const { expanded } = this.state;
    console.log("expanded", expanded);
    return (
      <Spring
        native
        from={{ fill: "black" }}
        to={{
          backgroundColor: expanded ? "#A29B7F" : "#F3FFBD",
          width: expanded ? "100%" : "150px",
          height: expanded ? "100%" : "150px",
          borderRadius: expanded ? "5%" : "100%",
          top: expanded ? 0 : 50,
          bottom: expanded ? 0 : 50,
          left: expanded ? 0 : 50,
          right: expanded ? 0 : 50,
          position: expanded ? "absolute" : "relative",
          // scale: toggle ? 0.3 : 0.7,
        }}
        toggle={this.expand}
        onRest={() => console.log("done")}
      >
        {(style) => (
          <animated.div onClick={this.expand} style={style}>
            hehe
          </animated.div>
        )}
      </Spring>
    );
  }
}

const Bubble = styled(animated.div)``;
