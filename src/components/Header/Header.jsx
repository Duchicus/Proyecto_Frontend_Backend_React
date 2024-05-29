import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { UserContext } from '../../context/UsersContext';
import { CartContext } from '../../context/CartsContext';
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {

  const { token, logout } = useContext(UserContext)
  const { removeCart } = useContext(CartContext)
  const navigate = useNavigate()

  const { cartCount } = useContext(CartContext)

  const handleLogout = async () => {
    await logout();
    await removeCart()
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container">
        <a className="navbar-brand" href="#">E-commerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <Badge count={cartCount}>
                  <Avatar>
                    <ShoppingCartOutlined />
                  </Avatar>
                </Badge>
              </Link>
            </li>
          </ul>
        </div >
      </div >
    </nav >
  )
}

export default Header