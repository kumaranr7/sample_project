import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Space,
  Form,
  Input,
  Button,
  Card,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Create() {
    const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post("http://localhost:5000/cars/", {
        make: values.make,
        model: values.model,
        year: values.year,
      })
      .then((res) => {
        console.log("Success:", res);
        navigate('/home');
      })
      .catch((res) => {
        console.log("Failed", res);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
      <Row>
        <Col offset={8} xs={24} sm={12} xl={6}>
          <Card hoverable title="Create Car details">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Make"
                name="make"
                rules={[{ required: true, message: "Please input Car Make!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: "Please input Car Model!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Year"
                name="year"
                rules={[{ required: true, message: "Please input Car year!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
  );
}
