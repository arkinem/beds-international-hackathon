import Layout from "../components/MyLayout";
import styled from "styled-components";

export default function Index() {
  return (
    <Layout>
      <Title>Hackathon 2020</Title>
    </Layout>
  );
}

const Title = styled.p`
  color: red;
`;
