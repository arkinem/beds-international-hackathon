import React from "react";
import PageContainer from "../components/PageContainer";
import IntroCard from "../components/Intro/IntroCard";
import AboutCard from "../components/About/AboutCard";
import ScenariosCard from "../components/Scenarios/ScenariosCard";
import ScheduleCard from "../components/Schedule/ScheduleCard";

const LandingPage = () => {
  return (
    <PageContainer>
      <h3>Public</h3>
      <IntroCard />
      <AboutCard />
      <ScenariosCard />
      <ScheduleCard />
    </PageContainer>
  );
};

export default LandingPage;
