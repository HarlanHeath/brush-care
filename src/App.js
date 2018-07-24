import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div> I'm a website :D </div>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
