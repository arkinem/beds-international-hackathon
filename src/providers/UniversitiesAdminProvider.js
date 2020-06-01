import React, { createContext } from "react";
import {
  fetchUniversities,
  deleteUniversity,
  confirmUniversity,
} from "../helpers/universities";

const initialState = {
  universities: [],
  loading: false,
  error: null,
};

export const UniversitiesAdminContext = createContext({
  ...initialState,
  deleteUniversity: () => null,
  confirmUniversity: () => null,
});

class UniversitiesAdminProvider extends React.Component {
  state = {
    ...initialState,
  };

  componentDidMount = async () => {
    this.fetchUniversities();
  };

  deleteUniversity = async (id) => {
    await this.fetchUniversities(async () => await deleteUniversity(id));
  };

  confirmUniversity = async (id) => {
    await this.fetchUniversities(async () => await confirmUniversity(id));
  };

  fetchUniversities = async (prefetchAction) => {
    this.setState({ loading: true });
    if (prefetchAction) await prefetchAction();
    const { error, universities } = await fetchUniversities(true);
    this.setState({ loading: false, universities, error });
  };

  render() {
    return (
      <UniversitiesAdminContext.Provider
        value={{
          ...this.state,
          deleteUniversity: this.deleteUniversity,
          confirmUniversity: this.confirmUniversity,
        }}
      >
        {this.props.children}
      </UniversitiesAdminContext.Provider>
    );
  }
}

export default UniversitiesAdminProvider;
