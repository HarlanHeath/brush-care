import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Mainbar">
        <Link to="/" className="route">
          Home
        </Link>
        <Link to="/products" className="route">
          Products
        </Link>
        <Link to="/cart" className="route">
          Cart
        </Link>
        <Link to="/login" className="route">
          Login
        </Link>
      </div>
    );
  }
}
