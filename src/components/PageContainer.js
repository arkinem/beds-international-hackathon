import React from "react";
import Background from "./Background";
import styled from "styled-components";
import Header from "./Header";

const PageContainer = ({ children }) => {
  return (
    <Container>
      <Background />

      <Content>
        <Header />
        {children}
      </Content>
    </Container>
  );
};

export default PageContainer;

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  padding: 64px;
`;
