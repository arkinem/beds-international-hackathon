import Head from "next/head";
import styled from "styled-components";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    font-family: "Ubuntu";
    color: white;
    min-height: 100vh;
    padding: 64px;
    background-image: linear-gradient(
      to right bottom,
      #191e24,
      #20262d,
      #20262d,
      #272e36,
      #353e49
    );
  }
`;

const Layout = props => (
  <Container>
    <GlobalStyle whiteColor />
    <Head>
      <title>Hackathon</title>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
  </Container>
);

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
