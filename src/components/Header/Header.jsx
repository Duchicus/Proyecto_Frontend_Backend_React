import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UsersContext';
import { CartContext } from '../../context/CartsContext';
import { Badge } from 'antd';
import './Header.scss'

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
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <img src="src/images/logo.png" className="image-logo" alt="Logo" />
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light p-3" to="/">
                Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light p-3" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-light p-3 btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light p-3" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <Badge count={cartCount}>
                  <img src="src/images/carrito-logo.png" className="carrito-logo" alt="Cart" />
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header