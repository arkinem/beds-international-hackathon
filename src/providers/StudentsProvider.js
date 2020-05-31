import React, { createContext } from "react";
import { fetchStudents } from "../helpers/students";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

export const StudentsContext = createContext({ ...initialState });

class StudentsProvider extends React.Component {
  state = {
    ...initialState,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { error, students } = await fetchStudents();
    this.setState({ loading: false, students, error });
  };

  render() {
    return (
      <StudentsContext.Provider value={this.state}>
        {this.props.children}
      </StudentsContext.Provider>
    );
  }
}

export default StudentsProvider;
