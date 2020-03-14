import styled from "styled-components";
import Button from "../general/Button";
import ScenarioItem from "./ScenarioItem";
import { device } from "../../helpers/devices";

const ScenariosCard = props => (
  <Container>
    <HeaderContainer>
      <Title>Scenarios</Title>
      <Button title={"See all scenarios"} />
    </HeaderContainer>
    <CardsContainer>
      <Row>
        <ScenarioItem title={"First scenario"} />
        <ScenarioItem title={"Second scenario"} />
        <ScenarioItem title={"Third scenario"} />
      </Row>
      <Row>
        <ScenarioItem title={"Fourth scenario"} />
        <ScenarioItem title={"Fifth  scenario"} />
        <ScenarioItem title={"Sixth  scenario"} />
      </Row>
    </CardsContainer>
  </Container>
);

export default ScenariosCard;

const Container = styled.div`
  flex: 1;
  /* height: 700px; */
  /* min-height: 700px; */
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  /* background: pink; */
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
