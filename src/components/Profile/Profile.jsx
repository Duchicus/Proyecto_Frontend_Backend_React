import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UsersContext';
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { getUserInfo, token, user, logout } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token, getUserInfo]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

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
                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {user ? (
          <>
            <p>User: {user.email}</p>
            <p>Orders: {user.Orders}</p>
            <p>Role: {user.role}</p>
          </>
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
}

export default Profile;