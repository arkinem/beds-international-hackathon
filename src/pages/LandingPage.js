import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import AboutLayer from "../components/About/AboutLayer";
import IntroLayer from "../components/Intro/IntroLayer";
import ScenariosLayer from "../components/Scenarios/ScenariosLayer";
import ScheduleLayer from "../components/Schedule/ScheduleLayer";
import Waves from "../components/Parallax/Waves";
import Stars from "../components/Parallax/Stars";
import Clouds from "../components/Parallax/Clouds";

class LandingPage extends React.Component {
  render() {
    return (
      <Parallax pages={4}>
        <Waves />
        <Stars />
        <Clouds />
        <IntroLayer />
        <AboutLayer />
        <ScenariosLayer />
        <ScheduleLayer />
      </Parallax>
    );
  }
}

export default LandingPage;
