const passport = require("passport");

module.exports = {
  login: passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://localhost:3000/#/login"
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
