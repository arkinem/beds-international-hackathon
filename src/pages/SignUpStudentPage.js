import React from "react";
import PageContainer from "../components/PageContainer";
import { UniversitiesContext } from "../providers/UniversitiesProvider";
import { registerStudent } from "../helpers/firebase";
import ColorCard from "../components/ColorCard";
import styled from "styled-components";
import { Button } from "antd";

const initialState = {
  name: "",
  studentNumber: "",
  email: "",
  universityId: null,
  dietaryRequirements: "",
};

class SignUpStudentPage extends React.Component {
  state = { ...initialState };

  onSubmit = async () => {
    const {
      name,
      studentNumber,
      email,
      universityId,
      dietaryRequirements,
    } = this.state;
    console.log(
      "ON sbumibet",
      name,
      studentNumber,
      email,
      universityId,
      name && studentNumber && email && universityId
    );
    if (name && studentNumber && email && universityId) {
      console.log("after if");
      await registerStudent(
        name,
        studentNumber,
        email,
        universityId,
        dietaryRequirements
      );

      console.log("registered");
      this.setState({ ...initialState });
    }
  };

  render() {
    const { universities, loading, error } = this.context;
    console.log("uni firebase error", error);
    return (
      <PageContainer title={"Sign up"}>
        <ColorCard maxWidth={400}>
          <Form>
            <input
              type="text"
              placeholder="full name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              placeholder="student number"
              value={this.state.studentNumber}
              onChange={(e) => this.setState({ studentNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <select
              value={this.state.universityId}
              placeholder="uni"
              onChange={(e) => this.setState({ universityId: e.target.value })}
            >
              <option disabled selected value>
                -- select an option --
              </option>
              {universities.map(({ name, id }) => (
                <option value={id}>{name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Dietary requirements"
              value={this.state.dietaryRequirements}
              onChange={(e) =>
                this.setState({ dietaryRequirements: e.target.value })
              }
            />
            <button disabled={loading} onClick={this.onSubmit}>
              Register
            </button>
            <Button type="primary">Button</Button>
          </Form>
        </ColorCard>
      </PageContainer>
    );
  }
}

SignUpStudentPage.contextType = UniversitiesContext;

export default SignUpStudentPage;

const Form = styled.div`
  display: grid;
  grid-gap: 20px;
`;
