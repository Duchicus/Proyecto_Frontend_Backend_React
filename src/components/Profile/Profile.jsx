import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UsersContext';
import { Spin } from "antd";
import './Profile.scss'

const Profile = () => {
  const navigate = useNavigate();
  const { getUserInfo, token, user } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token, getUserInfo]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5 pt-5">
      {user ? (
        <div className="card">
          <div className="card-header bg-primary text-white text-center">
            <h3>User Details</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text">
              <strong>Orders:</strong> {user.Orders}
            </p>
            <p className="card-text">
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}

export default Profile;