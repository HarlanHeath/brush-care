import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="logpage">
        <div className="logbuttons">
          <a href={process.env.REACT_APP_LOGIN}>
            <button>Login</button>
          </a>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button>Logout</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
