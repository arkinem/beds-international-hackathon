import React from "react";
import Table from "../Table";
import { UniversitiesAdminContext } from "../../providers/UniversitiesAdminProvider";

class UniversitiesTable extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
    },
    {
      title: "Contact Email",
      dataIndex: "contactEmail",
      key: "contactEmail",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Is Confirmed?",
      key: "isConfirmed",
      render: ({ id, isConfirmed }) => {
        return isConfirmed ? (
          "Yes"
        ) : (
          <button onClick={() => this.context.confirmUniversity(id)}>
            Confirm
          </button>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: ({ id }) => {
        return (
          <button onClick={() => this.context.deleteUniversity(id)}>
            delete
          </button>
        );
      },
    },
  ];

  render() {
    const { universities, loading } = this.context;
    const data = universities.map((u) => ({ key: u.id, ...u }));
    return <Table loading={loading} columns={this.columns} data={data} />;
  }
}

UniversitiesTable.contextType = UniversitiesAdminContext;

export default UniversitiesTable;
