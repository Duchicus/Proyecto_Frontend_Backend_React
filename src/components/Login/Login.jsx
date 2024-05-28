import React, { useContext } from 'react'
import {Link, useNavigate } from "react-router-dom";
import "./Login.scss"
import Profile from "../Profile/Profile"
import { UserContext } from '../../context/UsersContext';
import { Input,notification, Button,Form } from 'antd';


const Login = () => {
  const { login } = useContext(UserContext)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values);
    login(values)
    navigate("/user")
    notification.success({
      message: 'Welcome'
    });
  };
  return (
    <>
      <Profile />
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                pattern: emailRegex,
                message: 'Please input a correct email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login