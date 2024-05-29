import React, { useContext } from 'react'
import { Input, Button, Form } from 'antd';
import { UserContext } from '../../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import "./Register.scss"

const Register = () => {

  const {register} = useContext(UserContext)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const navigate = useNavigate()

  const onFinishRegister = (values) => {
    register(values)
    navigate("/login")
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center" id='register-card'>
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-secondary text-light text-center">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinishRegister}
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register