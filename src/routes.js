import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
// import Login from "./Components/Login/Login";

export default (
  <Switch>
    {/* <Route path="/login" component={Login} /> */}
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />
    <Route exact path="/" component={Home} />
  </Switch>
);
