import React, { createContext } from "react";
import { fetchUniversities } from "../helpers/universities";

const initialState = {
  universities: [],
  loading: false,
  error: null,
};

export const UniversitiesAdminContext = createContext({ ...initialState });

class UniversitiesAdminProvider extends React.Component {
  state = {
    ...initialState,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { error, universities } = await fetchUniversities(true);
    console.log(error, universities);
    this.setState({ loading: false, universities, error });
  };

  render() {
    return (
      <UniversitiesAdminContext.Provider value={this.state}>
        {this.props.children}
      </UniversitiesAdminContext.Provider>
    );
  }
}

export default UniversitiesAdminProvider;
