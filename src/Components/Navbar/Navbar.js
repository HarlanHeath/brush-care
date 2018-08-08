import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Mainbar">
        <div className="full-menu">
          <Link to="/" className="route">
            Home
          </Link>
          <Link to="/products" className="route">
            Products
          </Link>
          <Link to="/cart" className="route">
            Cart
          </Link>
          <a href={process.env.REACT_APP_LOGIN} className="route">
            Login
          </a>
          <a href={process.env.REACT_APP_LOGOUT} className="route">
            Logout
          </a>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/" className="route">
              Home
            </Link>
            <Link to="/products" className="route">
              Products
            </Link>
            <Link to="/cart" className="route">
              Cart
            </Link>
            <a href={process.env.REACT_APP_LOGIN} className="route">
              Login
            </a>
            <a href={process.env.REACT_APP_LOGOUT} className="route">
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}
