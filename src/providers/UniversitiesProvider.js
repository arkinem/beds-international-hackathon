import React, { createContext } from "react";
import { fetchUniversities } from "../helpers/firebase";

const initialState = {
  universities: [],
  loading: false,
  error: null,
};

export const UniversitiesContext = createContext({ ...initialState });

class UniversitiesProvider extends React.Component {
  state = {
    ...initialState,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { error, universities } = await fetchUniversities();
    this.setState({ loading: false, universities, error });
  };

  render() {
    return (
      <UniversitiesContext.Provider value={this.state}>
        {this.props.children}
      </UniversitiesContext.Provider>
    );
  }
}

export default UniversitiesProvider;
