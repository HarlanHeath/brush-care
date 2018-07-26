import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import "./Cart.css";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    axios.get("/api/me").then(res => {
      axios.get(`/api/cart/`).then(res => {
        this.setState({
          cart: res.data
        });
      });
    });
  }

  render() {
    let { cart } = this.state;
    let allCart = cart.map(e => {
      console.log(e);
      return (
        <div className="card">
          <h3>{e.quantity}</h3>
        </div>
      );
    });
    return <div>{allCart}</div>;
  }
}

// fire get cart in componentdidmount
// save cart to state
// map through cart and show values on screen
// make a button tag in map
// button onCLick pass in id and fire Axios.delete
// Axios.delete .then (() => getCart)
