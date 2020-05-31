import React from "react";
import styled from "styled-components";
import { Form } from "antd";
import { colors } from "../../constants/layout";

export default ({ children, onFinish, className, setRef }) => {
  return (
    <StyledForm
      ref={setRef}
      onFinish={onFinish}
      size={"middle"}
      className={className}
    >
      {children}
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  .ant-form-item {
    flex-direction: column;
  }
  .ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-label > label {
    color: ${colors.fontLight};
    font-size: 16px;
  }

  .ant-input {
    :focus {
      border-color: ${colors.secondary};
    }

    :hover {
      border-color: ${colors.secondary};
    }
  }

  .ant-input-affix-wrapper {
    :focus {
      border-color: ${colors.secondary};
    }
    :hover {
      border-color: ${colors.secondary};
    }
    :active {
      border-color: ${colors.secondary};
    }
  }

  .ant-input-affix-wrapper-focused {
    border-color: ${colors.secondary};
  }

  .ant-form-item-required {
    ::before {
      color: ${colors.secondary} !important;
    }
  }

  .ant-form-item-explain {
    color: ${colors.secondary};
  }
`;
