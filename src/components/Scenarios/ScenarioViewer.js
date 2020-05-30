import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/layout";

const ScenarioViewer = ({ scenario }) => {
  return (
    <Container>
      {scenario.map(({ heading, content }, id) => (
        <React.Fragment key={id}>
          <Heading>{heading}</Heading>
          {Array.isArray(content) ? (
            content.map((text, textId) => <Text key={textId}>{text}</Text>)
          ) : (
            <Text>{content}</Text>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ScenarioViewer;

const Container = styled.div`
  flex: 1;
`;

const Heading = styled.h3`
  color: ${colors.primary};
  margin-bottom: 8px;
  font-size: 18px;
`;

const Text = styled.p`
  margin-bottom: 16px;
`;
