import React, { Component } from "react";
import axios from "axios";
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

  axios.put("/api/addToCart/"){}

  render() {
    let { brushes } = this.state;
    let allBrushes = brushes.map(e => {
      console.log(e);
      return (
        <div className="card" key={e.prod_id}>
          <img className="imageSize" src={e.imgurl} alt="Brush" />
          <h3> Size {e.size} </h3>
          <h3> Price ${e.price}</h3>
          <button> Add to Cart </button>
          <div />
        </div>
      );
    });
    return <div>{allBrushes}</div>;
  }
}
