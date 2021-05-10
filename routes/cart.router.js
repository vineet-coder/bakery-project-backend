const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model.js");
const { Cart } = require("../models/cart.model.js");

router
  .route("/")

  .get(async (req, res) => {
    try {
      const result = await Cart.find().populate("id");
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  })

  .post(async (req, res) => {
    try {
      const { id, qnt } = req.body;

      await Product.findByIdAndUpdate(id, { cart: true });

      const newCart = new Cart({ id: id, quantity: qnt });

      await newCart.save();

      res.send({ succcess: "ture" });
    } catch (error) {
      console.log(error);
    }
  })

  .delete(async (req, res) => {
    try {
      const { cartProductId, productId } = req.body;


      await Product.findByIdAndUpdate(productId, { cart: false });
      await Cart.findByIdAndDelete(cartProductId);

      res.send({ succcess: "delete success" });

    } catch (error) {
      console.log(error);
    }
  });

router.route("/products").post(async (req, res) => {
  const { id, qnt } = req.body;

  await Product.findByIdAndUpdate(id, { cart: true });

  const newCart = new Cart({ id: id, quantity: qnt });

  await newCart.save();

  const product = await Product.findById(id);
  console.log(product);

  res.send(product);

});

module.exports = router;
