import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UsersContext';
import { Spin } from "antd";

const Profile = () => {
  const { getUserInfo, token , user} = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" className='mt-5' />;
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5 pt-5">
      <div className="card">
        <div className="card-header bg-primary text-white text-center">
          <h3>User Details</h3>
        </div>
        <div className="card-body p-5">
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
    </div>
  );
}

export default Profile;