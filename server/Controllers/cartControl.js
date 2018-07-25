module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_cart(req.params.id)
      .then(cart => res.status(200).send(cart))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  },

  addToCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance.get_cart(req.params.user_id).then(response => {
      let filteredCart = response.filter(elem => {
        return elem.prod_id == req.params.prod_id;
      });

      if (filteredCart.length) {
        dbInstance
          .update_cart([filteredCart[0].quantity + 1, filteredCart[0].id])
          .then(response => res.status(200).send("Cart Updated!"));
      } else {
        dbInstance
          .addto_cart([req.params.user_id, req.params.prod_id])
          .then(response => res.status(200).send("Added to Cart!"));
      }
    });
  }

  // deleteFromCart:(req,res,next)=>{
  //   const dbInstance = req.app.get("db");
  //   dbInstance.get_cart(req.params.)
  // }
};
