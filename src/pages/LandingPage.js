import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import AboutLayer from "../components/About/AboutLayer";
import ScheduleCard from "../components/Schedule/ScheduleCard";
import IntroLayer from "../components/Intro/IntroLayer";
import CalendarLayer from "../components/Scenarios/CalendarLayer";
import { colors } from "../constants/layout";
import ScenariosLayer from "../components/Scenarios/ScenariosLayer";
import ScheduleLayer from "../components/Schedule/ScheduleLayer";
import Waves from "../components/Parallax/Waves";
import Stars from "../components/Parallax/Stars";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

class LandingPage extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={4}>
        <Waves />
        <Stars />

        {/* <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer> */}

        <CalendarLayer />
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

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

        {/* <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        /> */}

        <IntroLayer />
        <AboutLayer />
        <ScenariosLayer />
        <ScheduleLayer />
      </Parallax>
    );
  }
}

export default LandingPage;
