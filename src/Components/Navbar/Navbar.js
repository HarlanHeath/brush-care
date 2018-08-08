import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Login from "../Login/Login";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    };
  }

  componentDidMount() {
    axios
      .get(`/api/me`)
      .then(res1 => {
        console.log(res1);
        this.setState({
          logged: true
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="Mainbar">
        {/* {console.log(this.state.logged)} */}
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
          {this.state.logged ? (
            <a href={process.env.REACT_APP_LOGOUT} className="route">
              Logout
            </a>
          ) : (
            <a href={process.env.REACT_APP_LOGIN} className="route">
              Login
            </a>
          )}
          {/* <a href={process.env.REACT_APP_LOGIN} className="route">
            Login
          </a>
          <a href={process.env.REACT_APP_LOGOUT} className="route">
            Logout
          </a> */}
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
            {this.state.logged ? (
              <a href={process.env.REACT_APP_LOGOUT} className="route">
                Logout
              </a>
            ) : (
              <a href={process.env.REACT_APP_LOGIN} className="route">
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
