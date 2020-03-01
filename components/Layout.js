import Head from "next/head";
import styled from "styled-components";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    font-family: "Lato";
    min-height: 100vh;
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
        href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        rel="stylesheet"
      />
    </Head>
    {props.children}
  </Container>
);

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
