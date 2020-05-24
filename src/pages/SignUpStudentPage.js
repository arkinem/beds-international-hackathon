import React from "react";
import PageContainer from "../components/PageContainer";
import { UniversitiesContext } from "../providers/UniversitiesProvider";

class SignUpStudentPage extends React.Component {
  state = {
    name: "",
    studentNumber: "",
    email: "",
    universityId: "",
    dietaryRequirements: "",
  };

  onSubmit = () => {};

  render() {
    const { universities, loading, error } = this.context;

    return (
      <PageContainer title={"Sign up"}>
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
        <select value={this.state.universityId || null} placeholder="uni">
          {universities.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <textarea
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
      </PageContainer>
    );
  }
}

SignUpStudentPage.contextType = UniversitiesContext;

export default SignUpStudentPage;
