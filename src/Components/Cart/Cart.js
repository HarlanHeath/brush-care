import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import Checkout from "../Stripe/Checkout";
import "./Cart.css";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      cart: [],
      total: 0
    };
  }

  componentDidMount() {
    axios
      .get(`/api/me`)
      .then(res => {
        this.setState({
          userId: res.data.user_id
        });
        this.getCart(res.data.user_id);
      })
      .then(() => {
        axios.get(`/api/carttotal/${this.state.userId}`).then(res2 => {
          this.setState({
            total: res2.data[0].sum
          });
        });
      })
      .catch(err => console.log(err));
  }

  getCart(id) {
    axios.get(`/api/cart/${id}`).then(res2 => {
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
    axios.get(`/api/me`).then(res1 => {
      axios.post(`/api/quantchange/${res1.data.user_id}/${e}`).then(() => {
        this.getCart(this.state.userId);
      });
    });
  }

  render() {
    let { cart } = this.state;
    let allCart = cart.map(e => {
      return (
        <div className="cart-card" key={e.prod_id}>
          <h3>{e.quantity}</h3>
          <button
            className="Quantity"
            disabled={e.quantity <= 1 ? true : false}
            onClick={() => this.updateQuant(e.prod_id)}
          >
            {" "}
            edit quantity{" "}
          </button>
          <img src={e.imgurl} className="cart-image-size" />
          <h3>Brush Size {e.size}</h3>
          <button className="Remove" onClick={() => this.removeFromCart(e.id)}>
            Remove from Cart
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="cart-container">{allCart}</div>
        <div className="total-container">
          <h2>Cart Total: ${this.state.total}</h2>
        </div>
        <Checkout
          name={"The Road to learn React"}
          description={"Only the Book"}
          amount={this.state.total}
        />
      </div>
    );
  }
}
