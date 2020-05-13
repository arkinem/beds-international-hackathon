import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers/style";

const InfoBox = ({ value, label }) => (
  <Container>
    <Value>{value}</Value>
    <Label>{label}</Label>
  </Container>
);

export default InfoBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 120px;
  background-color: ${colors.blueGrey};
  margin-right: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Value = styled.div`
  font-size: 42px;
  padding: 6px;
`;

const Label = styled.div`
  font-size: 14px;
`;
