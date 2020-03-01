import Layout from "../components/Layout";
import styled from "styled-components";
import IntroCard from "../components/cards/IntroCard";
import ScheduleCard from "../components/cards/ScheduleCard";
import AboutCard from "../components/cards/AboutCard";

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
