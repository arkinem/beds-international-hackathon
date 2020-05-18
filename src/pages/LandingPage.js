import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import AboutLayer from "../components/About/AboutLayer";
import ScheduleCard from "../components/Schedule/ScheduleCard";
import IntroLayer from "../components/Intro/IntroLayer";
import CalendarLayer from "../components/Scenarios/CalendarLayer";
import { colors } from "../constants/layout";
import ScenariosLayer from "../components/Scenarios/ScenariosLayer";
import ScheduleLayer from "../components/Schedule/ScheduleLayer";

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
        <ParallaxLayer
          offset={1}
          speed={1}
          // style={{ backgroundColor: "#805E73" }}
          // style={{ backgroundColor: "#D62828" }}
          // style={{ backgroundColor: colors.primary }}
        >
          <svg
            style={{ marginBottom: -4 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill={colors.primary}
              fill-opacity="1"
              d="M0,192L80,192C160,192,320,192,480,181.3C640,171,800,149,960,128C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <div
            style={{
              width: "100%",
              height: "calc(100% - 300px)",
              backgroundColor: colors.primary,
            }}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={colors.primary}
              fill-opacity="1"
              d="M0,192L80,202.7C160,213,320,235,480,240C640,245,800,235,960,213.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          // style={{ backgroundColor: "#87BCDE" }}
          style={{ backgroundColor: "#f46036" }}
          //style={{ backgroundColor: "#490B11" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#F77F00" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

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
