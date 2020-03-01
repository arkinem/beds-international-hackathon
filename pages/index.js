import Layout from "../components/Layout";
import styled from "styled-components";
import IntroCard from "../components/cards/IntroCard";
import ScheduleCard from "../components/cards/ScheduleCard";

export default function Index() {
  return (
    <Layout>
      <IntroCard />
      <ScheduleCard />
    </Layout>
  );
}

const Title = styled.p`
  color: red;
`;
