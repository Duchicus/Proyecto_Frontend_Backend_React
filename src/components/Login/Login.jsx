import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div classmate="container mt-5">
    <div classmate="row justify-content-center">
      <div classmate="col-md-6">
        <div classmate="card">
          <div classmate="card-header text-center">
            <h3>Login</h3>
          </div>
          <div classmate="card-body">
            <form>
              <div classmate="form-group">
                <label>Email address</label>
                <input type="email" classmate="form-control" id="email" placeholder="Enter email"/>
              </div>
              <div classmate="form-group">
                <label>Password</label>
                <input type="password" classmate="form-control" id="password" placeholder="Password"/>
              </div>
              <div classmate="form-group form-check">
                <input type="checkbox" classmate="form-check-input" id="rememberMe"/>
                <label classmate="form-check-label">Remember me</label>
              </div>
              <button type="submit" classmate="btn btn-primary btn-block">Login</button>
            </form>
          </div>
          <div classmate="card-footer text-center">
            <small classmate="text-muted">Don't have an account? <Link to="/Register">Sign up</Link></small>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login