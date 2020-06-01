import React from "react";
import styled from "styled-components";
import { Table } from "antd";
import { colors } from "../constants/layout";

export default ({ loading, size, columns, data }) => {
  return (
    <StyledTable
      loading={loading}
      size={size || "small"}
      columns={columns}
      dataSource={data}
    />
  );
};

const StyledTable = styled(Table)`
  .ant-table {
    background-color: ${colors.secondary + "55"};
    color: ${colors.fontLight};
    overflow-y: auto;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${colors.secondary + "75"};
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td {
    background: ${colors.secondary + "75"};
  }

  .ant-empty {
    color: ${colors.fontLight};
  }

  .ant-spin-dot-item {
    background-color: ${colors.secondary};
  }

  .ant-spin-blur::after {
    opacity: 0.1;
  }

  .ant-spin-container::after {
    background: black;
  }

  .ant-table-thead > tr > th {
    background: ${colors.secondary};
    color: ${colors.fontLight};
    border-color: ${colors.secondary + "75"};
  }

  .ant-table-tbody > tr > td {
    border-color: ${colors.secondary + "75"};
  }

  .ant-pagination-item a {
    color: ${colors.fontLight};

    :hover {
      color: ${colors.secondary};
    }
  }

  .ant-pagination-item-active {
    border-color: ${colors.secondary};
    background: ${colors.secondary + "75"};

    a {
      color: ${colors.fontLight};

      :hover {
        color: ${colors.fontLight};
      }
    }
  }

  .ant-pagination-prev {
    color: ${colors.fontLight};

    :focus {
      color: ${colors.fontLight};
    }
  }

  .ant-pagination-prev:focus .ant-pagination-item-link,
  .ant-pagination-prev:focus,
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-next {
    color: ${colors.fontLight};
  }

  .ant-pagination-item-link {
    color: ${colors.fontLight};

    :hover {
      color: ${colors.secondary};
    }
  }

  .ant-pagination-disabled a,
  .ant-pagination-disabled:hover a,
  .ant-pagination-disabled:focus a,
  .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus .ant-pagination-item-link {
    color: ${colors.fontLight};
  }
`;
