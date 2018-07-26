import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          {routes}
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
