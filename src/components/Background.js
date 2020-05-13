import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

export default () => (
  <Container
    params={{
      particles: {
        number: {
          value: 8,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          speed: 1,
          out_mode: "out",
        },
        shape: {
          type: ["images"],
          images: [
            {
              src: "/assets/images/circle.png",
              height: 50,
              width: 53,
            },
            {
              src: "/assets/images/square.png",
              height: 50,
              width: 53,
            },
            {
              src: "/assets/images/triangle.png",
              height: 50,
              width: 53,
            },
          ],
        },
        color: {
          value: "#CCC",
        },
        size: {
          value: 15,
          random: false,
          anim: {
            enable: true,
            speed: 4,
            size_min: 10,
            sync: false,
          },
        },
      },
      retina_detect: false,
    }}
  />
);

const Container = styled(Particles)`
  background-color: #191e24;
  background-image: linear-gradient(
    to right bottom,
    #191e24,
    #20262d,
    #20262d,
    #272e36,
    #353e49
  );
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;
