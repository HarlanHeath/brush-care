require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const controller = require("./Controllers/getProducts");
const axios = require("axios");

const port = 3001;
const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(json());

app.get("/api/products", controller.getProducts);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
