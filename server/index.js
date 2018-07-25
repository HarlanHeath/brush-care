require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const axios = require("axios");
const passport = require("passport");
const strategy = require("strategy");
//login controller
const { logout, login, getUser } = require("./Controllers/userCtrl");
//product controllers
const controller = require("./Controllers/getProducts");
//cart conctrollers
const cartcontroller = require("./Controllers/cartControl");

const port = 3001;
const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(json());

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

//product crud
app.get("/api/products", controller.getProducts);

//cart crud
app.get("api/cart", cartcontroller.getCart);
//Postman is throwing up an error for this, possible that it's because there's no data in it
app.delete("api/delete", cartcontroller.deleteCart);
//Need to add an app.put to add items to the cart
//Need to add an app.post to edit the quantity of items in the current cart

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
