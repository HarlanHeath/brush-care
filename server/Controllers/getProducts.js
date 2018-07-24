module.exports = {
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .all_abrush()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  }
};
