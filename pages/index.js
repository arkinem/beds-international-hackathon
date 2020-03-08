import styled from "styled-components";
import Layout from "../components/general/Layout";
import IntroCard from "../components/Intro/IntroCard";
import ScheduleCard from "../components/Schedule/ScheduleCard";
import AboutCard from "../components/About/AboutCard";

export default function Index() {
  return (
    <Layout>
      <IntroCard />
      <AboutCard />
      <ScheduleCard />
    </Layout>
  );
}

const Title = styled.p`
  color: red;
`;
