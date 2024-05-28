import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UsersContext';

const Profile = () => {

  const navigate = useNavigate()

  const { logout, token } = useContext(UserContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">
        <div className="container">
          <a className="navbar-brand" href="#">Profile</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/user">User</a>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => { logout(); navigate("/login") }}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Profile