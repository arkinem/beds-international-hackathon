import React from "react";
import { Table } from "antd";
import { UniversitiesAdminContext } from "../../providers/UniversitiesAdminProvider";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
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
    dataIndex: "isConfirmed",
    key: "isConfirmed",
  },
];

class UniversitiesTable extends React.Component {
  render() {
    const { universities, loading, error } = this.context;
    const data = universities.map((u) => ({ key: u.id, ...u }));

    return <Table size={"small"} columns={columns} dataSource={data} />;
  }
}

UniversitiesTable.contextType = UniversitiesAdminContext;

export default UniversitiesTable;
