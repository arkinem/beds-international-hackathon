import React from "react";
import Table from "../Table";
import { StudentsContext } from "../../providers/StudentsProvider";

class StudentsTable extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Student Number",
      dataIndex: "studentNumber",
      key: "studentNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "University",
      dataIndex: "universityId",
      key: "universityId",
      render: (universityId) => {
        const university = this.props.universities.find(
          (u) => u.id === universityId
        );
        return university ? university.name : "-";
      },
    },
    {
      title: "Dietary Requirements",
      dataIndex: "dietaryRequirements",
      key: "dietaryRequirements",
    },
  ];

  render() {
    const { students, loading, error } = this.context;
    const data = students.map((s) => ({ key: s.id, ...s }));

    return <Table loading={loading} columns={this.columns} data={data} />;
  }
}

StudentsTable.contextType = StudentsContext;

export default StudentsTable;
