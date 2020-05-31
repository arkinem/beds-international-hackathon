import React from "react";
import styled from "styled-components";
import { Input, Form as AntForm } from "antd";
import Button from "../Button";
import Form from "./Form";
import Spinner from "../Spinner";

const LoginForm = ({ onFinish, setRef, className, loading }) => {
  return (
    <Form onFinish={onFinish} setRef={setRef} className={className}>
      <AntForm.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input administrator email",
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
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
        ]}
      >
        <Input.Password />
      </AntForm.Item>

      <LoginButton htmlType={"submit"} color={"secondary"}>
        {loading ? <Spinner delay={0} size={"medium"} /> : "Login"}
      </LoginButton>
    </Form>
  );
};

export default LoginForm;

const LoginButton = styled(Button)`
  margin-top: 8px;
  align-self: center;
`;
