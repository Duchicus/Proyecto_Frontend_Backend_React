import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UsersContext';
import { Input, notification, Button, Form } from 'antd';
import "./Login.scss"

const Login = () => {
  const { login } = useContext(UserContext)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const navigate = useNavigate()
  
  const onFinish = (values) => {
    login(values)
    navigate("/profile")
    notification.success({
      message: 'Welcome'
    });
  };
  return (
    <>
      <div className="container-fluid d-flex align-items-center" id='register-card'>
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-secondary text-light text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="on"
                layout="vertical"
                className="ant-form-custom"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { pattern: emailRegex, message: 'Please input a correct email!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                </Form.Item>
                <div className="text-center mt-3">
                  <a href="/register">Don't have an account?</a>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login