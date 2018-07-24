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

  render() {
    let { brushes } = this.state;
    let allBrushes = brushes.map(e => {
      return (
        <div className="card" key={e.id}>
          <img className="imageSize" src={e.imgurl} alt="Brush" />
          <h3> Size {e.size} </h3>
          <h3> Price ${e.price}</h3>
          <div />
        </div>
      );
    });
    return <div>{allBrushes}</div>;
  }
}