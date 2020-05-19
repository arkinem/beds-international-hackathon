import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import AboutLayer from "../components/About/AboutLayer";
import IntroLayer from "../components/Intro/IntroLayer";
import CalendarLayer from "../components/Scenarios/CalendarLayer";
import ScenariosLayer from "../components/Scenarios/ScenariosLayer";
import ScheduleLayer from "../components/Schedule/ScheduleLayer";
import Waves from "../components/Parallax/Waves";
import Stars from "../components/Parallax/Stars";
import Clouds from "../components/Parallax/Clouds";

class LandingPage extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={4}>
        <Waves />
        <Stars />
        <CalendarLayer />
        <Clouds />

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            alignSelf: "center",
            width: "80%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            pointerEvents: "none",
          }}
        >
          {/* <img src={url("earth")} style={{ width: "60%" }} /> */}
          <img src={"./assets/images/logotype.png"} style={{ width: "20%" }} />
        </ParallaxLayer>

        <IntroLayer />
        <AboutLayer />
        <ScenariosLayer />
        <ScheduleLayer />
      </Parallax>
    );
  }
}

export default LandingPage;
