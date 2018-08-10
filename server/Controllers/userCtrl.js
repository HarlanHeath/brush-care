const passport = require("passport");

module.exports = {
  login: passport.authenticate("auth0", {
    successRedirect: process.env.REACT_APP_SUCCESS_REDIRECT,
    failureRedirect: process.env.REACT_APP_FAIL_REDIRECT
  }),

  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect("http://localhost:3000/#/");
    });
  },

  getUser: (req, res) => {
    if (!req.user) {
      res.status(500).send({ message: "Not Logged In" });
    } else {
      res.status(200).send(req.user);
    }
  }
};
