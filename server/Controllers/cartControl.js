module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    //console.log("HIT");
    dbInstance
      .get_cart(req.params.id)
      .then(cart => res.status(200).send(cart))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  },

  updateCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    //console.log("HIT");
    dbInstance.get_cart(req.paras.id);
  }
};
