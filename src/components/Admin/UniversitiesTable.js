import React from "react";
import Table from "../Table";
import { MdDeleteForever } from "react-icons/md";
import { UniversitiesAdminContext } from "../../providers/UniversitiesAdminProvider";
import styled from "styled-components";
import { colors } from "../../constants/layout";

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
          <>
            <span>No</span>
            <ConfirmButton onClick={() => this.context.confirmUniversity(id)}>
              Confirm
            </ConfirmButton>
          </>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: ({ id }) => {
        return (
          <MdDeleteForever
            size={22}
            onClick={() => this.context.deleteUniversity(id)}
          />
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

const ConfirmButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0 3px 0 12px;
  color: ${colors.secondary};

  :hover {
    color: ${colors.secondary + "AA"};
  }
`;
