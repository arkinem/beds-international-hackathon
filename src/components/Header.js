import React from "react";
import styled from "styled-components";
import BcsLogo from "./icons/BcsLogo";
import { useHistory } from "react-router-dom";
import authentication from "../helpers/authentication";
import paths from "../navigation/paths";

const Header = (props) => {
  const { isAuthenticated } = authentication;
  let history = useHistory();
  console.log(history);

  return (
    <Container>
      <BcsContainer>
        <BcsLogo />
        <BcsName>STUDENT CHAPTER</BcsName>
      </BcsContainer>
      {!isAuthenticated ? (
        <Button onClick={() => history.push(paths.dashboard)}>Sign up</Button>
      ) : (
        <Button
          onClick={() => {
            authentication.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
      )}
    </Container>
  );
};
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

const Button = styled.div`
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
