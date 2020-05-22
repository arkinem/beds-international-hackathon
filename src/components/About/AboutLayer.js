import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/layout";
import MakContainer from "../MakContainer";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const AboutLayer = () => (
  <Layer offset={1} speed={0.1}>
    <MakContainer title={"About"}>
      <ContentContainer>
        <Title>Event</Title>
        <Text>
          International Hackathon is a 24-hour web based event, students of all
          skill levels will come together to share ideas, and create new and
          awesome projects! You don't have to be a professional or experienced,
          fresh starters are also welcomed, just be lovely, passionate and
          interested in tech. Looking forward to seeing what you build!
        </Text>
        <Title>Organisers</Title>
        <OrganisersContainer>
          <Image src="assets/images/uob_logo.png" />
          <Image src="assets/images/bcs_logo.png" />
        </OrganisersContainer>
      </ContentContainer>
    </MakContainer>
  </Layer>
);

export default AboutLayer;

const Layer = styled(ParallaxLayer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.fontDark};
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.7px;
  margin-bottom: 14px;
`;

const OrganisersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Image = styled.img`
  position: relative;
  height: 80px;
`;
