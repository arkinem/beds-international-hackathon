import React from "react";
import styled from "styled-components";
import { Input, Select, Form as AntForm } from "antd";
import Button from "../Button";
import Form from "./Form";
import { UniversitiesContext } from "../../providers/UniversitiesProvider";

class StudentForm extends React.Component {
  onUniversityChange = (value) => {
    console.log(value, "select value");
  };

  render() {
    const { onFinish, setRef, className } = this.props;
    const { universities, loading } = this.context;

    return (
      <Form onFinish={onFinish} setRef={setRef} className={className}>
        <AntForm.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input allowClear maxLength={120} />
        </AntForm.Item>
        <AntForm.Item
          label="Student Number"
          name="studentNumber"
          rules={[
            {
              required: true,
              message: "Please input your Student ID",
            },
          ]}
        >
          <Input allowClear maxLength={20} />
        </AntForm.Item>

        <AntForm.Item
          label="Email"
          name="email"
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
          label="University"
          name="universityId"
          rules={[
            {
              required: true,
              message: "Please select your university",
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onUniversityChange}
            allowClear
          >
            {loading
              ? "Loading"
              : universities.map(({ id, name }) => (
                  <Select.Option value={id} key={id}>
                    {name}
                  </Select.Option>
                ))}
          </Select>
        </AntForm.Item>

        <AntForm.Item
          label="Dietary Requirements"
          name="dietaryRequirements"
          rules={[{ required: false }]}
        >
          <Input allowClear maxLength={600} />
        </AntForm.Item>

        <CenteredItem>
          <Button
            htmlType={"submit"}
            style={{ margin: "auto" }}
            color={"secondary"}
          >
            Submit
          </Button>
        </CenteredItem>
      </Form>
    );
  }
}

StudentForm.contextType = UniversitiesContext;

export default StudentForm;

const CenteredItem = styled(AntForm.Item)`
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
`;
