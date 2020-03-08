import styled from "styled-components";
import BcsLogo from "../icons/BcsLogo";

const Header = props => (
  <Container>
    <BcsContainer>
      <BcsLogo />
      <BcsName>STUDENT CHAPTER</BcsName>
    </BcsContainer>
    <RegisterButton>Sign up</RegisterButton>
  </Container>
);

export default Header;

const Container = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BcsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const BcsName = styled.p`
  margin-left: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
`;

const RegisterButton = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 12px;
  color: white;
  border-radius: 8px;
  border: 2px solid white;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;
