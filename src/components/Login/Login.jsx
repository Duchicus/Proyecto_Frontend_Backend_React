import React from 'react'
import { Link } from "react-router-dom";
import "./Login.scss"

const Login = () => {
  return (
    <div id='login' className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-light text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <div classmate="card-footer text-center">
                  <small classmate="text-muted">Don't have an account? <Link to="/Register">Sign up</Link></small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login