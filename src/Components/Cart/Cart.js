import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import "./Cart.css";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      cart: []
    };
  }

  componentDidMount() {
    axios.get(`/api/me`).then(res => {
      this.setState({
        userId: res.data.user_id
      });
      this.getCart(res.data.user_id);
    });
  }

  getCart(id) {
    axios.get(`/api/cart/${id}`).then(res2 => {
      //console.log(res2);
      this.setState({
        cart: res2.data
      });
    });
  }

  removeFromCart(e) {
    axios.delete(`/api/delete/${e}`).then(() => {
      this.getCart(this.state.userId);
    });
  }

  render() {
    let { cart } = this.state;
    console.log(cart);
    let allCart = cart.map(e => {
      console.log(e);
      return (
        <div className="card">
          <h3>{e.quantity}</h3>
          <h3>brush size{e.size}</h3>
          <button onClick={() => this.removeFromCart(e.id)}>
            Remove from Cart
          </button>
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
