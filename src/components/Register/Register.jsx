import React, { useContext } from 'react'
import { Input, Button, Form } from 'antd';
import { UserContext } from '../../context/UsersContext';


const Register = () => {

  const {register} = useContext(UserContext)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const onFinish = (values) => {
    register(values)
    navigate("/login")
  };

  return (
    <>
      <div id="register" className="container-fluid d-flex align-items-center min-vh-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-6 mt-n5">
            <div className="card shadow">
              <div className="card-header bg-secondary text-light text-center">
                <h3>Register</h3>
              </div>
              <div className="card-body">
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
                  onClick={onFinish}
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
                    <Button className='bg-secondary' htmlType="submit">
                      <p className='text-light'>Submit</p>
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