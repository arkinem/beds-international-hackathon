import React from "react";
import styled from "styled-components";
import { colors, device } from "../../constants/layout";

const ScenarioItem = ({ title }) => (
  <Container>
    <Circle />
    <Content>
      <Title>{title}</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        gravida nunc, id semper diam. Aenean at lorem metus. Donec tempor
        bibendum turpis non aliquam.
      </Text>
    </Content>
  </Container>
);

export default ScenarioItem;

const Container = styled.div`
  position: relative;
  height: 300px;
  margin: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-direction: column;
  justify-content: flex-end;

  padding-top: 50px;
  @media ${device.tablet} {
    padding-top: 20px;
    flex: 0.3;
  }
`;

const Content = styled.div`
  height: 180px;
  padding: 24px;
  padding-top: 70px;
  background: ${colors.blueGrey};
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  top: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 12px;
`;

/**
 * TODO
 * ADD ... to overflow text;
 */

const Text = styled.p`
  font-size: 18px;
`;
