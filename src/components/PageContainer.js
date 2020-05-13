import React from "react";
import Background from "./Background";
import styled from "styled-components";
import Header from "./Header";

const PageContainer = ({ children }) => {
  return (
    <>
      <Background />

      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
};

export default PageContainer;

const Container = styled.div`
  padding: 64px;
`;
