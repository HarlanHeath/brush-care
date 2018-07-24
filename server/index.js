require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const axios = require("axios");
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

//product crud
app.get("/api/products", controller.getProducts);

//cart crud
app.get("api/cart", cartcontroller.getCart);
//Postman is throwing up an error for this, possible that it's because there's no data in it

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
