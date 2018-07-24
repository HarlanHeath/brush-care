module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_cart()
      .then(cart => res.status(200).send(cart))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  },

  deleteCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance;
    delete_cart()
      .then(cart => res.statis(200).send(cart))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  }
};
