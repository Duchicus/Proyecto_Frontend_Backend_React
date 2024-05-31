import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UsersContext';
import './Profile.scss'
import { Collapse } from "antd";
const { Panel } = Collapse

const Profile = () => {
  const { getUserInfo, token, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  if (!user) {
    return <div>User not found</div>
  } else {
    const ordersArray = user.Orders
    return (
      <div id='profile' className="container-fluid d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="card">
          <div className="card-header bg-dark text-white text-center">
            <h3>User Details</h3>
          </div>
          <div className="card-body p-5">
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text">
              <strong>Role:</strong> {user.role}
            </p>
              <strong>Orders:</strong>
              {console.log(ordersArray)}
              
              {ordersArray.length > 0 ? (
                ordersArray.map((order, index) => (
                  <span key={index} className="order-item">
                    <Collapse defaultActiveKey={index}>
                      <Panel header={`pedido ${order.id}`} key={index}>
                        {order.Products.map((singleProduct, productIndex) => (
                          <span key={productIndex}>
                            {singleProduct.name} {productIndex < order.Products.length - 1 && ", "}
                          </span>
                        ))}
                      </Panel>
                    </Collapse>
                  </span>
                ))
              ) : (
                <span> No orders available</span>
              )}
          </div>
        </div>
      </div>
    );
  }


}

export default Profile;