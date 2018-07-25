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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

///////////////////Passport Login////////////////////////////
passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.users
    .get_user_by_authid(user.id)
    .then(response => {
      if (!response[0]) {
        db.users
          .add_user_by_authid([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(err => done(err, null));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
//////////////////////////////////////////////////////////

//product crud
app.get("/api/products", controller.getProducts);

//cart crud
app.get("/api/cart/:id", cartcontroller.getCart);
app.put("/api/addToCart/:user_id/:prod_id", cartcontroller.addToCart);
//app.delete("/api/delete", cartcontroller.deleteCart); not working
//Need to add an app.post to edit the quantity of items in the current cart

//login crud
app.get("/login", login);
app.post("/logout", logout);
app.get("/api/me", getUser);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
