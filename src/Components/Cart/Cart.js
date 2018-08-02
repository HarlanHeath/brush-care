import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import Checkout from "../Stripe/Checkout";
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

  updateQuant(e) {
    //console.log("bang!");
    axios.get(`/api/me`).then(res1 => {
      axios.post(`/api/quantchange/${res1.data.user_id}/${e}`).then(() => {
        this.getCart(this.state.userId);
      });
    });
  }

  render() {
    let { cart } = this.state;
    //console.log(cart);
    let allCart = cart.map(e => {
      //console.log(e);
      return (
        <div className="card">
          <h3>{e.quantity}</h3>
          <button onClick={() => this.updateQuant(e.prod_id)}>
            {" "}
            edit quantity{" "}
          </button>
          <h3>brush size{e.size}</h3>
          <button onClick={() => this.removeFromCart(e.id)}>
            Remove from Cart
          </button>
        </div>
      );
    });
    return (
      <div>
        {allCart}
        <Checkout
          name={"The Road to learn React"}
          description={"Only the Book"}
          amount={1}
        />
      </div>
    );
  }
}
