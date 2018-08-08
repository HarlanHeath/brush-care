import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./Products.css";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      brushes: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({
        brushes: res.data
      });
    });
  }

  addToCart(val) {
    axios.get(`/api/me`).then(res1 => {
      axios.put(`/api/addToCart/${res1.data.user_id}/${val}`).then(() => {
        swal({
          type: "success",
          title: "Product has been added to your cart",
          showConfirmButton: false,
          timer: 1500
        });
      });
    });
  }

  render() {
    let { brushes } = this.state;
    let allBrushes = brushes.map(e => {
      return (
        <div className="card" key={e.prod_id}>
          <img className="imageSize" src={e.imgurl} alt="Brush" />
          <h3> Size: {e.size} </h3>
          <h3> Hair Type: {e.hairtype} </h3>
          <h3> Shape: {e.headshape} </h3>
          <h2> Price ${e.price}</h2>
          <button
            className="addToCart"
            onClick={() => this.addToCart(e.prod_id)}
          >
            {" "}
            Add to Cart{" "}
          </button>
          <div />
        </div>
      );
    });
    return (
      <div className="product-page">
        <div className="body">{allBrushes}</div>
      </div>
    );
  }
}
