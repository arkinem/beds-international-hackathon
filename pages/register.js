import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/general/Layout";
import colors from "../helpers/colors";
import { device } from "../helpers/devices";

export default function Register() {
  return (
    <Layout>
      <Container>
        <OptionCard>
          <Link href="/joingroup">
            <a>Join group</a>
          </Link>
        </OptionCard>
        <OptionCard>Register new group</OptionCard>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;

  flex-direction: column;
  @media ${device.tablet} {
    height: 90vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const OptionCard = styled.div`
  height: 350px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  background-color: ${colors.blueGrey};
`;
