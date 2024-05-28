import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { UserContext } from '../../context/UsersContext';

const Header = () => {

  const {token , logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout();
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
              <Link className="nav-link" to="/">Home <FaHome /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart <FaBasketShopping /></Link>
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
          </ul>
        </div >
      </div >
    </nav >
  )
}

export default Header