import React from "react";
import styled from "styled-components";
import { Input, Form as AntForm } from "antd";
import Button from "../Button";
import Form from "./Form";

const UniversityForm = ({ onFinish, setRef, className }) => {
  return (
    <Form onFinish={onFinish} setRef={setRef} className={className}>
      <AntForm.Item
        label="University Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input University name",
          },
        ]}
      >
        <Input allowClear maxLength={80} />
      </AntForm.Item>
      <AntForm.Item
        label="Contact Person Name"
        name="contactName"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        <Input allowClear maxLength={60} />
      </AntForm.Item>

      <AntForm.Item
        label="Contact Person Email"
        name="contactEmail"
        rules={[
          {
            required: true,
            message: "You need to provide your email",
          },
          {
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email format",
          },
        ]}
      >
        <Input allowClear maxLength={320} />
      </AntForm.Item>

      <AntForm.Item
        label="Contact Person Mobile Number"
        name="contactNumber"
        rules={[
          {
            required: false,
            message: "Please input your number!",
          },
        ]}
      >
        <Input allowClear maxLength={14} />
      </AntForm.Item>

      <SubmitButton htmlType={"submit"} color={"secondary"}>
        Submit
      </SubmitButton>
    </Form>
  );
};

export default UniversityForm;

const SubmitButton = styled(Button)`
  margin-top: 8px;
  align-self: center;
`;
